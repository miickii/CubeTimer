import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Solve from './components/Solve';
import History from './components/History';
import Stats from './components/Stats';
import { FaHistory, FaPlayCircle, FaChartBar } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { useTimerScrambleContext } from './TimerScrambleContext';
import { usePracticeMode } from './PracticeModeContext';
import Test from './components/Test';
import Header from './components/Header';
import PopupManager from './components/PopupManager';

const App = () => {
  const { timerRunning, solves: regularSolves } = useTimerScrambleContext(); 
  const { state: practiceState } = usePracticeMode();
  const [activeTab, setActiveTab] = useState('solve');
  const [lastTab, setLastTab] = useState(null);
  const [solves, setSolves] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Effect to update the solves based on practice mode
  useEffect(() => {
    if (practiceState.active) {
      setSolves(practiceState.solves);

    } else {
      setSolves(regularSolves);
    }
  }, [practiceState.active, practiceState.solves, regularSolves]);


  const changeTab = (tab) => {
    if (!timerRunning) {
      setLastTab(activeTab);
      setActiveTab(tab); // Change the tab immediately
    }
  }

  const getDirection = (tab) => {
    if (lastTab === null) return 0;
    const order = ['history', 'solve', 'stats'];
    const currentIndex = order.indexOf(activeTab);
    const lastIndex = order.indexOf(lastTab);

    return currentIndex > lastIndex ? 300 : -300;
  };

  const tabs = ['history', 'solve', 'stats'];

  const handleSwipe = useSwipeable({
    onSwipedLeft: (eventData) => {
      if (eventData.event.target.closest('.menu')) {
        return; // Do nothing if the swipe starts within a menu
      }
      if (eventData.deltaX < -60) { // Check that the swipe length exceeds 60 pixels
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
          const nextIndex = currentIndex + 1;
          changeTab(tabs[nextIndex]);
        }
      }
    },
    onSwipedRight: (eventData) => {
      if (eventData.event.target.closest('.menu')) {
        return; // Do nothing if the swipe starts within a menu
      }
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
    <div className="relative bg-[#f69435] flex flex-col h-full" {...handleSwipe}>
      <Header activeTab={activeTab} /> {/* Controls title and menus */}

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
              <History solves={solves} />
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
              <Solve solves={solves} />
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
              <Stats solves={solves} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-around items-center top-shadow pt-4 tab-select-pb text-white">
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

      {/* Popup messages to explain practice mode and score indicator  */}
      <PopupManager />
    </div>
  );
};

export default App;

