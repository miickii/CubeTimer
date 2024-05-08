import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SettingsProvider } from './SettingsContext';
import { PracticeModeProvider } from './PracticeModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingsProvider>
    <PracticeModeProvider>
      <App />
    </PracticeModeProvider>
  </SettingsProvider>,
)
