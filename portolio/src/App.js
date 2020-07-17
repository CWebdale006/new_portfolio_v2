import React from 'react';
import Radium, { StyleRoot } from 'radium';
import "./css/App.css";

// importing components
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import IFrame from './components/IFrame';
import Footer from './components/Footer';

import Test from './components/Test';

function App() {
  return (
    <>
      <StyleRoot>
        <Body />
        <AboutMe />
        <Certifications /> 
        {/* <Projects /> */}
        {/* <IFrame /> */}
        <Footer />
      </StyleRoot>
    </>
  );
}

export default App;
