import React from 'react';

/**
 * Originally was going to have a sticky nav in my site, ended up changing my mind but i'm keeping the component just in case 
 */

export default function Navbar() {
    const container = {
        display: "flex", // or inline flex 
        flexFlow: "row nowrap", // combines flexDirection and flexWrap
        justifyContent: "space-evenly", // also might wanna try space-around
        alignItems: "baseline", // aligned where text baslines are 
        textAlign: "center",
        height: "10vh"
    };

    const item = { 
        flexShrink: "1", // default 1: might mess around for responsiveness
        flexGrow: "1"
    };

    const name = {
        flex: "2 1 auto"
    };

    // then to use it's just <h1 style={defaultStyle}>boom</h1> 

    return (
        <div style={container}>
            <a href="#" style={name}>Connor Webdale</a>
            <a href="#" style={item}>lorem ipsum</a>
            <a href="#" style={item}>lorem ipsum</a>
            <a href="#" style={item}>lorem ipsum</a>
        </div>
    )
}
