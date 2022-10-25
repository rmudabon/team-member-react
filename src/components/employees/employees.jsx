
import femaleProfile from '../../images/femaleProfile.jpg'
import maleProfile from '../../images/maleProfile.jpg';

const Employees = ({employees, selectedTeam, employeeCardClick, changeTeam}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-2 mb-2">
                <div className="col-7">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={changeTeam}>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div key={employee.id} id={employee.id} className={employee.teamName === selectedTeam ? 'card selected-team' : 'card'} style={{cursor: 'pointer'}} onClick={employeeCardClick}>
                                    <img src={(employee.gender === 'female' ? femaleProfile : maleProfile)} alt='Female Profile' className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.firstName + ' ' + employee.lastName}</h5>
                                        <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;