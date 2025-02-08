import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreZContextProvider from './context/StoreContext.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreZContextProvider>
      <AuthContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthContextProvider>
    </StoreZContextProvider>
  </BrowserRouter>
)
