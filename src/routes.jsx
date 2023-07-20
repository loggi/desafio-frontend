import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TrackOrderPage from "./pages/TrackOrder/TrackOrder";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/rastreador/:trackingCode" element={<TrackOrderPage />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
