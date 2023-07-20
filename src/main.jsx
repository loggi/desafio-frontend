import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <GlobalStyle/>
  </React.StrictMode>
)
