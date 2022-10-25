import { useState } from "react";

const Employees = () => {

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

    return (
        <main>
            {
                employees.map((employee) => (
                    <div>
                        <p>{employee.firstName + ' ' + employee.lastName}</p>
                    </div>
                ))
            }
        </main>
    )
}

export default Employees;