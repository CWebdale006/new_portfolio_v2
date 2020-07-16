import React from 'react';
import Navbar from './Navbar';
import backgroundImg from '../img/pc.jpg';

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
    backgroundImage: "url(" + backgroundImg + ")",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "grey"
}

const cover = {
    height: "100vh",
    backgroundColor: "rgba(173, 173, 173, 0.4)"
}

const intro = {
    color: "black",
    textAlign: "center",
    height: "20vh",
    paddingTop: "35vh",
    paddingBottom: "45vh",
    // marginTop: "-10vh" this style is for if i bring the navbar back in 
    position: "relative",
    minHeight: "155px"
}

const info = {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
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
    bottom: "0px",
    left: "40%",
    right: "40%"
}

const scrollText = {
    marginBottom: "0px"
}

export default function Body() {
    return (
        <div style={body} id="body" >
            <div id="cover" style={cover}>
                {/* <Navbar /> idk if i'm gonna keep this in so in the meantime it's getting commented out */}
                <div style={intro} id="intro" >
                    <div id="info" style={info} className="animate__animated animate__fadeIn">
                        <h1 style={{marginTop:'0px'}}> Hi! I'm Connor Webdale</h1>
                        <h3 style={{marginBottom:'0px'}}>A full-stack M.E.R.N. developer looking for full or part time work</h3>
                    </div>
                </div>
                <div id="scroll" style={scrollBox} className="animate__animated animate__fadeIn"> {/* animate__fadeInUp */}
                    <p style={scrollText}>Scroll down for more</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}
