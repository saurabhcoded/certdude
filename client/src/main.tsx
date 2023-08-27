import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/css/output.css"
import "primeicons/primeicons.css";
import "@radix-ui/themes/styles.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
