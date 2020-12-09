import React from 'react';

function Button({children}){

    const Style = {
        buttonStyle: {
            border: "none",
            borderRadius: "6px",
            backgroundColor: "blue"
        },
    }
   
    return(
        <button className="Button">
            {children}
        </button>
    )
}
export default Button;