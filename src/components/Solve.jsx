import React, { useState, useRef, useEffect } from 'react';
import { useStopwatch } from "react-use-precision-timer";
import { AnimatePresence, motion } from 'framer-motion';
import { useSettings } from '../SettingsContext';
import { usePracticeMode } from '../PracticeModeContext';
import { useTimerScrambleContext } from '../TimerScrambleContext';

const buttonVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { type: 'spring', stiffness: 120, damping: 20 }
    },
    exit: { y: 50, opacity: 0, transition: { duration: 0.3 } }
};

const scrambleVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.2 }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
};

const Solve = () => {
    const { settings } = useSettings();
    const { setTimerRunning, updateAlg, addSolve, selectedSubsets, currAlg, solves } = useTimerScrambleContext(); 
    const { state, updatePracticeMode } = usePracticeMode();
    const [isActive, setIsActive] = useState(false);
    const [timerDown, setTimerDown] = useState(false);
    const [touchStartPos, setTouchStartPos] = useState({ x: null, y: null });
    const [isInspecting, setIsInspecting] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [localSolutions, setLocalSolutions] = useState([]);
    const [timer, setTimer] = useState(0);
    const numSolves = useRef(solves.length);
    const timerRef = useRef(null);
    const stopwatch = useStopwatch();

    const startTimer = (inspection) => {
        setTimerRunning(true);
        stopwatch.start();
        setIsActive(true);

        timerRef.current = setInterval(() => {
            const milliseconds = stopwatch.getElapsedStartedTime();
            const time = inspection ? 15-Math.round(milliseconds / 1000) : (milliseconds / 1000);
            setTimer(time);
        }, 1);
    };

    const toggleInspection = () => {
        if (settings.useInspection && !isInspecting) {
            setIsInspecting(true);
            startTimer(true); // Start the inspection timer
        } else {
            clearInterval(timerRef.current);
            stopwatch.stop();
            setIsInspecting(false);
            startTimer(false); // Start the solve timer directly
        }
    };

    const handleUpdateScramble = ( solveFinished=true ) => {
        if (solveFinished && state.active) {
            updatePracticeMode()
        } else {
            updateScramble();
        }
    }

    const stopTimer = () => {
        stopwatch.stop();
        setIsActive(false);
        setTimerRunning(false);
        setShowSolutions(false);

        if (isInspecting) { // stop inspection
            setIsInspecting(false);
            setTimer(0);
            setTimerDown(false);
        } else { // solve finished

            if (state.active) {
                updatePracticeMode(timer);
            } else {
                updateAlg();
            }

            addSolve(timer, currAlg.scramble);
        }
        clearInterval(timerRef.current);
    }
    
    const handleTouchStart = (e) => {
        setTimerDown(true);
        setTouchStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };
    
    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        setTimerDown(false);
    
        // Check if the touch has moved significantly
        if (Math.abs(touchStartPos.x - touchEndX) < 50 && Math.abs(touchStartPos.y - touchEndY) < 50) {
          // Proceed with starting/stopping the timer
            if (!isActive || isInspecting) {
                toggleInspection();
            } else {
                stopTimer();
            }
        }
    };

    const cancelInspection = (e) => {
        e.stopPropagation();
        stopTimer();
    };

    useEffect(() => {
        if (timer < 0) {
            stopTimer();
        }
    }, [timer])

    useEffect(() => {
        if (settings.showPrevSolutions) {
            setLocalSolutions(currAlg.prevSolutions || []);
        } else {
            setLocalSolutions(currAlg.solutions || []);
        }
    }, [currAlg]);

    useEffect(() => {
        const currentLength = solves.length;
        if (currentLength < numSolves.current) {
            setTimer(0);  // Reset timer only if the length of solves decreases
        }
        // Update the ref to the current length after comparing
        numSolves.current = currentLength;
    }, [solves.length]);

    return (
        <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full h-full"
        >
            <div className='min-h-80' onTouchStart={(e) => e.stopPropagation()}>
                <AnimatePresence>
                    {!isActive && <motion.div variants={scrambleVariants} initial="hidden" animate="visible" exit="exit" className='flex flex-col items-center'>
                        <div className="text-xl mt-6 mb-5 px-8 h-12">{currAlg.scramble}</div>
                        {localSolutions.length > 0 && <>
                            <button
                                onTouchStart={(e) => e.stopPropagation()}
                                onTouchEnd={(e) => {
                                    e.stopPropagation();
                                    setShowSolutions(!showSolutions);
                                }}
                            >
                                {showSolutions ? "Hide solutions" : "Show solutions"}
                            </button>
                            {showSolutions && localSolutions.map((solution, index) => (
                                <p key={index} className=''>{solution}</p>
                            ))}
                        </>}
                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowSolutions(false);
                                updateAlg();
                            }}
                            whileTap={{ scale: 0.97 }}
                            onTouchStart={(e) => e.stopPropagation()}
                            className="mt-4 px-4 py-2 bg-accent1 text-black rounded shadow"
                        >
                            New Scramble
                        </motion.button>
                    </motion.div>}
                </AnimatePresence>
            </div>
            
            <div className={`text-4xl font-mono ${timerDown ? 'text-green-500' : 'text-black'} select-none flex flex-col items-center`}>
                <div className='mb-10'>
                    {(settings.displayMilliseconds && !isInspecting) ? timer.toFixed(2) : Math.floor(timer)}s
                </div>
                <AnimatePresence>
                    {isInspecting && (
                        <motion.button
                            onTouchEnd={cancelInspection}
                            className="mt-20 px-4 py-2 text-lg text-black bg-accent1 rounded shadow"
                            variants={buttonVariants}
                            whileTap={{ scale: 0.95 }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            Cancel Inspection
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Solve;