import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HeavyMetalDetoxPage
 from './page1.tsx'
import TudcaLiverSupportPage from './page2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <HeavyMetalDetoxPage />
    <TudcaLiverSupportPage />
  </StrictMode>,
)
