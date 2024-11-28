import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const navigateToPage = (action) => {
    if (action === "superAdminLogin") {
      navigate("/super-admin-login");
    } else if (action === "adminLogin") {
      navigate("/admin-login");
    } else if (action === "registerAdmin") {
      navigate("/register-admin");
    }
  };

  return (
    <div className="welcome-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/853958-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="welcome-content">
        <h1>Welcome to the Admin Portal</h1>
        <div className="card-container">
          <div
            className="card"
            onClick={() => navigateToPage("superAdminLogin")}
          >
            <h3>Login as Super Admin</h3>
          </div>
          <div className="card" onClick={() => navigateToPage("adminLogin")}>
            <h3>Login as Admin</h3>
          </div>
          <div
            className="card"
            onClick={() => navigateToPage("registerAdmin")}
          >
            <h3>Register Admin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
