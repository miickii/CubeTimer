import { motion } from 'framer-motion';
import { useState } from 'react';
import InfoPopup from './InfoPopup';

const mapToDisplay = (value, min, max) => ((value - min) / (max - min)) * 6;
const mapToOriginal = (displayValue, min, max) => ((displayValue / 6) * (max - min)) + min;

const PracticeModeModal = ({ practiceModeActive, onClose, onStart }) => {
    const [initialScore, setInitialScore] = useState(7.669);
    const [epsilonDecay, setEpsilonDecay] = useState(0.01);
    const [recencyFactor, setRecencyFactor] = useState(2.33);
    const [learningRate, setLearningRate] = useState(0.5);
    const [displayStats, setDisplayStats] = useState(false);
    const [currInfoPopup, setCurrInfoPopup] = useState(null);0.004

    // Display values
    const [displayInitialScore, setDisplayInitialScore] = useState(mapToDisplay(initialScore, 3, 10));
    const [displayEpsilonDecay, setDisplayEpsilonDecay] = useState(mapToDisplay(epsilonDecay, 0.002, 0.05));
    const [displayRecencyFactor, setDisplayRecencyFactor] = useState(mapToDisplay(recencyFactor, 1, 5));
    const [displayLearningRate, setDisplayLearningRate] = useState(mapToDisplay(learningRate, 0, 1));

    const handleInitialScoreChange = (value) => {
        const originalValue = mapToOriginal(value, 3, 10);
        console.log(originalValue)
        setInitialScore(originalValue);
        setDisplayInitialScore(value);
    };

    const handleEpsilonDecayChange = (value) => {
        const originalValue = mapToOriginal(value, 0.002, 0.05);
        console.log(originalValue)
        setEpsilonDecay(originalValue);
        setDisplayEpsilonDecay(value);
    };

    const handleRecencyFactorChange = (value) => {
        const originalValue = mapToOriginal(value, 1, 5);
        console.log(originalValue)
        setRecencyFactor(originalValue);
        setDisplayRecencyFactor(value);
    };

    const handleLearningRateChange = (value) => {
        const originalValue = mapToOriginal(value, 0, 1);
        console.log(originalValue)
        setLearningRate(originalValue);
        setDisplayLearningRate(value);
    };

    const handleShowPopup = (id) => {
        if (currInfoPopup === id) {
            setCurrInfoPopup(null);
        } else {
            setCurrInfoPopup(id);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center menu" onTouchEnd={onClose}>
            <div className="bg-white text-black rounded-lg shadow-lg w-4/5 relative" onTouchEnd={(e) => e.stopPropagation()}>
                <button className="text-xl w-full text-end pt-2 pr-4" onClick={onClose}>✕</button>
                <div className='p-4'>
                    <h2 className="text-xl font-bold my-2">Practice Mode Settings</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Challenge Level:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{displayInitialScore.toFixed(2)}</span>
                                <input type="range" min="0" max="6" value={displayInitialScore} onChange={e => handleInitialScoreChange(parseFloat(e.target.value))} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(1)}>?</button>
                                {currInfoPopup === 1 && <InfoPopup text="Initial score determines the starting difficulty for each new case." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Focus Speed:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{epsilonDecay.toFixed(2)}</span>
                                <input type="range" min="0" max="6" value={displayEpsilonDecay} onChange={e => handleEpsilonDecayChange(parseFloat(e.target.value))} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(2)}>?</button>
                                {currInfoPopup === 2 && <InfoPopup text="Epsilon decay controls how quickly the case selection focuses on weaker areas." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Adaptiveness:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{displayRecencyFactor.toFixed(2)}</span>
                                <input type="range" min="0" max="6" value={displayRecencyFactor} onChange={e => handleRecencyFactorChange(parseFloat(e.target.value))} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(3)}>?</button>
                                {currInfoPopup === 3 && <InfoPopup text="Adjusts how much more recent solves influence the scoring of each case." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Sensitivity:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{displayLearningRate.toFixed(2)}</span>
                                <input type="range" min="0" max="6" value={displayLearningRate} onChange={e => handleLearningRateChange(parseFloat(e.target.value))} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(4)}>?</button>
                                {currInfoPopup === 4 && <InfoPopup text="Controls how rapidly scores adjust to recent performance changes. A higher rate causes scores to respond more quickly to recent solves, while a lower rate results in slower adjustments, giving more weight to historical performance." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Show session stats
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <input type="checkbox" checked={displayStats} onChange={() => setDisplayStats(!displayStats)} />
                                <button className="relative" onClick={() => handleShowPopup(5)}>?</button>
                                {currInfoPopup === 5 && <InfoPopup text="Shows stats and information about the practice mode session" />}
                            </div>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded" onClick={() => onStart( {initialScore: parseFloat(initialScore), epsilonDecay: parseFloat(epsilonDecay), recencyFactor: parseFloat(recencyFactor), learningRate: parseFloat(learningRate), displayStats: displayStats} )}>{practiceModeActive ? "Stop" : "Start"}</button>
                </div>
            </div>
        </div>
    );
}

export default PracticeModeModal;
