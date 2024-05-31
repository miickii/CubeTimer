import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { useTimerScrambleContext } from '../TimerScrambleContext';
import AlgsetMenu from './AlgsetMenu';
import Menu from './Menu';
import { MdMenu, MdClose } from 'react-icons/md';
import SortIcon from './SortIcon';

const Header = ({ activeTab }) => {
    const { selectedAlgset, timerRunning, solvesSortOrder, toggleSortOrder } = useTimerScrambleContext(); 
    const [menuOpen, setMenuOpen] = useState(false);
    const [algsetMenuOpen, setAlgsetMenuOpen] = useState(false);
    const [title, setTitle] = useState('CubeTimer');

    const iconVariants = {
        rotated: { rotate: 180 },
        normal: { rotate: 0 }
    };

    useEffect(() => {
        switch (activeTab) {
          case 'solve':
            setTitle('CubeTimer');
            break; // Prevents fall-through
          case 'history':
            setTitle('Solve History');
            break; // Prevents fall-through
          case 'stats':
            setTitle('Statistics');
            break; // Ensures execution stops here
          case 'test':
            setTitle('TEST');
            break;
        }
    }, [activeTab]); 
   
    return (
        <div className="relative bg-[#f69435] text-white h-16 flex-shrink-0 flex justify-center items-center">
            {activeTab === 'solve' && <>
            <button className="absolute top-[14px] left-4 bg-white text-black p-2 rounded-full shadow flex items-center justify-center" onTouchEnd={() => {
                if (!timerRunning) {
                    setMenuOpen(!menuOpen);
                }
            }}>
                <motion.div
                variants={iconVariants}
                animate={menuOpen ? "rotated" : "normal"}
                >
                {menuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
                </motion.div>
            </button>

            {/* Main Menu */}
            <Menu menuOpen={menuOpen} onClose={() => setMenuOpen(!menuOpen)} />

            {/* Algset Menu */}
            <button className="absolute top-[18px] right-4 text-black text-lg" onTouchEnd={() => {
                if (!timerRunning) {
                setAlgsetMenuOpen(!algsetMenuOpen);
                }
            }}>
                {selectedAlgset}
            </button>
            <AlgsetMenu algsetMenuOpen={algsetMenuOpen} onClose={() => setAlgsetMenuOpen(!algsetMenuOpen)} />
            </>}
            {activeTab === 'history' && <>
                <button className="absolute top-[18px] left-4 flex flex-row items-center text-black" onTouchEnd={toggleSortOrder}>
                    <p className='mr-2 text-xl'>Sort</p>
                    <SortIcon size={14} angle={solvesSortOrder === "asc" ? 180 : 0}/>
                </button>
            </>}
            <h1 className="text-2xl text-black font-bold">{title}</h1>
        </div>
    );
  };

export default Header;