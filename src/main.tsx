import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadAdSense } from './lib/adsense'

loadAdSense();

createRoot(document.getElementById("root")!).render(<App />);
