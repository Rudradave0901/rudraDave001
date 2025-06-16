// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Components
import App from './App.jsx';
// CSS Links
import './index.css'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// 101923869012