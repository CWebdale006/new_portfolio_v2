import React from 'react';
import "./css/App.css";

// importing components
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import IFrame from './components/IFrame';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Body />
      <AboutMe />
      <Certifications />
      <Projects />
      {/* <IFrame /> */}
      <Footer />
    </>
  );
}

export default App;
