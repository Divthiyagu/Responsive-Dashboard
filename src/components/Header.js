import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">Dashboard</div>
    <nav>
      <Link to="/">Overview</Link>
      <Link to="/">Analytics</Link>
      <Link to="/settings">Settings</Link>
    </nav>
    <div className="header-icons">
      <div className="profile" title="User Profile">👤</div>
      <div className="notifications" title="Notifications">🔔</div>
    </div>
  </header>
);

export default Header;
