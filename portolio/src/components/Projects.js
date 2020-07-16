import React from 'react'; 

const Navbar = () => {
    const container = {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly", // center, space-around 
        textAlign: "center"
    }

    const item = {
        margin: "8px 0px",
        fontSize: "1.2em",
        padding: "5px 12px",
        borderRadius: "10px"
    }

    return (
        <div style={container}>
            <a href="https://pokemonapi-westmec.glitch.me/" target="iframe_1" style={item} className="project">Pokemon Api</a>
            <a href="https://animate.style/#best-practices" target="iframe_1" style={item} className="project">EZAirlines</a>
            {/* <a href="#" target="iframe_1" style={item}></a> */}
        </div>
    )
};

const Display = () => {
    const iframe = {
        
    }

    return (
        <iframe src="https://www.google.com" name="iframe_1" title="Project demo" style={iframe}></iframe>
    )
};

export default function Projects() {
    const projects = {
        backgroundColor: "rgba(150, 150, 150, 0.6)",
        width: "70%",
        marginTop: "10vh",
        marginRight: "auto",
        marginBottom: "10vh",
        marginLeft: "auto",
        paddingBottom: "20px",
        paddingRight: "20px",
        paddingLeft: "20px",
        borderRadius: "20px",
        textAlign: "center"
    }

    const h1 = {
        margin: "0px",
        paddingTop: "16px"
    }

    return (
        <div style={projects}>
            <h1 style={h1}>Projects</h1>
            {/* <hr style={{marginBottom: "0px"}}/> */}
            <Navbar />
            <Display />
        </div>
    )
}
