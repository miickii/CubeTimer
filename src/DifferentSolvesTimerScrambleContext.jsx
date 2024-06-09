import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
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
    const [solves, setSolves] = useState({
        regular: initialData ? initialData.regularSolves : [],
        practice: initialData ? initialData.practiceModeSolves : [],
    });
    const [solvesSortOrder, setSolvesSortOrder] = useState('asc'); // State for sorting order of solves in history tab
    const algsetData = algsets;
    const [selectedAlgset, setSelectedAlgset] = useState(initialData ? initialData.selectedAlgset : "3x3x3");
    const [selectedSubsets, setSelectedSubsets] = useState(initialData ? initialData.selectedSubsets : initializeSubsets());
    const [currAlg, setCurrAlg] = useState(initialData ? initialData.currAlg : {
        index: null,
        scramble: '',
        solutions: null,
        prevSolutions: null,
    });
    const [algsInOrder, setAlgsInOrder] = useState(initialData ? initialData.algsInOrder : false);
    const [nextAlgIndex, setNextAlgIndex] = useState(initialData ? initialData.nextAlgIndex : [0, 0]);
    const [randomAlg, setRandomAlg] = useState(false);
    const [practiceMode, setPracticeMode] = useState(initialData ? initialData.practiceMode : false)

    useEffect(() => {
        const dataToSave = {
            regularSolves: solves.regular,
            practiceModeSolves: solves.practice,
            selectedAlgset,
            selectedSubsets,
            currAlg,
            nextAlgIndex,
            algsInOrder,
            practiceMode
        };
        saveData(dataToSave);
    }, [solves, selectedAlgset, selectedSubsets, currAlg, nextAlgIndex, algsInOrder, practiceMode]);
    
    const setAlgset = (algset) => {
        setSelectedAlgset(algset);
        updateAlg(algset, selectedSubsets[algset], algsInOrder ? [0, 0] : null);
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
        updateAlg(selectedAlgset, newSubsets, algsInOrder ? [0, 0] : null);
    };

    const resetSubsets = () => {
        setSelectedSubsets(prevSubsets => {
            return {
                ...prevSubsets,
                [selectedAlgset]: []
            }
        })
        updateAlg(selectedAlgset, [], algsInOrder ? [0, 0] : null);
    }

    
    const toggleAlgsInOrder = () => {
        setNextAlgIndex([0, 0]);
        setAlgsInOrder(prev => !prev);
    }

    const addSolve = (time, scramble, isPracticeMode) => {
        setSolves(prevSolves => ({
            ...prevSolves,
            [isPracticeMode ? 'practice' : 'regular']: [...prevSolves[isPracticeMode ? 'practice' : 'regular'], { time, scramble }]
        }));
    };

    const getSolves = useCallback(() => {
        return practiceMode ? solves['practice'] : solves['regular'];
    }, [practiceMode, solves]);

    const togglePracticeMode = (state) => {
        setPracticeMode(state);
    }

    const deleteLastTime = () => {
        setSolves(prevSolves => ({
            ...prevSolves,
            [practiceMode ? 'practice' : 'regular']: prevSolves[practiceMode ? 'practice' : 'regular'].slice(0, -1)
        }));
    };

    const resetSolves = () => {
        setSolves(prevSolves => ({
            ...prevSolves,
            [practiceMode ? 'practice' : 'regular']: []
        }));
    };

    const toggleSortOrder = () => {
        setSolvesSortOrder(solvesSortOrder === 'asc' ? 'desc' : 'asc');
    };

    const updateAlg = (algset=selectedAlgset, subsets=selectedSubsets[selectedAlgset], algIndex=null) => {
        if (subsets.length === 0) {
            subsets = Object.keys(algsets[algset]); // Use all subsets if none selected
        }

        // If no specific alg is specified we will set it to the next alg in order
        if (!algIndex && algsInOrder) {
            algIndex = nextAlgIndex;
        }

        const [newAlg, newNextAlgIndex] = getRandomAlg(algset, subsets, algIndex, algsetData, algsInOrder);

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
            algsInOrder,
            toggleAlgsInOrder,
            algsetData,
            currAlg,
            randomAlg,
            setRandomAlg,
            solvesSortOrder,
            toggleSortOrder,
            getSolves,
            togglePracticeMode
        }}>
            {children}
        </TimerScrambleContext.Provider>
    );
};

export default TimerScrambleContext;
