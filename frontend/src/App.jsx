import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Ensure the path is correct
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import AboutPage from './pages/About'; // Ensure the path is correct

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        {/* You can add your Navbar component */}
        <Navbar />

        {/* Define your routes here */}
        <Routes>
          {/* Example Route for ContactPage */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
