import React, { useState } from 'react';
import { useSettings } from '../SettingsContext';
import { usePracticeMode } from '../PracticeModeContext';
import { useTimerScrambleContext } from '../TimerScrambleContext';
import ScoreGraph from './ScoreGraph';

const Stats = ({ solves }) => {
    const { settings } = useSettings();
    const { state: practiceState } = usePracticeMode();
    
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
        <div className="flex flex-col items-center w-full p-4 h-full">
            <div className="text-xl font-semibold mb-8">
                <p>Total Solves: {solves.length}</p>
                <div className="grid grid-cols-2 gap-4 w-full my-4">
                    <p className="text-lg">Best: {bestTime}</p>
                    <p className="text-lg">Worst: {worstTime}</p>
                </div>
                <p>Average of 5: {average5}</p>
                <p>Average of 12: {average12}</p>
                {settings.averages.avg25 && <p>Average of 25: {average25}</p>}
                {settings.averages.avg50 && <p>Average of 50: {average50}</p>}
                {settings.averages.avg100 && <p>Average of 100: {average100}</p>}
            </div>
        
            
            {practiceState.active && (
                <div className="w-full bg-gray-100 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl text-center font-bold text-gray-800 mt-4">Practice Mode Stats</h3>
                    <p>Cases encountered: {practiceState.numCasesSeen} / {practiceState.numCases}</p>
                    {/* Implement ScoreGraph component here */}
                    {practiceState.prevCase && (
                        <div className="mt-2 p-4">
                            <h3 className="text-lg font-semibold text-gray-800">Recent Case Performance</h3>
                            <p className="text-gray-700 mb-4">Subset {practiceState.prevCase.subset} - Case {practiceState.prevCase.caseIndex + 1}</p>
                            <p className="text-gray-700 mb-2">Times: {practiceState.prevCase.times.slice(-3).join(', ')}</p>
                            <ScoreGraph scores={practiceState.prevCase.scores} />
                            <p className='mt-2'>Updated score: {-practiceState.prevCase.score.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Stats;
