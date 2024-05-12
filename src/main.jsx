import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SettingsProvider } from './SettingsContext';
import { PracticeModeProvider } from './PracticeModeContext';
import { TimerScrambleProvider } from './TimerScrambleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingsProvider>
    <TimerScrambleProvider>
      <PracticeModeProvider>
        <App />
      </PracticeModeProvider>
    </TimerScrambleProvider>
  </SettingsProvider>,
)
