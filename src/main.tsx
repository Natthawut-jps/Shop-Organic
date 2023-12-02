import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './pages/unities/HandleCart.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <GoogleOAuthProvider  clientId='644740484377-n8bvn3io87djs4jmg7hag84hha6jgfto.apps.googleusercontent.com'>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
