import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSettings } from '../SettingsContext';

const AlgsetMenu = ({ algsetMenuOpen, onClose }) => {
    const { settings, setAlgset, toggleSubset, toggleSetting, resetSubsets } = useSettings();
    const [subsetMenuOpen, setSubsetMenuOpen] = useState(false);

    const handleAlgsetChange = (algsetKey) => {
        setAlgset(algsetKey);
        onClose();
    };

    const menuVariants = {
        hiddenRight: {
        x: 50,
        opacity: 0,
        },
        visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
        },
    };

    return (
        <AnimatePresence>
            {algsetMenuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-25 z-40 menu' onTouchEnd={onClose}>
                    <motion.div
                        className="absolute top-[50px] right-4 px-4 py-2 bg-white rounded-lg shadow-lg"
                        initial="hiddenRight"
                        animate="visible"
                        exit="hiddenRight"
                        variants={menuVariants}
                    >
                        <div className='flex flex-col'>
                            {Object.keys(settings.algsetData).map((algset) => (
                                <button
                                    key={algset}
                                    className="p-2 text-lg font-semibold border-b border-gray-200 last:border-b-0 text-[#D6700A]"
                                    onTouchEnd={() => handleAlgsetChange(algset)}
                                >
                                    {algset}
                                </button>
                            ))}
                            {settings.algset != "3x3x3" && (
                                <button
                                    className='text-black'
                                    onTouchEnd={(e) => {
                                        e.stopPropagation();
                                        setSubsetMenuOpen(!subsetMenuOpen);
                                    }}
                                >
                                    Choose Subset
                                </button>
                            )}
                        </div>
                    </motion.div>
                    {subsetMenuOpen && (
                        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end' onTouchEnd={() => setSubsetMenuOpen(false)}>
                            <motion.div
                                className="w-full bg-accent3 text-black rounded-t-lg px-4 py-7"
                                initial={{ y: "100%" }}
                                animate={{ y: "0" }}
                                exit={{ y: "100%" }}
                                transition={{ duration: 0.2 }}
                                onTouchEnd={(e) => e.stopPropagation()}
                            >
                                <div className="grid grid-cols-3 space-y-2">
                                    {Object.keys(settings.algsetData[settings.algset]).map(subset => (
                                        <label key={subset} className="flex items-center justify-between mx-5 text-xl">
                                            <span>{subset}</span>
                                            <input type="checkbox" checked={settings.subsets[settings.algset].includes(subset)} onChange={() => toggleSubset(subset)} />
                                        </label>
                                    ))}
                                </div>
                                <label className="my-6 flex justify-center">
                                    <span className='mr-4'>In order</span>
                                    <input type="checkbox" checked={settings.algsInOrder} onChange={() => toggleSetting('algsInOrder')} />
                                </label>
                                <button className='w-full text-center' onTouchEnd={() => resetSubsets()}>RESET</button>
                            </motion.div>
                        </div>
                    )}
                </div>
            )}
        </AnimatePresence>
    );
};

export default AlgsetMenu;
