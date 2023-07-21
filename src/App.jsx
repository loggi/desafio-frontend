import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import TrackingInformation from './Pages/TrackingInformation/TrackingInformation';
import Error from './Pages/Error/Error';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/TrackingInformation/:TrackingNumber" element={<TrackingInformation/>} />
        <Route path="/Error" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
