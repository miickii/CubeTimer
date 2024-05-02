// SettingsModal.js
import { motion } from 'framer-motion';
import { useSettings } from '../SettingsContext';

const SettingsModal = ({ onClose }) => {
    const {
        settings,
        toggleSetting,
        toggleAverage
    } = useSettings();

    // Function to handle toggle input changes
    const handleToggleChange = (setting) => {
        if (['useInspection', 'displayMilliseconds', 'soundEnabled'].includes(setting)) {
            toggleSetting(setting);
        } else {
            toggleAverage(setting);
        }
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end' onTouchEnd={onClose}>
            <motion.div
                className="w-full h-[90%] bg-accent3 text-black rounded-t-lg p-4"
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.2 }}
                onTouchEnd={(e) => e.stopPropagation()}
            >
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Settings</h2>
                    <label className="flex items-center justify-between">
                        <span>Use Inspection Time</span>
                        <input type="checkbox" checked={settings.useInspection} onChange={() => toggleSetting('useInspection')} />
                    </label>
                    <label className="flex items-center justify-between">
                        <span>Display Time in Milliseconds</span>
                        <input type="checkbox" checked={settings.displayMilliseconds} onChange={() => toggleSetting('displayMilliseconds')} />
                    </label>
                    <label className="flex items-center justify-between">
                        <span>Enable Sound</span>
                        <input type="checkbox" checked={settings.soundEnabled} onChange={() => toggleSetting('soundEnabled')} />
                    </label>
                    <label className="flex items-center justify-between">
                        <span>Average of 25</span>
                        <input type="checkbox" checked={settings.averages.avg25} onChange={() => toggleAverage('avg25')} />
                    </label>
                    <label className="flex items-center justify-between">
                        <span>Average of 50</span>
                        <input type="checkbox" checked={settings.averages.avg50} onChange={() => toggleAverage('avg50')} />
                    </label>
                    <label className="flex items-center justify-between">
                        <span>Average of 100</span>
                        <input type="checkbox" checked={settings.averages.avg100} onChange={() => toggleAverage('avg100')} />
                    </label>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150" onClick={onClose}>Close</button>
            </motion.div>
        </div>
    );
};

export default SettingsModal;
