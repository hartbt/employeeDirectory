import { EmployeeContext } from "./employeeContext.js";
import React, { useState, useContext } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const { employees, setDisplayedEmployees } = useContext(EmployeeContext);

  function updateSearch({ target }) {
    const searchTerm = target.value;

    const filterResult = employees.filter(function (employee) {
      setSearch(searchTerm);

      return employee.name.first
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
        ? true
        : false;
    });
    setDisplayedEmployees([...filterResult]);
  }

  return <input type="text" onChange={updateSearch} value={search}></input>;
}
export default Search;
