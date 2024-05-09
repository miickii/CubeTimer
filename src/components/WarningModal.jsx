import React from 'react';

const WarningModal = ({ changingToText, onClose, onEndPractice }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40" onTouchEnd={(e) => e.stopPropagation()}>
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto text-center text-black">
                <p className="text-lg font-semibold mb-4">You can't change algset or subsets while in practice mode.</p>
                <p className="text mb-4">{changingToText}</p>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                    onClick={onEndPractice}
                >
                    End Practice Mode
                </button>
                <button
                    className="ml-4 bg-gray-300 px-4 py-2 rounded text-black hover:bg-gray-400 transition duration-300"
                    onClick={onClose}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default WarningModal;