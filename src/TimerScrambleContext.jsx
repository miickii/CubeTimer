import React, { createContext, useState, useContext, useEffect } from 'react';
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

const loadData = () => {
    const data = localStorage.getItem('casesSolvesData');
    return data ? JSON.parse(data) : null;
};

const saveData = (data) => {
    localStorage.setItem('casesSolvesData', JSON.stringify(data));
};

export const useTimerScrambleContext = () => useContext(TimerScrambleContext);

export const TimerScrambleProvider = ({ children }) => {
    const initialData = loadData();
    
    const [timerRunning, setTimerRunning] = useState(false);
    const [solves, setSolves] = useState(initialData ? initialData.solves : []);
    const algsetData = algsets;
    const [selectedAlgset, setSelectedAlgset] = useState(initialData ? initialData.selectedAlgset : "3x3x3");
    const [selectedSubsets, setSelectedSubsets] = useState(initialData ? initialData.selectedSubsets : initializeSubsets());
    const [currAlg, setCurrAlg] = useState(initialData ? initialData.currAlg : {
        index: null,
        scramble: '',
        solutions: null,
        prevSolutions: null,
    });
    const [nextAlgIndex, setNextAlgIndex] = useState(initialData ? initialData.nextAlgIndex : null);
    const [randomAlg, setRandomAlg] = useState(false);

    // Save data to localStorage whenever the relevant state variables change
    useEffect(() => {
        const dataToSave = {
            solves,
            selectedAlgset,
            selectedSubsets,
            currAlg,
            nextAlgIndex,
        };
        saveData(dataToSave);
    }, [solves, selectedAlgset, selectedSubsets, currAlg, nextAlgIndex]);
    
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
            currAlg,
            randomAlg,
            setRandomAlg
        }}>
            {children}
        </TimerScrambleContext.Provider>
    );
};

export default TimerScrambleContext;
