import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Memoria from './componentes/servicios/Memoria.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memoria>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memoria>
  </StrictMode>,
)
