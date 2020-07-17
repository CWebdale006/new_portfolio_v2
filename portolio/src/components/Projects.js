import React from 'react'; 

// the active link for the iframe
let active;

function animate(e) {
    if (e.target.href !== active) {
        // setting the active variable to the href of the link that is clicked 
        active = e.target.href;

        // getting the iframe element in a variable and resetting any classes 
        let iframe = document.getElementsByName("iframe_1")[0];
        iframe.setAttribute("class", "animate__animated");

        // allows for custom classes/styles depending on the project being displayed 
        let addClass; 

        // adding a class that changes the width of the element if it's a specific site 
        if (active==="https://pokemonapi-westmec.glitch.me/") {
            iframe.className+=" pokemon";
            addClass = "pokemon";
        }

        // adds the class name for the animation to run 
        iframe.className += " animate__flipInY";

        // resets the animation classes, keeping the custom class/styles 
        setTimeout(() => {
            iframe.setAttribute("class", `animate__animated ${addClass}`)
        }, 1000);
    }
}

// Project.js-specific navbar 
const Navbar = () => {
    // using flexbox so that more links/projects can be easily added 
    const container = {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly", // center, space-around 
        textAlign: "center"
    }

    // the margin/padding is so that the hover effects look better 
    const item = {
        margin: "8px 0px",
        fontSize: "1.2em",
        padding: "5px 12px",
        borderRadius: "10px"
    }

    return (
        <div id="container" style={container} onClick={animate}>
            <a href="https://pokemonapi-westmec.glitch.me/" target="iframe_1" style={item} className="project">Pokemon Api</a>
            <a href="/" target="iframe_1" style={item} className="project">EZAirlines</a>
            {/* <a href="https://cwebdale006.github.io/new_portfolio/" target="iframe_1" style={item} className="project">2018 Portfolio</a> */}
        </div>
    )
};

const Display = () => {
    const iframe = {
        
    }

    return (
        <iframe id="iframe" src={active} name="iframe_1" className="animate__animated" title="Project demo" style={iframe}></iframe>
    )
};

export default function Projects() {
    // similar styles to the "about me" component for some structure in my site 
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

    // putting the navbar and iframe components together 
    return (
        <div style={projects} className="grayBlock">
            <h1 style={h1}>Projects</h1>
            {/* <hr style={{marginBottom: "0px"}}/> */}
            <Navbar />
            <Display />
        </div>
    )
}
