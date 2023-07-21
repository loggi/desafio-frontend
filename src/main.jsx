import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Global from './GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Global/>
  </React.StrictMode>,
)
