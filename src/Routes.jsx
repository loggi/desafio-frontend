import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import FollowUp from './Pages/FollowUp/FollowUp';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/FollowUp' element={<FollowUp/>} />
                
            </Routes>
        </BrowserRouter>
    );
}