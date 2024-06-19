import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { useSettings } from './SettingsContext';
import { useTimerScrambleContext } from './TimerScrambleContext';
const PracticeModeContext = createContext();

const initialState = {
    active: false,
    numSolves: 0,
    solves: [],
    totalTime: 0,
    overallAverage: 0,
    epsilon: 1,
    epsilonDecay: 0.01,
    recencyFactor: 2.33,
    learningRate: 0.5,
    displayStats: false,
    totalScore: 0,
    prevCase: null,
    scoreChange: 0,
    prevCases: [], // Stored by their indicies in cases array
    numCasesSeen: 0,
    cases: [], // Dynamic queue that updates based on score of each case
    numCases: null,
    fastCalcScore: true,
    firstScoreUpdate: false,
    scoreIndication: true,
    scorePopupShown: false
};

const loadData = () => {
    const data = localStorage.getItem('practiceModeData');
    return data ? JSON.parse(data) : null;
};

const saveData = (data) => {
    localStorage.setItem('practiceModeData', JSON.stringify(data));
};

function calculateRecencyWeightedStats(times, recencyFactor, maxSolves) {
    let weightedSum = 0;
    let weightSum = 0;
    let currentWeight = 1;

    const start = Math.max(0, times.length - maxSolves);
    const relevantTimes = times.slice(start);

    // Calculate weighted average
    for (let i = 0; i < relevantTimes.length; i++) {
        weightedSum += relevantTimes[i] * currentWeight;
        weightSum += currentWeight;
        currentWeight *= recencyFactor;  // Increase the weight for the next newer time
    }
    const weightedAverage = weightedSum / weightSum;

    // Reset variables for standard deviation calculation
    weightedSum = 0;
    weightSum = 0;
    currentWeight = 1;

    // Calculate weighted sum of squared deviations from the mean
    for (let i = 0; i < relevantTimes.length; i++) {
        const deviation = relevantTimes[i] - weightedAverage;
        weightedSum += deviation * deviation * currentWeight;
        weightSum += currentWeight;
        currentWeight *= recencyFactor;  // Increase the weight for the next newer time
    }
    const weightedVariance = weightedSum / weightSum;
    const weightedStdDev = Math.sqrt(weightedVariance);

    return { average: weightedAverage, stdDev: weightedStdDev };
}

function calculateScore(score, prevAverage, newAverage, overallAverage, learningRate, maxIncreaseFactor = 1.5, decayRate = 0.95) {
    // Calculate deviations
    const overallDeviation = newAverage / overallAverage;
    const caseSpecificDeviation = newAverage / prevAverage;

    // Combine deviations weighted by learning rate
    const combinedDeviation = (learningRate * overallDeviation) + ((1 - learningRate) * caseSpecificDeviation);

    // Calculate potential new score
    let newScore = score * combinedDeviation;

    // Soften score increases: prevent the score from increasing beyond a certain factor in one update
    if (newScore > score * maxIncreaseFactor) {
        newScore = score * maxIncreaseFactor;
    }

    // Apply decay to the score to gradually reduce it over time
    newScore *= decayRate;

    return newScore;
}

function calculateNormalizedScore(score, prevAverage, newAverage, overallAverage, overallStdDev, learningRate, maxIncreaseFactor = 1.5, decayRate = 0.95) {
    // Calculate z-scores
    const std = overallStdDev ? overallStdDev : 1
    const overallZScore = (newAverage - overallAverage) / std;
    let scoreChange = learningRate * overallZScore;

    if (prevAverage < newAverage) {
        scoreChange += 0.05*Math.abs(scoreChange);
    } else {
        scoreChange -= 0.05*Math.abs(scoreChange);
    }

    // Combine deviations weighted by learning rate
    let newScore = score + scoreChange;

    // Apply decay to the score to gradually reduce it over time
    newScore *= decayRate;

    return newScore;
}

function calculateStandardDeviation(times, mean) {
    const squaredDiffs = times.map(time => Math.pow(time - mean, 2));
    const avgSquareDiff = squaredDiffs.reduce((sum, diff) => sum + diff, 0) / times.length;
    return Math.sqrt(avgSquareDiff);
}

function reducer(state, action) {
    switch (action.type) {
        case 'update_case':
            const { solveTime, scramble, caseIndex } = action.payload;
            
            const adjustedSolveTime = Math.min(15, solveTime); // HARDCODED
            const newTotalTime = state.totalTime + adjustedSolveTime;
            const newNumSolves = state.numSolves + 1;
             // Create a new solve object
            const newSolve = { time: adjustedSolveTime, scramble };
            const solves = [...state.solves, newSolve];

            // Extract solve times for calculations
            const times = solves.map(solve => solve.time);

            // Adjust the recency factor for a longer list
            // The adjustment formula reduces the exponential growth over more items
            const adjustedFactor = Math.pow(state.recencyFactor, 1 / (Math.min(times.length, 30) / 2));
            const { average: overallAverage, stdDev: overallStdDev } = calculateRecencyWeightedStats(times, adjustedFactor, 30);
            
            let totalScore = state.totalScore;
            let numCasesSeen = state.numCasesSeen;

            let cases = [...state.cases];
            const prevCases = [...state.prevCases, caseIndex];
            let existingCase = null;
            let scoreChange = 0
            let firstScoreUpdate = state.firstScoreUpdate;

            if (caseIndex !== -1) {
                existingCase = {...cases[caseIndex]};
                
                existingCase.times.push(parseFloat(adjustedSolveTime.toFixed(2)));

                if (existingCase.times.length === 1) {
                    existingCase.seen = true;
                    numCasesSeen += 1;
                }

                const { average: newAverage } = calculateRecencyWeightedStats(existingCase.times, state.recencyFactor, 3);
                // If case has 3 solves then update score
                if (existingCase.times.length > (state.fastCalcScore ? 1 : 2)) {
                    const newScore = calculateNormalizedScore(existingCase.score, existingCase.average, newAverage, overallAverage, overallStdDev, state.learningRate);
                    existingCase.scores.push(newScore);
                    scoreChange = existingCase.score - newScore
                    
                    totalScore = totalScore - existingCase.score + newScore;
                    //console.log(newScore, existingCase.score, currCase.subset, currCase.caseIndex);
                    existingCase.prevScore = existingCase.score;
                    existingCase.score = newScore;

                    if (!firstScoreUpdate) {
                        firstScoreUpdate = true;
                    }
                } else {
                    existingCase.scores.push(0);
                }
                
                existingCase.average = newAverage;
                cases[caseIndex] = existingCase;
            } else {
                console.log("Couldn't find case, cases not initialized correctly");
            }

            // Optionally sort cases here if needed
            return { ...state, cases, prevCase: existingCase, scoreChange, prevCases, solves, totalTime: newTotalTime, numSolves: newNumSolves, overallAverage: overallAverage, totalScore: totalScore, numCasesSeen: numCasesSeen, firstScoreUpdate: firstScoreUpdate };
        case 'start_practice_mode':
            const { learningRate, displayStats, scoreIndication, initialCases } = action.payload;
            return { ...initialState, active: true, cases: initialCases, numCases: initialCases.length, learningRate, displayStats, scoreIndication };
        case 'stop_practice_mode':
            return { ...state, active: false };
        case 'reset_practice_mode':
            return initialState;
        case 'decrement_epsilon':
            return { ...state, epsilon: Math.max(state.epsilon - state.epsilonDecay, 0.1) }; // Ensures epsilon doesn't go below 0.1
        case 'SCORE_POPUP':
            return { ...state, scorePopupShown: action.payload };
        default:
            throw new Error('Unhandled action type: ' + action.type);
    }
}

export const PracticeModeProvider = ({ children }) => {
    const practiceModeData = loadData();
    const [state, dispatch] = useReducer(reducer, practiceModeData ? practiceModeData : initialState);
    const { updateAlg, selectedAlgset, selectedSubsets, algsetData, currAlg, setRandomAlg, algsInOrder, toggleAlgsInOrder } = useTimerScrambleContext(); 

    // Save state on important events
    useEffect(() => {
        // const handleBeforeUnload = () => {
        //     saveData(state);
        // };

        // const handleVisibilityChange = () => {
        //     if (document.visibilityState === 'hidden') {
        //         saveData(state);
        //     }
        // };

        // window.addEventListener('beforeunload', handleBeforeUnload);
        // document.addEventListener('visibilitychange', handleVisibilityChange);

        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        //     document.removeEventListener('visibilitychange', handleVisibilityChange);
        //     saveData(state); // Save state on component unmount
        // };
        if (state.numSolves % 10 === 0) {
            saveData(state);
        }
    }, [state.numSolves]);

    const startPracticeMode = (practiceModeSettings) => {
        const initialCases = [];

        let subsets = selectedSubsets[selectedAlgset];
        if (subsets.length === 0) {
            subsets = Object.keys(algsetData[selectedAlgset]); // Use all subsets if none selected
        }
        for (let i = 0; i < subsets.length; i++) {
            algsetData[selectedAlgset][subsets[i]].forEach((caseData, index) => {
                initialCases.push({
                    algset: selectedAlgset, 
                    subset: subsets[i],
                    subsetIndex: i, 
                    caseIndex: index, 
                    seen: false, // If it has showed up at least once
                    times: [], 
                    scores: [],
                    average: 0, 
                    score: 0,
                    prevScore: 0,
                })
            });
        }

        if (algsInOrder) {
            toggleAlgsInOrder();
        }
        
        dispatch({ type: 'start_practice_mode', payload: {...practiceModeSettings, initialCases} });
        updateAlg();
    };

    const getNextCase = (prevCaseIndex) => {
        // Selecting next case using Softmax

        // 1. Calculate Exponentials of Scores: Each score is turned into an exponential. This is commonly used in methods like the Softmax function because it makes the function output more "selective."
        //    Higher scores will have exponentially greater probabilities, accentuating differences between scores.
        //
        // 2. Normalize Scores to Create Probabilities: By dividing each exponential score by the sum of all exponential scores, you create a probability distribution.
        //    Each case's probability is proportional to its score relative to the total scores.
        //
        // 3. Random Selection Based on Probabilities: The function then uses a uniformly distributed random number to select an index based on these probabilities.
        //    It accumulates the probabilities until the accumulated sum exceeds the random number. This method ensures that higher-scored cases have a higher chance of being selected but does not rely on the scores being in any particular order.
        // 
        // Key Points:
        // - Fair Selection: Each case has a chance of being selected proportional to its score, regardless of its position in the list.
        // - Flexibility: This method can handle any list of scores, ordered or unordered. You just need a list of scores and their corresponding cases.
        // - Bias Toward Better Scores: By using exponentials, this method inherently biases the selection toward cases with higher scores, which can be useful in practice modes where you want to focus more on cases that need more practice (assuming higher scores indicate cases that need more attention).
        
        // First create probabilities
        let scores = state.cases.map(c => Math.exp(c.score));

        // if case appeared in last three solves set score to 0
        if (state.numCases > 3) {
            //console.log(state.prevCases.slice(-3))
            for (const index of state.prevCases.slice(-2)) scores[index] = 0;
            scores[prevCaseIndex] = 0; // We have to do this because prevCases doesn't currently include the newest added
        }

        const scoreSum = scores.reduce((a, b) => a + b, 0);
        const probabilities = scores.map(s => s / scoreSum);

        // Now select based on probabilities
        const random = Math.random();
        let sum = 0;
        let nextCaseIndex = probabilities.length - 1; // In case of rounding errors

        for (let i = 0; i < probabilities.length; i++) {
            sum += probabilities[i];
            if (random < sum) {
                nextCaseIndex = i;
                break;
            }
        }
        
        return state.cases[nextCaseIndex];
    }

    const getRandomCase = () => {
        const numAppearances = state.cases.map(c => c.times.length);

        let possibleCases = []

        for (let i = 0; i < numAppearances.length; i++) {
            if (numAppearances[i] < 2) possibleCases.push(i);
        }

        const nextCaseIndex = possibleCases.length > 0 ? possibleCases[Math.floor(Math.random()*possibleCases.length)] : Math.floor(Math.random()*state.numCases)
        return state.cases[nextCaseIndex];
    }

    const updatePracticeMode = (solveTime, scramble) => {
        const caseIndex = state.cases.findIndex(c => c.algset === currAlg.index.algset && c.subsetIndex === currAlg.index.subsetIndex && c.caseIndex === currAlg.index.caseIndex);

        dispatch({ type: 'update_case', payload: { solveTime, scramble, caseIndex } });
        
        let nextCase = getNextCase(caseIndex);
        setRandomAlg(false);

        if (Math.random() > 0.1) {
            nextCase = getNextCase(caseIndex);
            setRandomAlg(false);
        } else {
            nextCase = getRandomCase();
            setRandomAlg(true);
        }

        updateAlg(undefined, undefined, [nextCase.subsetIndex, nextCase.caseIndex]);
        
        dispatch({ type: 'decrement_epsilon' });
    };
    
    const stopPracticeMode = () => {
        dispatch({ type: 'reset_practice_mode' });
    };
    
    const resetPracticeMode = () => {
        dispatch({ type: 'reset_practice_mode' });
    };

    const setScorePopupShown = (shown) => {
        dispatch({ type: 'SCORE_POPUP', payload: shown })
    }

    return (
        <PracticeModeContext.Provider value={{ state, startPracticeMode, stopPracticeMode, resetPracticeMode, updatePracticeMode, setScorePopupShown }}>
            {children}
        </PracticeModeContext.Provider>
    );
};

export const usePracticeMode = () => useContext(PracticeModeContext);
