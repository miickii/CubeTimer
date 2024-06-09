import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import { usePracticeMode } from '../PracticeModeContext';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const PopupManager = () => {
    const { state: practiceState, setScorePopupShown } = usePracticeMode();
    const [showPracticePopup, setShowPracticePopup] = useState(false);
    const [showScorePopup, setShowScorePopup] = useState(false);
 
    useEffect(() => {
        if (practiceState.active) {
            const practicePopupPref = localStorage.getItem('showPracticePopup');
            setShowPracticePopup(practicePopupPref !== 'false');

            setScorePopupShown(false);
        } else {
            setShowPracticePopup(false);
        }
    }, [practiceState.active]);
  
    useEffect(() => {
        if (practiceState.firstScoreUpdate && !practiceState.scorePopupShown) {
            const scorePopupPref = localStorage.getItem('showScorePopup');
            setShowScorePopup(scorePopupPref !== 'false');
            setScorePopupShown(true);
        }
    }, [practiceState.firstScoreUpdate]);
  
    const dismissPracticePopup = () => {
        setShowPracticePopup(false);
    };
  
    const dismissScorePopup = () => {
        setShowScorePopup(false);
    };
  
    const dontShowPracticePopupAgain = () => {
        setShowPracticePopup(false);
        localStorage.setItem('showPracticePopup', 'false');
    };
  
    const dontShowScorePopupAgain = () => {
        setShowScorePopup(false);
        localStorage.setItem('showScorePopup', 'false');
    };

    return (
        <>
        {showPracticePopup && practiceState.active && (
            <Popup
            title="Understanding Practice Mode"
            message={
                <>
                    <p>Practice mode focuses on improving your skills by presenting cases that need more practice. Cases are selected based on a probability distribution created from their scores.</p>
                    <p>Scores are updated considering the most recent performance using recency-weighted averages. Only the currently selected subsets and algsets are used, and changes to these selections are not allowed during a session.</p>
                </>
            }
            onClose={dismissPracticePopup}
            onDontShowAgain={dontShowPracticePopupAgain}
            />
        )}
        {showScorePopup && practiceState.firstScoreUpdate && (
            <Popup
            title="Score Update"
            message={
                <>
                    <p>Each case has a score starting at 0. After appearing twice, the score is updated based on your performance:</p>
                    <ul className="ml-4">
                        <li><FaArrowUp className="inline text-green-500" /> Better performance increases the score.</li>
                        <li><FaArrowDown className="inline text-red-500" /> Worse performance decreases the score.</li>
                    </ul>
                    <p>Cases with lower scores appear more frequently to help you improve on them.</p>
                </>
            }
            onClose={dismissScorePopup}
            onDontShowAgain={dontShowScorePopupAgain}
            />
        )}
        </>
    );
};

export default PopupManager;
