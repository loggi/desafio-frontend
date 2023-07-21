import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrackingPage from './Page/TrackingPage'
import TrackOrder from './Page/TrackOrder'

 function TrackerRoute() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<TrackingPage />} />
                <Route path="/TrackOrder/:trackingCode" element={<TrackOrder/>} />            
            </Routes>
        </BrowserRouter>
    )
}

export default TrackerRoute;