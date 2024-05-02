import React from 'react';

const Stats = ({ solves }) => {
    function removeMinMax(times) {
        let newTimes = [...times]
        const min = Math.min(...newTimes);
        const minIndex = newTimes.indexOf(min);
        newTimes.splice(minIndex, 1);

        const max = Math.max(...newTimes);
        const maxIndex = newTimes.indexOf(max);
        newTimes.splice(maxIndex, 1);
        return newTimes;
    }
    const calculateAverage = (times, number) => {
        if (times.length < number) return "N/A"; // Prevent division by zero

        const newTimes = removeMinMax(times.slice(-number));
        const sum = newTimes.reduce((acc, curr) => acc + curr, 0);
        return (sum / newTimes.length).toFixed(3);
    };

    const times = solves.map(solve => solve.time);

    const bestTime = times.length > 0 ? Math.min(...times).toFixed(3) : "N/A";
    const worstTime = times.length > 0 ? Math.max(...times).toFixed(3) : "N/A";
    const average5 = calculateAverage(times, 5);
    const average12 = calculateAverage(times, 12);
    const average25 = calculateAverage(times, 25);
    const average50 = calculateAverage(times, 50);
    const average100 = calculateAverage(times, 100);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-semibold mt-4 mb-8">
                <p className="mb-2">Solves: {times.length}</p>
                <p className="mb-2">Best Time: {bestTime}</p>
                <p className="mb-2">Worst Time: {worstTime}</p>
                <p className="mb-2">Average of Five: {average5}</p>
                <p>Average of Twelve: {average12}</p>
            </div>
        </div>
    );
};

export default Stats;
