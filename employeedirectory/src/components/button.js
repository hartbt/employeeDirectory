import React from 'react';
import "./Button.css"

function Button({children}){

    const Style = {
        buttonStyle: {
            
        },
    }
   
    return(
        <button className="Button">
            {children}
        </button>
    )
}
export default Button;