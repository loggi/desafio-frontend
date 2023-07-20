import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TrackOrder from "./pages/TrackOrder/TrackOrder";


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}> </Route>
        <Route path="/rastreador" element={<TrackOrder />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
