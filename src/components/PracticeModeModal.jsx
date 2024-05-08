import { motion } from 'framer-motion';

const PracticeModeModal = ({ practiceModeActive, onClose, onStart }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full">
                <button className="text-xl text-black" onClick={onClose}>✕</button>
                <h2 className="text-xl font-bold mb-2 text-black">Practice Mode</h2>
                <p className='text-black'>This mode helps you practice by giving more scrambles on cases where you're slower, improving your overall solving skills.</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded" onClick={onStart}>{practiceModeActive ? "Stop" : "Start"}</button>
            </div>
        </div>
    );
};

export default PracticeModeModal;
