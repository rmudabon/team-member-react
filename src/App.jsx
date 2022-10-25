import * as React from 'react';
import './App.css';
import { useState } from "react";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Employees from './components/employees/employees';

function App() {

  const [selectedTeam, setTeam] = useState("Team A");

  const [employees, setEmployees] = useState([
      {
          id: 1,
          firstName: 'Bob',
          lastName: 'Jones',
          designation: 'JavaScript Developer',
          gender: 'male',
          teamName: 'Team A'
      },
      {
          id: 2,
          firstName: 'Jill',
          lastName: 'Jones',
          designation: 'NodeJS Developer',
          gender: 'female',
          teamName: 'Team B'
      },
      {
          id: 4,
          firstName: 'Galili',
          lastName: 'Shepherd',
          designation: 'Java Developer',
          gender: 'male',
          teamName: 'Team C'
      },
      {
          id: 5,
          firstName: 'Mark',
          lastName: 'Koe',
          designation: 'Database Administrator',
          gender: 'male',
          teamName: 'Team A'
      },
  ])

  const changeTeam = (event) => {
      console.log(event.target.value);
      setTeam(event.target.value);
  }

  const employeeCardClick = (event) => {
      const assignedEmployees = employees.map((employee) => (employee.id === parseInt(event.currentTarget.id) ? ((employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam}) : employee))
      setEmployees(assignedEmployees);
  }

  return (
    <div>
      <Header selectedTeam={selectedTeam} memberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees} selectedTeam={selectedTeam} employeeCardClick={employeeCardClick} changeTeam={changeTeam}/>
      <Footer/>
    </div>
  );
}

export default App;
