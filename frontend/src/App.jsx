import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Ensure the path is correct
import AboutPage from './pages/About'; // Ensure the path is correct
import SintanaAlliance from './pages/SintanaAlliance'; // Ensure the path is correct
import Home from './pages/Home'; // Ensure the path is correct
import TrackpadSensitiveSlider from './components/SilderComponent';
import AsuPartnership from './pages/AsuPartnership';

// Define a separate component to use the location inside the Router
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home - Sintana Education';
        break;
      case '/about':
        document.title = 'About - Sintana Education';
        break;
      case '/contact':
        document.title = 'Contact - Sintana Education';
        break;
      case '/cintana-alliance':
        document.title = 'The Sintana Alliance - Sintana Education';
        break;
      default:
        document.title = 'Home - Sintana Education';
    }
  }, [location]);

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#' element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cintana-alliance" element={<SintanaAlliance />} />
        <Route path="/w" element={<TrackpadSensitiveSlider/>}></Route>
        <Route path="/asu-partnership" element={<AsuPartnership />}></Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
};

export default App;
