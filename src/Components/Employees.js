import axios from 'axios';
import { useState, useEffect } from 'react';
import Employee from './Employee';


function Employees() {
    
    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setEmployeeInfo] = useState(null);

    useEffect(displayRegistry, []);

    function displayRegistry() {
        axios.get('https://statenweb.mockable.io/employees').then(function (response) {
            setEmployeeData(response.data);
        });
    }

    function employeeById(id) {
        setEmployeeInfo(id);
    }

    if (employeeData.length === 0) {
        return <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    if (selectedEmployee) {
        return <div>
            <Employee selectedEmployee={selectedEmployee} />
            <button onClick={() => setEmployeeInfo(null)} className="btn btn-danger my-4">Return to Main List</button>
        </div>
    }

    return <div className="container">
        <h1 className="text-light">Welcome, Here Are Our Current Employees</h1>
        
        {employeeData.map((employee) => <p key={employee.id}><button className="btn btn-danger text-light my-2" onClick={() => employeeById(employee.id)}>{employee.name} <br /> {employee.department} < br /> {employee.id}</button></p>)}
    </div>

}

export default Employees;