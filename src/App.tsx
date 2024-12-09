import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMobileMenu } from './hooks/useMobileMenu';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';
import Courses from './pages/Courses';
import Fees from './pages/Fees';
import Transport from './pages/Transport';
import Settings from './pages/Settings';

function App() {
  const mobileMenu = useMobileMenu();

  return (
    <Router>
      <Layout mobileMenu={mobileMenu}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;