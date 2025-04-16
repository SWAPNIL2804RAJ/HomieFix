import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboardNavbar.css'; 

const AdminDashboardNavbar = () => {
  const [adminName, setAdminName] = useState('Admin');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage("Authentication token not found.");
      navigate('/LoginPage');
      return;
    }

    axios
      .get('/api/admins/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data && response.data.name) {
          setAdminName(response.data.name || "Admin");
        } else {
          setErrorMessage("Failed to load admin profile.");
        }
      })
      .catch((error) => {
        setErrorMessage("Error fetching admin's name.");
        console.error("Error:", error.response?.data || error.message);
        navigate('/LoginPage');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="admin-navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <span className="adminnavbar_headerlogo">HomieFix</span>
      </div>

      <div className="nav-links">
        <NavLink to="/AdminDashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/AdminJobs" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Jobs
        </NavLink>
        <NavLink to="/AdminProfile" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Profile
        </NavLink>
      </div>

      <div className="profile-menu">
        <span className="admin-name">
          {isLoading ? "Loading..." : `Hello, ${adminName}`}
        </span>
        <div className="dropdown">
          <button className="dropdown-button">Profile ▼</button>
          <div className="dropdown-content">
            <span onClick={handleLogout}>Logout</span>
            <span onClick={() => navigate('/AdminProfile')}>Profile</span>
          </div>
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </nav>
  );
};

export default AdminDashboardNavbar;
