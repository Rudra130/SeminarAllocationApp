import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/login";
import "./App.css";
import Registration from "./components/Registration";
import HallBooking from "./components/HallBooking"
import Booking from "./components/Booking"
function App() {


  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HallBooking/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path='/HallBooking' element={<HallBooking></HallBooking>}></Route>
        <Route path='/booking' element={<Booking></Booking>}/> 
      </Routes>
    </Router>
  );
}

export default App;

