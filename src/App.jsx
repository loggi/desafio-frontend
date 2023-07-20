import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import TrackingInformation from './Pages/TrackingInformation/TrackingInformation';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/TrackingInformation/:numeroRastreio" element={<TrackingInformation/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
