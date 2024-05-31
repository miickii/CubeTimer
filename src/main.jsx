import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SettingsProvider } from './SettingsContext';
import { PracticeModeProvider } from './PracticeModeContext';
import { TimerScrambleProvider } from './TimerScrambleContext.jsx';

// Function to check if the app is in standalone mode
function isStandaloneMode() {
  return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone === true);
}

// Set custom properties for safe area insets
function handleDeviceType() {
  if (isStandaloneMode()) {
    document.documentElement.style.setProperty('--safe-area-inset-top', 'env(safe-area-inset-top)');
    document.documentElement.style.setProperty('--safe-area-inset-left', 'env(safe-area-inset-left)');
    document.documentElement.style.setProperty('--safe-area-inset-right', 'env(safe-area-inset-right)');
    document.documentElement.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom)');
    document.body.classList.add('standalone');
  } else {
    document.documentElement.style.setProperty('--safe-area-inset-top', '0px');
    document.documentElement.style.setProperty('--safe-area-inset-left', '0px');
    document.documentElement.style.setProperty('--safe-area-inset-right', '0px');
    document.documentElement.style.setProperty('--safe-area-inset-bottom', '0px');
    document.body.classList.add('browser');
  }
}

// Apply the safe area insets
handleDeviceType();

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingsProvider>
    <TimerScrambleProvider>
      <PracticeModeProvider>
        <div className='app-container'>
          <App />
        </div>
      </PracticeModeProvider>
    </TimerScrambleProvider>
  </SettingsProvider>,
)
