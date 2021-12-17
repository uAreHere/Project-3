// import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Employees from './Components/Employees';


function App() {

  // const [employees, displayRegistry] = useState(null);
  // const [loading, setLoading] = useState(false);


  // useEffect(function () {
  //   loadRegistry();
  // }, []);

  // function loadRegistry() {
  //   setLoading(true);
  //   axios.get('https://statenweb.mockable.io/employees').then(function (response) {
  //     const employeeList = response.data.pop();
  //     displayRegistry(<p>{employeeList.name} <br /> {employeeList.department} <br /> {employeeList.id}</p>)
  //     setLoading(false);
  //   });
  // };

  return (
    <div className="App">
      <section className="container bg-primary">
        <div>
          <Employees />
        </div>
      </section>
    </div>
  );
}

export default App;
