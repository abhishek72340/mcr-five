import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FiveProvider} from './Context/context.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FiveProvider>
    <App />
    </FiveProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
