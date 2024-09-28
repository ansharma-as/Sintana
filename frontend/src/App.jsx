import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Ensure the path is correct
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import AboutPage from './pages/About'; // Ensure the path is correct
import SintanaAlliance from './pages/SintanaAlliance'; // Ensure the path is correct
import Home from './pages/Home'; // Ensure the path is correct

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        {/* You can add your Navbar component */}
        

        {/* Define your routes here */}
        <Routes>
          {/* Example Route for ContactPage */}
          <Route path='/' element={<Home/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cintana-alliance" element={<SintanaAlliance />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
