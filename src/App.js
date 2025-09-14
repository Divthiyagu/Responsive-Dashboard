import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function Layout() {
  // Layout is inside Provider and Router, so Redux hooks are safe!
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;
