import React, { createContext, useReducer, useContext } from 'react';
import { useSettings } from './SettingsContext';

const PracticeModeContext = createContext();

const initialState = {
    active: false,
    numSolves: 0,
    totalTime: 0,
    epsilon: 1,
    epsilonDecay: 0.01,
    initialScore: 10,
    recencyFactor: 2,
    learningRate: 0.5,
    cases: [] // Dynamic queue that updates based on score of each case
};

function calculateRecencyWeightedAverage(times, recencyFactor) {
    let weightedSum = 0;
    let weightSum = 0;
    let currentWeight = 1;
    // Loop over the times array from the newest to the oldest
    for (let i = 0; i < times.length; i++) {
        weightedSum += times[i] * currentWeight;
        weightSum += currentWeight;
        currentWeight *= recencyFactor;  // Increase the weight for the next newer time
    }
    return weightedSum / weightSum;
}

function reducer(state, action) {
    switch (action.type) {
        case 'update_case':
            const { solveTime, currCase } = action.payload;
            const newTotalTime = state.totalTime + solveTime;
            const newNumSolves = state.numSolves + 1;

            let cases = [...state.cases];
            let caseIndex = cases.findIndex(c => c.algset === currCase.algset && c.subset === currCase.subset && c.caseIndex === currCase.caseIndex);
            
            if (caseIndex !== -1) {
                let existingCase = {...cases[caseIndex]};
                existingCase.times.push(solveTime);
                if (existingCase.times.length > 3) existingCase.times.shift();

                //const newAverage = existingCase.times.reduce((a, b) => a + b, 0) / existingCase.times.length;
                // existingCase.average = newAverage;

                const newAverage = calculateRecencyWeightedAverage(existingCase.times, state.recencyFactor);

                const overallAverage = newTotalTime / newNumSolves;
                const overallDeviation = newAverage / overallAverage;
                const caseSpecificDeviation = newAverage / existingCase.average;

                const combinedDeviation = (state.learningRate * overallDeviation + (1 - state.learningRate) * caseSpecificDeviation);

                const newScore = existingCase.score * combinedDeviation;
                
                console.log(newScore, existingCase.score, currCase.subset, currCase.caseIndex);
                existingCase.average = newAverage;
                existingCase.score = newScore
                cases[caseIndex] = existingCase;
            } else {
                cases.push({
                    algset: currCase.algset, 
                    subset: currCase.subset, 
                    caseIndex: currCase.caseIndex, 
                    times: [solveTime], 
                    average: solveTime, 
                    score: state.initialScore // Start with a base score, why not just solveTime? This can introduce immediate bias towards cases that inherently might take longer on the first try, which might not be a true representation of the solver's ability with more practice
                });
            }

            // Optionally sort cases here if needed
            return { ...state, cases, totalTime: newTotalTime, numSolves: newNumSolves };
        case 'start_practice_mode':
            const { initialScore, epsilonDecay, recencyFactor, learningRate } = action.payload;
            return { ...initialState, active: true, initialScore, epsilonDecay, recencyFactor, learningRate };
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

    const startPracticeMode = (settings) => {
        dispatch({ type: 'start_practice_mode', payload: settings });
        updateScramble();
    };

    const updateNextCase = () => {
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

        const nextCase = state.cases[nextCaseIndex]
        const nextCaseScrambleData = settings.algsetData[nextCase.algset][nextCase.subset][nextCase.caseIndex];
        setScramble({
            currCase: {algset: nextCase.algset, subset: nextCase.subset, caseIndex: nextCase.caseIndex},
            scramble: nextCaseScrambleData.scrambles[Math.floor(Math.random() * nextCaseScrambleData.scrambles.length)],
            solutions: nextCaseScrambleData.solutions
        })
    }

    const updatePracticeMode = (solveTime) => {
        const currCase = settings.currCase;
        //console.log(currCase);
        dispatch({ type: 'update_case', payload: { solveTime, currCase } });
        
        if (Math.random() > state.epsilon) {
            updateNextCase();
        } else {
            updateScramble();
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
