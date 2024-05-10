import React, { createContext, useReducer, useContext } from 'react';
import { useSettings } from './SettingsContext';

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
            const { solveTime, currCase } = action.payload;
            
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
            let caseIndex = cases.findIndex(c => c.algset === currCase.algset && c.subset === currCase.subset && c.caseIndex === currCase.caseIndex);
            const prevCases = [...state.prevCases, caseIndex];
            let existingCase = null;

            if (caseIndex !== -1) {
                existingCase = {...cases[caseIndex]};
                
                existingCase.times.push(adjustedSolveTime);

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
            return { ...state, cases, prevCase: existingCase, times, totalTime: newTotalTime, numSolves: newNumSolves, overallAverage: weightedOverallAverage, totalScore: totalScore, numCasesSeen: numCasesSeen };
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

    const startPracticeMode = (practiceModeSettings) => {
        const initialCases = [];

        let selectedSubsets = settings.subsets[settings.algset];
        if (selectedSubsets.length === 0) {
            selectedSubsets = Object.keys(settings.algsetData[settings.algset]); // Use all subsets if none selected
        }

        for (let subset of selectedSubsets) {
            settings.algsetData[settings.algset][subset].forEach((caseData, index) => {
                initialCases.push({
                    algset: settings.algset, 
                    subset: subset, 
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
        updateScramble();
    };

    const getNextCase = () => {
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
        const scores = state.cases.map(c => Math.exp(c.score));
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

    const updateNextCase = () => {
        let nextCase = getNextCase();

        // Don't allow next case to be the same as previous case
        while (nextCase === state.prevCase) {
            nextCase = getNextCase();
            console.log("Same case from before, generate again");
        }

        const nextCaseScrambleData = settings.algsetData[nextCase.algset][nextCase.subset][nextCase.caseIndex];
        setScramble({
            currCase: {algset: nextCase.algset, subset: nextCase.subset, caseIndex: nextCase.caseIndex},
            scramble: nextCaseScrambleData.scrambles[Math.floor(Math.random() * nextCaseScrambleData.scrambles.length)],
            solutions: nextCaseScrambleData.solutions
        })
    }

    const updatePracticeMode = () => {
        const currCase = settings.currCase;
        const solveTime = settings.timer;

        dispatch({ type: 'update_case', payload: { solveTime, currCase } });
        
        if (Math.random() > state.epsilon) {
            updateNextCase();
        } else {
            updateScramble(); // Choose random case
            console.log("random case selected");
        }
        
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
