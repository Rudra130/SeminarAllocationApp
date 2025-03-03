import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/login";
import "./App.css";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />

      </Routes>
    </Router>
  );
}

export default App;

