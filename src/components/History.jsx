import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

const History = ({ solves }) => {
    const [showScramble, setShowScramble] = useState(null);
    const [bestIndex, setBestIndex] = useState(null);
    const [worstIndex, setWorstIndex] = useState(null);

    useEffect(() => {
        const times = solves.map(solve => solve.time);
        const min = Math.min(...times);
        const max = Math.max(...times);

        setBestIndex(times.indexOf(min));
        setWorstIndex(times.indexOf(max));
    }, [solves]); 


    const handleShowScramble = (index) => {
        if (showScramble === index) {
            setShowScramble(null);
        } else {
            setShowScramble(index);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col items-start">
                {solves.map((solve, index) => (
                    <div key={index} className='w-full' onTouchEnd={() => handleShowScramble(index)}>
                        <div className={`flex items-center w-full p-4 border-b border-gray-500 ${bestIndex === index && "bg-green-400"} ${worstIndex === index && "bg-red-400"}`}>
                            <div className="mr-2 text-gray-700 text-lg">
                                # {index + 1}
                            </div>
                            -
                            <div className="ml-2 text-black text-xl">
                                {solve.time} s
                            </div> 
                        </div>
                        <AnimatePresence>
                            <motion.div
                                variants={containerVariants}
                                initial="closed"
                                animate={showScramble === index ? "open" : "closed"}
                                className='bg-gray-200 flex items-center'
                            >
                                <motion.div 
                                    variants={scrambleVariants}
                                    initial="closed"
                                    animate={showScramble === index ? "open" : "closed"}
                                    exit="exit"
                                    className='text-black texl-lg m-4'
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
