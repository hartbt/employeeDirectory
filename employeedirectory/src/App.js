import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import Table from "./components/table";
import { EmployeeContext } from "./components/employeeContext";

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([]);

  const Style = {
    overallStyle: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div className="App" style={Style.overallStyle}>
      <EmployeeContext.Provider
        value={{
          employees,
          setEmployees,
          displayedEmployees,
          setDisplayedEmployees,
        }}
      >
        <Navbar />
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
