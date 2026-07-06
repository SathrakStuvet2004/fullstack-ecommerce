import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import '../src/css/theme.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
    <App />
  </BrowserRouter>
)
