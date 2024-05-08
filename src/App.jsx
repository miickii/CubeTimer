import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Solve from './components/Solve';
import History from './components/History';
import Stats from './components/Stats';
import { FaHistory, FaPlayCircle, FaChartBar } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';
import { useSettings } from './SettingsContext';
import AlgsetMenu from './components/AlgsetMenu';
import Menu from './components/Menu';

const App = () => {
  const { settings, setAlgset } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const [algsetMenuOpen, setAlgsetMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('solve');
  const [lastTab, setLastTab] = useState(null);
  const [title, setTitle] = useState('CubeTimer');
  const [times, setTimes] = useState([]);
  const [timer, setTimer] = useState(0); // Timer state is now here
  const [timerRunning, setTimerRunning] = useState(false);

  const resetTimer = () => setTimer(0); // Reset timer function

  const deleteLastTime = () => {
    if (times.length > 0) {
      setTimes(times.slice(0, -1));
    }
    resetTimer();
    setMenuOpen(false);
  };

  const resetTimes = () => {
    setTimes([]);
    resetTimer(); 
    setMenuOpen(false);
  };

  const handleTimerStop = (time, scramble) => {
    setTimerRunning(false);
    if (time !== null) {
      setTimes(prev => [...prev, {time: time, scramble: scramble}]);
    }
  }

  const handleTimerStart = () => {
    setTimerRunning(true);
  }

  const changeTab = (tab) => {
    if (!timerRunning) {
      setLastTab(activeTab);
      setActiveTab(tab); // Change the tab immediately
    }
  }
  
  useEffect(() => {
    switch (activeTab) {
      case 'solve':
        setTitle('CubeTimer');
        break; // Prevents fall-through
      case 'history':
        setTitle('Solve Time History');
        break; // Prevents fall-through
      case 'stats':
        setTitle('Statistics');
        break; // Ensures execution stops here
    }
  }, [activeTab]); 

  const getDirection = (tab) => {
    if (lastTab === null) return 0;
    const order = ['history', 'solve', 'stats'];
    const currentIndex = order.indexOf(activeTab);
    const lastIndex = order.indexOf(lastTab);

    return currentIndex > lastIndex ? 300 : -300;
  };

  const iconVariants = {
    rotated: { rotate: 180 },
    normal: { rotate: 0 }
  };

  const tabs = ['history', 'solve', 'stats'];

  const handleSwipe = useSwipeable({
    onSwipedLeft: (eventData) => {
      if (eventData.deltaX < -60) { // Check that the swipe length exceeds 60 pixels
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
          const nextIndex = currentIndex + 1;
          changeTab(tabs[nextIndex]);
        }
      }
    },
    onSwipedRight: (eventData) => {
      if (eventData.deltaX > 60) { // Check that the swipe length exceeds 60 pixels
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
          const nextIndex = currentIndex - 1;
          changeTab(tabs[nextIndex]);
        }
      }
    },
    trackMouse: true // Optional: allows swipe tracking with mouse movements on desktop
  });

  return (
    <div className="relative bg-[#f69435] flex flex-col h-dvh" {...handleSwipe}>
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
            <Menu menuOpen={menuOpen} onClose={() => setMenuOpen(!menuOpen)} deleteLastTime={deleteLastTime} resetTimes={resetTimes} />

            {/* Algset Menu */}
            <button className="absolute top-[18px] right-4 text-black text-lg" onTouchEnd={() => {
              if (!timerRunning) {
                setAlgsetMenuOpen(!algsetMenuOpen);
              }
            }}>
              {settings.algset}
            </button>
            <AlgsetMenu algsetMenuOpen={algsetMenuOpen} onClose={() => setAlgsetMenuOpen(!algsetMenuOpen)} />
          </>}
          <h1 className="text-2xl text-black font-bold">{title}</h1>
      </div>
      <div className="flex-grow w-screen overflow-auto bg-lightPrimary">
        <AnimatePresence>
          {activeTab === 'history' && (
            <motion.div
              key="history"
              initial={{ x: getDirection('history'), opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='h-full'
            >
              <History solves={times} />
            </motion.div>
          )}
          {activeTab === 'solve' && (
            <motion.div
              key="solve"
              initial={{ x: getDirection('solve'), opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='h-full'
            >
              <Solve onTimerStop={handleTimerStop} onTimerStart={handleTimerStart} timer={timer} setTimer={setTimer} />
            </motion.div>
          )}
          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ x: getDirection('stats'), opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='w-full h-full'
            >
              <Stats solves={times} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-around items-center bg-[#f69435] top-shadow py-4 pb-4 text-white">
        <button onTouchEnd={() => changeTab('history')} className={`flex flex-col items-center justify-center text-sm ${activeTab === 'history' ? 'text-black' : 'text-gray-100'}`}>
          <FaHistory size={24} className="mb-1" />
          History
        </button>
        <button onTouchEnd={() => changeTab('solve')} className={`flex flex-col items-center justify-center text-sm ${activeTab === 'solve' ? 'text-black' : 'text-gray-100'}`}>
          <FaPlayCircle size={24} className="mb-1" />
          Solve
        </button>
        <button onTouchEnd={() => changeTab('stats')} className={`flex flex-col items-center justify-center text-sm ${activeTab === 'stats' ? 'text-black' : 'text-gray-100'}`}>
          <FaChartBar size={24} className="mb-1" />
          Stats
        </button>
      </div>
    </div>
  );
};

export default App;

