import React, { useState, useEffect } from 'react';

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
                    <div key={index} className={`w-full p-4 border-b border-gray-500 ${bestIndex === index && "bg-green-400"} ${worstIndex === index && "bg-red-400"}`} onTouchEnd={() => handleShowScramble(index)}>
                        <div className="flex items-center"> {/* Flex container */}
                            <div className="mr-2 text-gray-700 text-lg">
                                # {index + 1}
                            </div>
                            -
                            <div className="ml-2 text-black text-xl">
                                {solve.time} s
                            </div>
                        </div>
                        {showScramble === index && (
                            <div className='text-black texl-lg mt-2'>
                                {solve.scramble}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
