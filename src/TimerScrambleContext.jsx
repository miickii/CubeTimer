import React, { createContext, useState, useContext } from 'react';
import { addAUF, getRandomAlg } from './utils/scrambleUtils';
import { useSettings } from './SettingsContext';
import algsets from './data/algsets';

const TimerScrambleContext = createContext();

const initializeSubsets = () => {
    const subsets = {};
    Object.keys(algsets).forEach(algset => {
        subsets[algset] = [];
    });
    return subsets;
};

export const useTimerScrambleContext = () => useContext(TimerScrambleContext);

export const TimerScrambleProvider = ({ children }) => {
    const [timerRunning, setTimerRunning] = useState(false);
    // save following in localStorage:
    const [solves, setSolves] = useState([]);
    const algsetData = algsets;
    const [selectedAlgset, setSelectedAlgset] = useState("3x3x3");
    const [selectedSubsets, setSelectedSubsets] = useState(initializeSubsets());
    const [currAlg, setCurrAlg] = useState(() => {
        return {
            index: null,
            scramble: '',
            solutions: null,
            prevSolutions: null,
        }
    });
    const [nextAlgIndex, setNextAlgIndex] = useState(null); // If user toggles algs in order, then this gets set to and array keeping track of the next case index
    
    const setAlgset = (algset) => {
        setSelectedAlgset(algset);
        updateAlg(algset, selectedSubsets[algset], nextAlgIndex ? [0, 0] : null);
    };

    const toggleSubset = (subset) => {
        const currentSubsets = selectedSubsets[selectedAlgset] || [];
        const newSubsets = currentSubsets.includes(subset) 
            ? currentSubsets.filter(s => s !== subset)
            : [...currentSubsets, subset];

        setSelectedSubsets(prevSubsets => {
            return {
                ...prevSubsets,
                [selectedAlgset]: newSubsets
            }
        })
        updateAlg(selectedAlgset, newSubsets, nextAlgIndex ? [0, 0] : null);
    };

    const resetSubsets = () => {
        setSelectedSubsets(prevSubsets => {
            return {
                ...prevSubsets,
                [selectedAlgset]: []
            }
        })
        updateAlg(selectedAlgset, [], nextAlgIndex ? [0, 0] : null);
    }

    
    const toggleAlgInOrder = () => {
        setNextAlgIndex(prevAlgIndex => prevAlgIndex ? null : [0, 0]);
    }

    const addSolve = (time, scramble) => {
        setSolves(solves => [...solves, { time, scramble }]);
    };

    const deleteLastTime = () => {
        setSolves(solves => solves.slice(0, -1));
    };

    const resetSolves = () => {
        setSolves([]);
    };

    const updateAlg = (algset=selectedAlgset, subsets=selectedSubsets[selectedAlgset], algIndex=nextAlgIndex, getNewAlgIndex=true) => {
        if (subsets.length === 0) {
            subsets = Object.keys(algsets[algset]); // Use all subsets if none selected
        }

        const [newAlg, newNextAlgIndex] = getRandomAlg(algset, subsets, algIndex, algsetData, getNewAlgIndex);

        setCurrAlg(prevAlg => ({
            index: newAlg.index,
            scramble: newAlg.scramble,
            solutions: newAlg.solutions,
            prevSolutions: prevAlg.solutions
        }));

        if (newNextAlgIndex) setNextAlgIndex(newNextAlgIndex);
    }

    return (
        <TimerScrambleContext.Provider value={{
            timerRunning,
            setTimerRunning,
            solves,
            addSolve, 
            deleteLastTime, 
            resetSolves,
            updateAlg,
            setAlgset,
            toggleSubset,
            resetSubsets,
            selectedAlgset,
            selectedSubsets,
            nextAlgIndex,
            toggleAlgInOrder,
            algsetData,
            currAlg
        }}>
            {children}
        </TimerScrambleContext.Provider>
    );
};

export default TimerScrambleContext;
