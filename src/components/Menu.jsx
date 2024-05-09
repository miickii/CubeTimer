import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import SettingsModal from './SettingsModal';
import { FiSettings } from 'react-icons/fi';
import PracticeModeModal from './PracticeModeModal';
import { usePracticeMode } from '../PracticeModeContext';

const Menu = ({ menuOpen, onClose, deleteLastTime, resetTimes, settings }) => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [practiceModeOpen, setPracticeModeOpen] = useState(false);
    const { state, startPracticeMode, stopPracticeMode } = usePracticeMode();

    const handleStartPracticeMode = (practiceSettings) => {
        if (state.active) {
            stopPracticeMode();
        } else {
            startPracticeMode(practiceSettings);
        }
        setPracticeModeOpen(false);
    };

    const menuVariants = {
        hiddenLeft: {
          scale: 0,
          y: -70,
          x: -70,
          opacity: 0,
          transition: {
            duration: 0.2
          }
        },
        hiddenRight: {
          scale: 0,
          y: -90,
          x: 50,
          opacity: 0,
          transition: {
            duration: 0.2
          }
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
          }
        }
    };

    return (
        <AnimatePresence>
              {menuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-25 z-40 menu' onTouchEnd={onClose}>
                  <motion.div
                    className="absolute top-[54px] left-4 bg-white rounded-lg shadow-md p-4"
                    initial="hiddenLeft"
                    animate="visible"
                    exit="hiddenLeft"
                    variants={menuVariants}
                  >
                    <div className='flex flex-col '>
                        <button className="p-2 text-lg font-semibold border-b border-gray-200 text-[#D6700A]" onTouchEnd={deleteLastTime}>
                            Delete Last Time
                        </button>
                        <button className="p-2 text-lg font-semibold border-b border-gray-200 text-[#D6700A]" onTouchEnd={resetTimes}>
                            Reset Times
                        </button>
                        {!(settings.algset === "3x3x3") && (
                          <button className="w-full p-2 text-lg font-semibold border-b text-[#D6700A]" onTouchEnd={() => setPracticeModeOpen(true)}>
                              Practice Mode
                          </button>
                        )}
                        <button className="flex items-center justify-center py-2 text-lg font-semibold text-gray-800" onTouchEnd={() => setSettingsOpen(true)}>
                            <FiSettings className="mr-1" size={20} /> Settings
                        </button>
                    </div>
                  </motion.div>
                </div>
            )}

            {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)}/>}
            {practiceModeOpen && <PracticeModeModal practiceModeActive={state.active} onClose={() => setPracticeModeOpen(false)} onStart={handleStartPracticeMode} />}
        </AnimatePresence>
    );
};

export default Menu;
