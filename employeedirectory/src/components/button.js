import React from "react";

function Button({ children }) {
  const Style = {
    buttonStyle: {
      border: "none",
      borderRadius: "6px",
      backgroundColor: "yellow",
    },
  };

  return (
    <button className="Button" style={Style.buttonStyle}>
      {children}
    </button>
  );
}
export default Button;
