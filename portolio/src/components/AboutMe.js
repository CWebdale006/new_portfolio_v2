import React from 'react';

export default function AboutMe() {
    // General styling for the text/container 
    // Also setting up the flexbox for the h1/p tags
    const container = {
        lineHeight: "1.5",
        backgroundColor: "rgba(150, 150, 150, 0.6)",
        width: "70%",
        margin: "10vh auto",
        paddingBottom: "20px",
        borderRadius: "20px",

        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center"
    }

    const h1 = {
        margin: "0px",
        paddingTop: "16px"
    }

    const p = {
        padding: "0 10%",
        textAlign: "center",
        fontSize: "1.25em"
    }

    return (
        // Uses an animation-on-scroll library 
        <div style={container} data-aos="fade-up" className="grayBlock">
            <h1 style={h1}>About me</h1>
            <hr />
            <p style={p} data-aos="fade-in">I've been interested in computers and programming since I built my first computer when I was 13. 
            A few years later, in my Junior and Senior years of high school, I enrolled in a web-based coding program through West-MEC. 
            My first year there I learned the front-end languages HTML5, CSS3, and JavaScript. 
            The second year curriculum was focused on back-end programming where I learned the MERN stack and was introduced to PHP. 
            Upon completion of the program, I was the only student capable of writing an application with full CRUD capabilities. 
            After West-MEC, I went to ASU to pursue a degreee in Computer Science. 
            I studied there for a year before realizing that I wanted to obtain real-world coding experience instead of learning from a textbook. </p>
        </div>
    )
}
