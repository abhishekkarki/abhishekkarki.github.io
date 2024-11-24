import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import App from './App.tsx'

ReactDOM.render(<App />, document.getElementById('root'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
