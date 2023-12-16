import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './pages/unities/HandleCart.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <GoogleOAuthProvider  clientId={import.meta.env.VITE_Client_ID}>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
