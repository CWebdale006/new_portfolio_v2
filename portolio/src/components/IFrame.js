import React from 'react';

export default function IFrame() {
    const iframe = { 
        width: "100%",
        height: "500px",
        border: "none"
    }

    return (
        <div>
            <iframe src="https://cwebdale006.github.io/aframe/" style={iframe} title="project demo"></iframe>
        </div>
    )
}
