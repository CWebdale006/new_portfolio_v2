import React from 'react';

// right now the basic idea for this component is for it to be links to my social media

/**
 * LinkedIn 
 * GitHub 
 */

export default function Footer() {
    const footer = {
        width: "100%",
        height: "200px",
        backgroundColor: "rgba(70, 70, 70, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const item = {
        margin: "0 30px"
    }

    const links = {
        color: "black"
    }

    return (
        <div style={footer} className="footer">
            <div style={item}>
                <a href="mailto: cwebdale002@gmail.com" style={links} target="_blank"><i class="fas fa-envelope-square"></i></a>
            </div>
            <div style={item}>
                <a href="https://github.com/CWebdale006" style={links} target="_blank"><i class="fab fa-github-square"></i></a>
            </div>
            <div style={item}>
                <a href="https://www.linkedin.com/in/connor-webdale-72348a183" style={links} target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    )
}
