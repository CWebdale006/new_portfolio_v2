import React from 'react'

export default function AboutMe() {
    const container = {
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

    const p = {
        paddingTop: "0",
        paddingRight: "10%",
        paddingBottom: "0",
        paddingLeft: "10%",
        textAlign: "center",
        fontSize: "1.25em"
    }

    return (
        <div style={container}>
            {/* hella basic, prob. change later  */}
            <h1 style={{marginBottom: "0px"}}>About me</h1>
            <h3 style={{margin: "5px", color: "rgba(0, 0, 0, 0.55)"}}>Description of me or something? </h3> {/* idk if i'll even keep this */}
            <hr />
            <p style={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet blanditiis consequuntur ullam facere similique minus totam neque corrupti numquam sed rerum minima magni, omnis officia quam voluptatem tempora dolore!</p>
        </div>
    )
}
