import React, { useState, useContext } from "react";
import { useGet } from "../hooks/api.js";
import Button from "./button.js";
import { EmployeeContext } from "./employeeContext.js";

function Table() {
  const Style = {
    tableHead: {
      backgroundColor: "gray",
      fontWeight: "bold",
    },
  };

  const [url] = useState("https://randomuser.me/api/?results=10");

  const { displayedEmployees } = useContext(EmployeeContext);

  const { sortFunction } = useGet(url);

  return (
    <table>
      <thead style={Style.tableHead}>
        <tr>
          <td onClick={() => sortFunction("name")}>
            <Button>First Name</Button>
          </td>
          <td>Last Name</td>
          <td>UID</td>
          <td>Gender</td>
          <td>E-mail</td>
          <td onClick={() => sortFunction("age")}>
            <Button>Age</Button>
          </td>
        </tr>
      </thead>
      <tbody>
        {displayedEmployees.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.login.uuid}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
