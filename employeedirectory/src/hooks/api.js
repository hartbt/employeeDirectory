import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/employeeContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)

                setEmployees(response.data.results)

                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[])

    function sortFunction(sort){
        switch(sort){
            case "name":
                byName()
                break
            case "age":
                byAge()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    function byName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })

        setDisplayedEmployees([...employees])
    }

    function byAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunction}

}