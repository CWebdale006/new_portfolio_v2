import React from 'react';

export default function AboutMe() {
    const container = {
        lineHeight: "1.5",
        backgroundColor: "rgba(150, 150, 150, 0.6)",
        width: "70%",
        marginTop: "10vh",
        marginRight: "auto",
        marginBottom: "10vh",
        marginLeft: "auto",
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
        paddingTop: "0",
        paddingRight: "10%",
        paddingBottom: "0",
        paddingLeft: "10%",
        textAlign: "center",
        fontSize: "1.25em"
    }

    return (
        <div style={container} data-aos="fade-up">
            {/* hella basic, prob. change later  */}
            <h1 style={h1}>About me</h1>
            {/* <h3 style={{margin: "5px", color: "rgba(0, 0, 0, 0.55)"}}>Description of me or something? </h3>  idk if i'll even keep this */}
            <hr />
            <p style={p} data-aos="fade-in">I've been interested in computers and programming since I built my first computer when I was 13. A few years later, in my Junior and Senior years of high school, I enrolled in a web-based coding program through West-MEC. My first year there I learned the front-end languages HTML5, CSS3, and JavaScript. The second year curriculum was focused on back-end programming and I learned the MERN stack and was introduced to PHP. Upon completion of the program, I was the only student capable of writing an application with full CRUD capabilities. </p>
        </div>
    )
}
