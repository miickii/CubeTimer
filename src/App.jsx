import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Solve from './components/Solve';
import History from './components/History';
import Stats from './components/Stats';
import { FaHistory, FaPlayCircle, FaChartBar } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subsetMenuOpen, setSubsetMenuOpen] = useState(false);
  const [subset, setSubset] = useState("3x3x3");
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
      setActiveTab(tab);
      setMenuOpen(false);
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

  const menuVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const iconVariants = {
    rotated: { rotate: 180 },
    normal: { rotate: 0 }
  };

  const tabs = ['history', 'solve', 'stats'];

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex < 2) {
        const nextIndex = (currentIndex + 1) % tabs.length;
        changeTab(tabs[nextIndex])
      }
    },
    onSwipedRight: () => {
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex > 0) {
        const nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        changeTab(tabs[nextIndex])
      }
    }
  });

  return (
    <div className="relative bg-white flex flex-col h-dvh" {...handleSwipe}>
      <div className="relative bg-[#f69435] text-white h-14 flex-shrink-0 flex justify-center items-center">
          {activeTab === 'solve' && <>
            <button className="absolute top-[10px] left-4 bg-white text-[#f69435] p-2 rounded-full shadow flex items-center justify-center"
              onTouchEnd={() => setMenuOpen(!menuOpen)}>
              <motion.div
                variants={iconVariants}
                animate={menuOpen ? "rotated" : "normal"}
              >
                {menuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
              </motion.div>
            </button>
            <AnimatePresence>
              {menuOpen && (
                <div className='fixed top-0 left-0 h-full w-full' onTouchEnd={() => setMenuOpen(!menuOpen)}>
                  <motion.div
                    className="absolute top-[50px] left-4 px-4 py-2 bg-white rounded shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <div className='flex flex-col'>
                      <button className="p-2 text-lg font-bold border-b border-gray-500 text-[#f69435]" onTouchEnd={deleteLastTime}>Delete Last Time</button>
                      <button className="p-2 text-lg font-bold text-[#f69435]" onTouchEnd={resetTimes}>Reset Times</button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Subset Menu */}
            <button className="absolute top-[14px] right-4 text-white text-lg"
              onTouchEnd={() => setSubsetMenuOpen(!subsetMenuOpen)}>
              {subset}
            </button>
            <AnimatePresence>
              {subsetMenuOpen && (
                <div className='fixed top-0 left-0 h-full w-full' onTouchEnd={() => setSubsetMenuOpen(!subsetMenuOpen)}>
                  <motion.div
                    className="absolute top-[50px] right-4 px-4 py-2 bg-white rounded shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <div className='flex flex-col'>
                      <button className="p-2 text-lg font-bold border-b border-gray-500 text-[#f69435]" onTouchEnd={() => setSubset("3x3x3")}>3x3x3</button>
                      <button className="p-2 text-lg font-bold border-b border-gray-500 text-[#f69435]" onTouchEnd={() => setSubset("ZBLL")}>ZBLL</button>
                      <button className="p-2 text-lg font-bold text-[#f69435]" onTouchEnd={() => setSubset("ZBLS")}>ZBLS</button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>}
          <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex-grow w-full overflow-auto">
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
              <Solve onTimerStop={handleTimerStop} onTimerStart={handleTimerStart} timer={timer} setTimer={setTimer} subset={subset} />
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
      <div className="flex justify-around items-center bg-[#f69435] shadow-lg py-2 text-white">
        <button onTouchEnd={() => changeTab('history')} className="flex flex-col items-center justify-center text-sm">
          <FaHistory size={24} className="mb-1" />
          History
        </button>
        <button onTouchEnd={() => changeTab('solve')} className="flex flex-col items-center justify-center text-sm">
          <FaPlayCircle size={24} className="mb-1" />
          Solve
        </button>
        <button onTouchEnd={() => changeTab('stats')} className="flex flex-col items-center justify-center text-sm">
          <FaChartBar size={24} className="mb-1" />
          Stats
        </button>
      </div>
    </div>
  );
};

export default App;

