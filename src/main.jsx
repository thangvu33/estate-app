import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import HouseContextProvider from './components/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
  </HouseContextProvider>
)
