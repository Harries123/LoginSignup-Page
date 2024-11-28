import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Welcome />} />

       
        <Route path="/register-admin" element={<LoginSignup action="Register Admin" />} />

        <Route path="/admin-login" element={<LoginSignup action="Admin Login" />} />

     
        <Route path="/super-admin-login" element={<LoginSignup action="Super Admin Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
