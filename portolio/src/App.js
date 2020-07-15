import React from 'react';
import "./css/App.css";

// importing components
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Body />
      <AboutMe />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;
