import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTimerScrambleContext } from '../TimerScrambleContext';

const containerVariants = {
    closed: {
      height: "0rem",
      transition: {
        duration: "0.2"
      }
    },
    open: {
      height: "4rem",
      transition: {
        when: "beforeChildren", // <<-- does not work
        duration: "0.2" /// <<-- works
        // delayChildren: "1" // <<-- does not work
      }
    }
};
  
const scrambleVariants = {
    closed: {
        x: -200,
        opacity: 0,
        transition: {
            duration: 0
        }
    },
    open: {
      opacity: 1,
      x: 0,
      // height: 64, // Assuming you meant 4rem, which is typically 64 pixels
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0
    }
};

const History = () => {
    const { solves } = useTimerScrambleContext(); 
    const [showScramble, setShowScramble] = useState(null);
    const [bestIndex, setBestIndex] = useState(null);
    const [worstIndex, setWorstIndex] = useState(null);
    const [touchStartPos, setTouchStartPos] = useState({ x: null, y: null });

    useEffect(() => {
        const times = solves.map(solve => solve.time);
        const min = Math.min(...times);
        const max = Math.max(...times);

        setBestIndex(times.indexOf(min));
        setWorstIndex(times.indexOf(max));
    }, [solves]); 

    const handleTouchStart = (e) => {
        const touchLocation = e.touches[0];
        setTouchStartPos({ x: touchLocation.clientX, y: touchLocation.clientY });
    };

    const handleShowScramble = (e, index) => {
        const touchEndLocation = e.changedTouches[0];
        const moveX = Math.abs(touchEndLocation.clientX - touchStartPos.x);
        const moveY = Math.abs(touchEndLocation.clientY - touchStartPos.y);

        // Consider it a "tap" if the movement is less than 10 pixels in any direction
        if (moveX < 10 && moveY < 10) {
            if (showScramble === index) {
                setShowScramble(null);
            } else {
                setShowScramble(index);
            }
        }
    };

    const handleScrambleTouchEnd = (e) => {
        e.stopPropagation();  // Prevents the event from bubbling up to the onTouchEnd on the parent
    };

    return (
        <div className="flex flex-col bg-gray-50">
            <div className="w-full flex flex-col items-start">
                {solves.map((solve, index) => (
                    <div key={index} className='w-full' onTouchStart={handleTouchStart} onTouchEnd={(e) => handleShowScramble(e, index)}>
                        <div className={`flex items-center w-full p-4 ${bestIndex === index ? "bg-accent1" : worstIndex === index ? "bg-[#F71735]" : "bg-lightPrimary"}`}>
                            <div className="mr-2 text-gray-800 text-lg font-medium">
                                # {index + 1}
                            </div>
                            -
                            <div className="ml-2 text-black text-xl font-semibold">
                                {solve.time.toFixed(2)} s
                            </div> 
                        </div>
                        <AnimatePresence>
                            <motion.div
                                variants={containerVariants}
                                initial="closed"
                                animate={showScramble === index ? "open" : "closed"}
                                className='bg-white flex items-center'
                            >
                                <motion.div 
                                    variants={scrambleVariants}
                                    initial="closed"
                                    animate={showScramble === index ? "open" : "closed"}
                                    exit="exit"
                                    className='text-black texl-lg m-4 select-text'
                                >
                                    {solve.scramble}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
