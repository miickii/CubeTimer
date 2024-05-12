import React, { createContext, useReducer, useContext } from 'react';
import { useSettings } from './SettingsContext';
import { useTimerScrambleContext } from './TimerScrambleContext';
const PracticeModeContext = createContext();

const initialState = {
    active: false,
    numSolves: 0,
    times: [],
    totalTime: 0,
    overallAverage: 0,
    epsilon: 1,
    epsilonDecay: 0.01,
    initialScore: 10,
    recencyFactor: 2,
    learningRate: 0.5,
    displayStats: false,
    totalScore: null,
    prevCase: null,
    prevCases: [], // Stored by their indicies in cases array
    numCasesSeen: 0,
    cases: [], // Dynamic queue that updates based on score of each case
    numCases: null
};

function calculateRecencyWeightedAverage(times, recencyFactor, maxSolves) {
    let weightedSum = 0;
    let weightSum = 0;
    let currentWeight = 1;

    // only calculate for last x solves, where x is `maxSolves`
    const start = Math.max(0, times.length - maxSolves);
    const relevantTimes = times.slice(start);

    // Loop over the times array from the newest to the oldest
    for (let i = 0; i < relevantTimes.length; i++) {
        weightedSum += relevantTimes[i] * currentWeight;
        weightSum += currentWeight;
        currentWeight *= recencyFactor;  // Increase the weight for the next newer time
    }
    return weightedSum / weightSum;
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

function reducer(state, action) {
    switch (action.type) {
        case 'update_case':
            const { solveTime, caseIndex } = action.payload;
            
            const adjustedSolveTime = Math.min(15, solveTime); // HARDCODED
            const newTotalTime = state.totalTime + adjustedSolveTime;
            const newNumSolves = state.numSolves + 1;
            let times = [...state.times, adjustedSolveTime];
            //if (times.length > 30) times.shift();
            
            // Adjust the recency factor for a longer list
            // The adjustment formula reduces the exponential growth over more items
            const adjustedFactor = Math.pow(state.recencyFactor, 1 / (Math.min(times.length, 30) / 2));
            const weightedOverallAverage = calculateRecencyWeightedAverage(times, adjustedFactor, 30);

            let totalScore = state.totalScore;
            let numCasesSeen = state.numCasesSeen;

            let cases = [...state.cases];
            const prevCases = [...state.prevCases, caseIndex];
            let existingCase = null;

            if (caseIndex !== -1) {
                existingCase = {...cases[caseIndex]};
                
                existingCase.times.push(parseFloat(adjustedSolveTime.toFixed(2)));

                if (existingCase.times.length === 1) {
                    existingCase.seen = true;
                    numCasesSeen += 1;
                }

                const newAverage = calculateRecencyWeightedAverage(existingCase.times, state.recencyFactor, 3);
                // If case has 3 solves then update score
                if (existingCase.times.length > 2) {
                    const newScore = calculateScore(existingCase.score, existingCase.average, newAverage, weightedOverallAverage, state.learningRate);
                    
                    totalScore = totalScore - existingCase.score + newScore;
                    //console.log(newScore, existingCase.score, currCase.subset, currCase.caseIndex);
                    existingCase.prevScore = existingCase.score;
                    existingCase.score = newScore;
                }
                
                existingCase.average = newAverage;
                cases[caseIndex] = existingCase;
            } else {
                console.log("Couldn't find case, cases not initialized correctly");
            }

            // Optionally sort cases here if needed
            return { ...state, cases, prevCase: existingCase, prevCases, times, totalTime: newTotalTime, numSolves: newNumSolves, overallAverage: weightedOverallAverage, totalScore: totalScore, numCasesSeen: numCasesSeen };
        case 'start_practice_mode':
            const { initialScore, epsilonDecay, recencyFactor, learningRate, displayStats, initialCases } = action.payload;
            return { ...initialState, active: true, cases: initialCases, numCases: initialCases.length, initialScore, epsilonDecay, recencyFactor, learningRate, displayStats, totalScore: initialScore*initialCases.length };
        case 'stop_practice_mode':
            return { ...state, active: false };
        case 'reset_practice_mode':
            return initialState;
        case 'decrement_epsilon':
            return { ...state, epsilon: Math.max(state.epsilon - state.epsilonDecay, 0.1) }; // Ensures epsilon doesn't go below 0.1
        default:
            throw new Error('Unhandled action type: ' + action.type);
    }
}

export const PracticeModeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { settings, updateScramble, setScramble } = useSettings();
    const { updateAlg, selectedAlgset, selectedSubsets, algsetData, currAlg } = useTimerScrambleContext(); 

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
                    average: 0, 
                    score: practiceModeSettings.initialScore,
                    prevScore: practiceModeSettings.initialScore,
                })
            });
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
        console.log(nextCaseIndex)
        return state.cases[nextCaseIndex];
    }

    const getRandomCase = () => {
        const numAppearances = state.cases.map(c => c.times.length);

        let possibleCases = []

        for (let i = 0; i < numAppearances.length; i++) {
            if (numAppearances[i] < 3) possibleCases.push(i);
        }

        const nextCaseIndex = possibleCases.length > 0 ? possibleCases[Math.floor(Math.random()*possibleCases.length)] : Math.floor(Math.random()*state.numCases)
        return state.cases[nextCaseIndex];
    }

    const updatePracticeMode = (solveTime) => {
        const caseIndex = state.cases.findIndex(c => c.algset === currAlg.index.algset && c.subsetIndex === currAlg.index.subsetIndex && c.caseIndex === currAlg.index.caseIndex);

        dispatch({ type: 'update_case', payload: { solveTime, caseIndex } });
        
        let nextCase = null;

        if (Math.random() > state.epsilon) {
            nextCase = getNextCase(caseIndex);
        } else {
            nextCase = getRandomCase();
        }

        updateAlg(undefined, undefined, [nextCase.subsetIndex, nextCase.caseIndex], false)
        
        dispatch({ type: 'decrement_epsilon' });
    };
    
    const stopPracticeMode = () => {
        dispatch({ type: 'stop_practice_mode' });
    };
    
    const resetPracticeMode = () => {
        dispatch({ type: 'reset_practice_mode' });
    };

    return (
        <PracticeModeContext.Provider value={{ state, startPracticeMode, stopPracticeMode, resetPracticeMode, updatePracticeMode }}>
            {children}
        </PracticeModeContext.Provider>
    );
};

export const usePracticeMode = () => useContext(PracticeModeContext);
