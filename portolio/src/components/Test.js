import React from 'react';
import Radium from 'radium';

function Test(props) {
    const style = {
        '@media (min-width: 700px)': {
            color: "pink"
        }
    }

    return ( 
        <div className="Test" style={style}>
            que pasa?
        </div> 
    )
}

export default Radium(Test);