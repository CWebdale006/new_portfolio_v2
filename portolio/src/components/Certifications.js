import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import backgroundImg from '../img/code.jpg';
import ciwImg from '../img/ciw_logo.jpg';

export default function Certifications() {
    const background = { 
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor: "white"
    }

    const container = { 
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(173, 173, 173, 0.4)",
    }

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

    const hr = {
        width: "60%",
        textAlign: "left",
        marginLeft: "0px"
    }

    return (
        <div style={background}>
            <div style={container}>
                <Card style={{ width: '18rem' }, item}>
                    <Card.Img variant="top" src="holder.js/100px180" style={img} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <hr style={hr} />
                        <Card.Text>
                            Some quick example text to build on the card title anmake up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }, item}>
                    <Card.Img variant="top" src={ciwImg} style={img} />
                    <Card.Body>
                        <Card.Title>CIW JavaScript Specialist</Card.Title>
                        <hr style={hr} />
                        <Card.Text>
                            Tests on the fundamental concepts of the JavaScript language such as using JavaScript to communicate with users, modify the DOcument Object Model (DOM), control program flow, validate forms, animate images, create cookies, change HTML on the fly, and communicate with databases. 
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
