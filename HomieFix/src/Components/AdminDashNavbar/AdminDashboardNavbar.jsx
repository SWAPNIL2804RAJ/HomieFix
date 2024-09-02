import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboardNavbar.css'; 

const AdminDashboardNavbar = () => {
  const [adminName, setAdminName] = useState('Admin'); // Default to "Admin" until fetched
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('/api/admin/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAdminName(response.data.name);
        })
        .catch((error) => {
          console.error("Error fetching admin's name:", error);
          navigate('/LoginPage');
        });
    } else {
      navigate('/LoginPage');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect to homepage
  };

  return (
    <nav className="admin-navbar">
      <div className="logo">
        <span className="adminnavbar_headerlogo" onClick={() => navigate('/')}>
          HomieFix
        </span>
      </div>

      <div className="profile-menu">
        <span className="admin-name">Hello, {adminName}</span>
        <div className="dropdown">
          <button className="dropdown-button">Profile ▼</button>
          <div className="dropdown-content">
            <span onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminDashboardNavbar;
