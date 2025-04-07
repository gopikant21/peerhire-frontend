// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Router>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)] pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </DarkModeProvider>
  );
};

export default App;