import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer'

import './App.css'
import Rastreio from './pages/Rastreio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Rastreio />
      <Footer />

    </>
  )
}

export default App
