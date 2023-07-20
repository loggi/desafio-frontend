import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Login from './pages/Login';
import Rastreio from './pages/Rastreio';
import Pedidos from './pages/Pedidos';


const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Rastreio />} />
        <Route path='/pedidos' element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas