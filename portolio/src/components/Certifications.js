import React from 'react';
import Card from 'react-bootstrap/Card';
import Radium from 'radium';

// importing images 
import backgroundImg from '../img/code.jpg';
import ciwImg from '../img/ciw_logo.jpg';
import mtaImg from '../img/mta_logo.svg';

function Certifications(props) {
    // the background for the entire component 
    const background = { 
        // I know there's a shorthand for this but I can't get it to work in react 
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: "white",
    }

    // using flexbox to position the items, and adding a background color consistent with the Body.js component 
    const container = { 
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(173, 173, 173, 0.4)"
    }

    // just spacing for each ceritifcation so it looks *nice*
    const item = { 
        flexBasis: "30%",
        borderRadius: "20px",
        marginTop: "30px",
        marginBottom: "30px"
    }

    const img = {
        // borderTopLeftRadius: "20px",
        // borderTopRightRadius: "20px"
        borderRadius: "20px"
    }

    // wanted an hr that looked different from the one i used in the AboutMe.js component 
    const hr = {
        width: "60%",
        textAlign: "left",
        marginLeft: "0px"
    }

    return (
        /**
         * Two card, one for each of my certifications. 
         * Also, the images link to the respective issuing authorities 
         */
        <div className="Certifications" style={background}>
            <div style={container}>
                <Card style={{ width: '18rem' }, item} data-aos="fade-right">
                    <a href='https://www.microsoft.com/en-us/learning/mta-certification.aspx' target='blank'>
                        <Card.Img variant="top" src={mtaImg} style={img} />
                    </a>
                    <Card.Body>
                        <Card.Title>MTA: Introduction to HTML and CSS</Card.Title>
                        <hr style={hr} />
                        <Card.Text>
                            Measures HTML5 and CSS3 fundamentals such as structuring documents and presenting information with HTML, and styling web pages with CSS.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }, item} data-aos="fade-left">
                    <a href='https://www.ciwcertified.com/ciw-certifications/web-development-series/javascript-specialist' target='blank'>
                        <Card.Img variant="top" src={ciwImg} style={img} />
                    </a>
                    <Card.Body>
                        <Card.Title>CIW JavaScript Specialist</Card.Title>
                        <hr style={hr} />
                        <Card.Text>
                            Tests on the fundamental concepts of the JavaScript language such as using JavaScript to communicate with users, modify the DOcument Object Model (DOM), control program flow, validate forms, animate images, create cookies, change HTML on the fly, and communicate with databases. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Radium(Certifications);