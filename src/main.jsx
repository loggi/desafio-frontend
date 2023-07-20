import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from "./Routes";
import './index.css'
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes/>
    <GlobalStyle/>
  </React.StrictMode>
)
