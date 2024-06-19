import { motion } from 'framer-motion';
import { useState } from 'react';
import InfoPopup from './InfoPopup';

const mapToDisplay = (value, min, max) => ((value - min) / (max - min)) * 6;
const mapToOriginal = (displayValue, min, max) => ((displayValue / 6) * (max - min)) + min;

const PracticeModeModal = ({ practiceModeActive, onClose, onStart }) => {
    const [learningRate, setLearningRate] = useState(0.5);
    const [displayStats, setDisplayStats] = useState(true);
    const [scoreIndication, setScoreIndication] = useState(true);
    const [currInfoPopup, setCurrInfoPopup] = useState(null);

    const [displayLearningRate, setDisplayLearningRate] = useState(mapToDisplay(learningRate, 0, 1));

    const handleLearningRateChange = (value) => {
        const originalValue = mapToOriginal(value, 0, 1);
        // console.log(originalValue)
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center menu z-40" onTouchEnd={onClose}>
            <div className="bg-white text-black rounded-lg shadow-lg w-4/5 relative" onTouchEnd={(e) => e.stopPropagation()}>
                <div className='w-full flex'>
                    <h2 className="text-xl font-bold p-2 w-3/4 text-center">Practice Mode Settings</h2>
                    <button className="text-xl w-1/4 text-end pt-2 pr-4" onClick={onClose}>✕</button>
                </div>
                <div className='p-4'>
                    {!practiceModeActive && <>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="block w-1/3">
                                    Learning Rate:
                                </label>
                                <div className="flex items-center w-2/3 justify-end relative">
                                    <span className="text-gray-700 text-sm font-medium mr-2">{displayLearningRate.toFixed(2)}</span>
                                    <input type="range" min="0" max="6" value={displayLearningRate} onChange={e => handleLearningRateChange(parseFloat(e.target.value))} className="mx-2" />
                                    <button className="relative" onClick={() => handleShowPopup(1)}>?</button>
                                    {currInfoPopup === 1 && <InfoPopup text="Controls how much scores for each case should adjust to performance, low value makes scores change at a slow rate, while high values makes scores very volatile to change in performance" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="block w-1/3">
                                    Display score updates 
                                </label>
                                <div className="flex items-center w-2/3 justify-end relative">
                                    <input type="checkbox" checked={scoreIndication} onChange={() => setScoreIndication(!scoreIndication)} />
                                    <button className="relative" onClick={() => handleShowPopup(3)}>?</button>
                                    {currInfoPopup === 3 && <InfoPopup text="Show arrows indicating positive or negative score change for cases" />}
                                </div>
                            </div>
                        </div>
                    </>}
                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded" onClick={() => onStart( {learningRate: parseFloat(learningRate), displayStats: displayStats, scoreIndication: scoreIndication} )}>{practiceModeActive ? "Stop" : "Start"}</button>
                </div>
            </div>
        </div>
    );
}

export default PracticeModeModal;
