import React from 'react';
import { useSettings } from '../SettingsContext';
import { usePracticeMode } from '../PracticeModeContext';
import { useTimerScrambleContext } from '../TimerScrambleContext';

const Stats = () => {
    const { settings } = useSettings();
    const { state: practiceState } = usePracticeMode();
    const { solves } = useTimerScrambleContext(); 
    
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
            {practiceState.active && (
                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-semibold">Practice Mode Active</h3>
                    <p>Total session solves: {practiceState.numSolves}</p>
                    {practiceState.displayStats && (
                        <div>
                            <p>Session weighted average: {practiceState.overallAverage.toFixed(2)}</p>
                            <p>Cases encountered: {practiceState.numCasesSeen} / {practiceState.numCases}</p>
                            <p>Average score: {(practiceState.totalScore / practiceState.numCases).toFixed(2)}</p>
                            <div className='p-2'>
                                <p className='w-full text-center'>Most recent case:</p>
                                {practiceState.prevCase && <>
                                    <p>Subset: {practiceState.prevCase.subset}</p>
                                    <p>Case index: {practiceState.prevCase.caseIndex}</p>
                                    <p>Times: {practiceState.prevCase.times.slice(-3).join(', ')}</p>
                                    <p>Weighted average: {practiceState.prevCase.average.toFixed(2)}</p>
                                    <p>Previous score: {practiceState.prevCase.prevScore.toFixed(2)}</p>
                                    <p>Updated score: {practiceState.prevCase.score.toFixed(2)}</p>
                                </>}
                            </div>
                        </div>
                    )}
                    {/* <p>Current Focus Score: {practiceState.currentFocusScore.toFixed(2)}</p>  Assuming you track a focus score */}
                </div>
            )}
            <div className="text-xl font-semibold mt-4 mb-8">
                <p>Total Solves: {solves.length}</p>
                <p>Best Time: {bestTime}</p>
                <p>Worst Time: {worstTime}</p>
                <p>Average of 5: {average5}</p>
                <p>Average of 12: {average12}</p>
                {settings.averages.avg25 && <p>Average of 25: {average25}</p>}
                {settings.averages.avg50 && <p>Average of 50: {average50}</p>}
                {settings.averages.avg100 && <p>Average of 100: {average100}</p>}
            </div>
        </div>
    );
};

export default Stats;
