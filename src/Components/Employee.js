import axios from 'axios';
import { useEffect, useState } from 'react';


function Employee({ selectedEmployee }) {

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => { axios.get(`https://statenweb.mockable.io/employee/${selectedEmployee}`).then((response) => setSelectedEmployeeData(response.data)); }, [selectedEmployee]);

    if (!selectedEmployeeData) {
        return <div className="spinner-border text-info" role="status"><span className="visually-hidden">Loading...</span></div>
    }

    const {
        id, name, startDate, role, department, photo
    } = selectedEmployeeData;

    return <div>
        <div className="card mt-5" style={{ width:'400px'}}>
            <img src={photo} className="card-img-top" alt={name} />
            <div className="card-body">
                <h3 className="card-title">Employee: <b>{name}</b></h3>
                <h4 className="card-text">Department: <b>{department}</b></h4>
                <h5 className="card-text">Role: <b>{role}</b></h5>
                <h6 className="card-text">ID #: <b>{id}</b></h6>
                <p className="card-text">Start Date: <b>{startDate}</b></p>
            </div>
        </div>
    </div>
}

export default Employee;