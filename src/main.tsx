import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
