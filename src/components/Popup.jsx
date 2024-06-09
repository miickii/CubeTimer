import React from 'react';

const Popup = ({ title, message, onClose, onDontShowAgain }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white text-black rounded-lg shadow-lg w-4/5 p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className='mb-4'>
                    {message}
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Close</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDontShowAgain}>Don't show again</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;