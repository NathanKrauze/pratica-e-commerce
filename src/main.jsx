import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalReset from './globalStyles/GlobalReset'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset />
    <App />
  </React.StrictMode>,
)
