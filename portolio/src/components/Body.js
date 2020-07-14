import React from 'react';
import Navbar from './Navbar';
import background from '../img/pc.jpg';

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
const body = {
    height: "100vh",
    margin: "0", 
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    // background: "url(" + background + ") center center cover no-repeat fixed",
    // can't use shorthand for whatever reason
    backgroundImage: "url(" + background + ")",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "grey"
}

const cover = {
    backgroundColor: "rgba(173, 173, 173, 0.4)",
}

const intro = {
    color: "black",
    textAlign: "center",
    height: "20vh",
    paddingTop: "35vh",
    paddingBottom: "45vh",
    // marginTop: "-10vh" this style is for if i bring the navbar back in 
    position: "relative"
}

const info = {
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    paddingTop: "10px",
    paddingBottom: "23px",
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "50%",
    margin: "auto",
    borderRadius: "20px"
}

const scrollBox = {
    fontSize: "1.5em",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    left: "40%",
    right: "40%",
}

const scrollText = {
    
}

export default function Body() {
    return (
        <div style={body} id="body" >
            <div id="cover" style={cover}>
                {/* <Navbar />  idk if i'm gonna keep this in so in the meantime it's getting commented out */}
                <div style={intro} id="intro" >
                    <div id="info" style={info}>
                        <h1 style={{marginTop:'0px'}}> Hi! I'm Connor Webdale</h1>
                        <h2 style={{marginBottom:'0px'}}>I'm a motivated student looking for full or part time work to help further my education</h2>
                    </div>
                    <div id="scroll" style={scrollBox}>
                        <p style={scrollText}>Scroll down for more</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
