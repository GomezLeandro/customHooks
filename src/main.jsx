import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
