import React, { useState, useRef, useEffect } from 'react';
import { useStopwatch } from "react-use-precision-timer";
import { AnimatePresence, motion } from 'framer-motion';
import { useSettings } from '../SettingsContext';


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

const Solve = ({ onTimerStop, onTimerStart, timer, setTimer }) => {
    const { settings, updateScramble } = useSettings();
    const [isActive, setIsActive] = useState(false);
    const [timerDown, setTimerDown] = useState(false);
    const [touchStartPos, setTouchStartPos] = useState({ x: null, y: null });
    const [isInspecting, setIsInspecting] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [localSolutions, setLocalSolutions] = useState([]);
    const timerRef = useRef(null);
    const stopwatch = useStopwatch();

    const startTimer = (inspection) => {
        onTimerStart();
        stopwatch.start();
        setIsActive(true);

        timerRef.current = setInterval(() => {
            const milliseconds = stopwatch.getElapsedStartedTime();
            const time = inspection ? 15-Math.round(milliseconds / 1000) : (milliseconds / 1000).toFixed(2);
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

    const handleUpdateScramble = () => {
        setShowSolutions(false);
        updateScramble();
    }

    const stopTimer = () => {
        stopwatch.stop();
        setIsActive(false);
        if (isInspecting) {
            onTimerStop(null, null);
            setIsInspecting(false);
            setTimer(0);
            setTimerDown(false);
        } else {
            onTimerStop(parseFloat(timer), settings.scramble);
            handleUpdateScramble();
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
        return () => clearInterval(timerRef.current);
    }, [settings.subset]); 

    useEffect(() => {
        if (timer < 0) {
            stopTimer();
        }
    }, [timer])

    useEffect(() => {
        if (settings.showPrevSolutions) {
            setLocalSolutions(settings.prevSolutions || []);
        } else {
            setLocalSolutions(settings.currSolutions || []);
        }
    }, [settings.currSolutions]);

    return (
        <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full h-full"
        >
            <div className='min-h-80' onTouchStart={(e) => e.stopPropagation()}>
                <AnimatePresence>
                    {!isActive && <motion.div variants={scrambleVariants} initial="hidden" animate="visible" exit="exit" className='flex flex-col items-center'>
                        <div className="text-xl mt-6 mb-5 px-8 h-12">{settings.scramble}</div>
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
                                handleUpdateScramble();
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
                    {settings.displayMilliseconds ? timer : Math.floor(parseFloat(timer))}s
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