import Search from "./search.js";
import React from "react";

function Navbar() {
  const Style = {
    navbarStyle: {
      display: "flex",
      backgroundColor: "blue",
      color: "white",
      justifyContent: "space-between",
      alignItem: "center",
      padding: "10px 5px 10px 5px",
    },
    logoArea: {
      fontSize: "24px",
    },
    bold: {
      fontWeight: "bold",
    },
    displayFlex: {
      display: "flex",
    },
  };

  return (
    <div className="navbar" style={Style.navbarStyle}>
      <div className="logo bold" style={(Style.logoArea, Style.bold)}>
        Employee Directory
      </div>
      <div className="descriptor" style={Style.displayFlex}>
        <div className="bold">Employee Search: </div>
        <Search />
      </div>
    </div>
  );
}
export default Navbar;
