import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/login/inicio/Inicio.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
