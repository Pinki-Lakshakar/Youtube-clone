import React from 'react'

const EmployeeList = (props) => {
    let Employees = props.employeeData;
    let listEmp = Employees.map(emp => (
        <tr key={emp.emp_id}>
            <td> {emp.emp_name}</td>
            <td><img src={emp.emp_photo} alt={emp.emp_name} /></td>
            <td>{emp.emp_dob.toString()}</td>
            <td>{emp.emp_salary}</td>
            <td>{emp.emp_designation}</td>
            <td> {emp.emp_education}</td>
            <td>{emp.emp_city}</td>
            <td>{emp.emp_gender}</td>
        </tr>
    ))
    return (
        <div>
            <h2 className="display-5 font-weight-bold text-uppercase text-success"> List of Employee</h2>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp Name </th>
                        <th> Emp Dob</th>
                        <th>Emp Salary</th>
                        <th>Emp designation </th>
                        <th> Emp city</th>
                        <th>Emp education </th>
                        <th>Emp gender</th>

                    </tr>
                </thead>
                <tbody>
                    {listEmp}
                </tbody>

            </table>
        </div>
    )
}

export default EmployeeList
