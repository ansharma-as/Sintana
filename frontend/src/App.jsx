import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Ensure the path is correct
import AboutPage from './pages/About'; // Ensure the path is correct
import SintanaAlliance from './pages/SintanaAlliance'; // Ensure the path is correct
import Home from './pages/Home'; // Ensure the path is correct
import TrackpadSensitiveSlider from './components/SilderComponent';
import AsuPartnership from './pages/AsuPartnership';
import Team from './pages/Team';
import TeamMemberDetail from './components/TeamMemberDetail';
import Universities from './pages/Universities';
import NewsPage from './pages/News';
import TermsPage from './pages/TermsOfUse';


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
      case '/news':
        document.title = 'News - Sintana Education';
        break;
      case '/terms':
        document.title = 'News - Sintana Education';
        break;
      case '/sintana-alliance':
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
        <Route path="/sintana-alliance" element={<SintanaAlliance />} />
        <Route path="/w" element={<TrackpadSensitiveSlider/>}/>
        <Route path="/asu-partnership" element={<AsuPartnership />}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/team/:name' element={<TeamMemberDetail/>}/>
        <Route path='/globally-ranked-universities' element={<Universities/>} />

        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/terms' element={<TermsPage/>}/>


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
