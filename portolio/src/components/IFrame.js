import React from 'react';

/**
 * This component is an... 'ambitious' idea. It would be creating a showcase of my projects andd their websites in vr using aframe and being able to explore them in vr. However, I don't currently have the time to learn aframe well enough to finish this component, so this is staying a W.I.P. until I find the time to complete it. 
 */

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
