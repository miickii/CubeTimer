import { motion } from 'framer-motion';
import { useState } from 'react';
import InfoPopup from './InfoPopup';

const PracticeModeModal = ({ practiceModeActive, onClose, onStart }) => {
    const [initialScore, setInitialScore] = useState("8");
    const [epsilonDecay, setEpsilonDecay] = useState("0.02");
    const [recencyFactor, setRecencyFactor] = useState("2");
    const [learningRate, setLearningRate] = useState("0.5");
    const [currInfoPopup, setCurrInfoPopup] = useState(null);

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
                                Initial Score:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{initialScore}</span>
                                <input type="range" min="1" max="10" value={initialScore} onChange={e => setInitialScore(e.target.value)} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(1)}>?</button>
                                {currInfoPopup === 1 && <InfoPopup text="Initial score determines the starting difficulty for each new case." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Epsilon Decay:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{epsilonDecay}</span>
                                <input type="range" min="0" max="0.2" step="0.01" value={epsilonDecay} onChange={e => setEpsilonDecay(e.target.value)} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(2)}>?</button>
                                {currInfoPopup === 2 && <InfoPopup text="Epsilon decay controls how quickly the case selection focuses on weaker areas." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Recency Factor:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{recencyFactor}</span>
                                <input type="range" min="1" max="5" value={recencyFactor} onChange={e => setRecencyFactor(e.target.value)} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(3)}>?</button>
                                {currInfoPopup === 3 && <InfoPopup text="Adjusts how much more recent solves influence the scoring of each case." />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="block w-1/3">
                                Learning rate:
                            </label>
                            <div className="flex items-center w-2/3 justify-end relative">
                                <span className="text-gray-700 text-sm font-medium mr-2">{learningRate}</span>
                                <input type="range" min="0" max="1" step="0.1" value={learningRate} onChange={e => setLearningRate(e.target.value)} className="mx-2" />
                                <button className="relative" onClick={() => handleShowPopup(4)}>?</button>
                                {currInfoPopup === 4 && <InfoPopup text="Controls how rapidly scores adjust to recent performance changes. A higher rate causes scores to respond more quickly to recent solves, while a lower rate results in slower adjustments, giving more weight to historical performance." />}
                            </div>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded" onClick={() => onStart( {initialScore: parseFloat(initialScore), epsilonDecay: parseFloat(epsilonDecay), recencyFactor: parseFloat(recencyFactor), learningRate: parseFloat(learningRate)} )}>{practiceModeActive ? "Stop" : "Start"}</button>
                </div>
            </div>
        </div>
    );
}

export default PracticeModeModal;
