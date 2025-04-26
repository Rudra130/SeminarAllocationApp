import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/login";
import "./App.css";
import Registration from "./components/Registration";
import HallBooking from "./components/hallBooking";
import StudentDashBoard from "./dashboards/StudentDashBoard";

function App() {


  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HallBooking/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path ="/student-dashboard"element={<StudentDashBoard/>}/>
       

      </Routes>
    </Router>
  );
}

export default App;

