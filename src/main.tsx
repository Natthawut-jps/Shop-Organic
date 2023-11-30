import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './pages/unities/HandleCart.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BrowserRouter>
)
