import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        ☰
      </button>
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Overview</Link>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Analytics</Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>Settings</Link>
      </aside>
    </>
  );
};

export default Sidebar;
