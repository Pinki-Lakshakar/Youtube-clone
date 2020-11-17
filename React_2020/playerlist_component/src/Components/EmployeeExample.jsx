import React, { Component, Fragment } from 'react'
import faker from "faker/locale/en_IND";
import EmployeeList from './EmployeeList';
class EmployeeExample extends Component {
    state = {
        employeeData: [
            {
                emp_id: 1,
                emp_photo: faker.image.avatar(),
                emp_name: 'Pinki',
                emp_dob: new Date('1996-04-21'),
                emp_salary: 30000,
                emp_designation: "Java developer",
                emp_education: "BE",
                emp_city: "mysore",
                gender: "feMale"
            },
            {
                emp_id: 2,
                emp_photo: faker.image.avatar(),
                emp_name: 'Ankit',
                emp_dob: new Date('2002-04-21'),
                emp_salary: 50000,
                emp_designation: "ReactJs",
                emp_education: "BE",
                emp_city: "Gwalior",
                gender: "Male"
            },
            {
                emp_id: 3,
                emp_photo: faker.image.avatar(),
                emp_name: 'Nitesh',
                emp_dob: new Date('1998-04-21'),
                emp_salary: 60000,
                emp_designation: "Nodejs",
                emp_education: "BE",
                emp_city: "Bangalore",
                gender: "Male"
            },



        ]
    }
    render() {
        return (
            <Fragment>
                <EmployeeExample employeeData={this.state.employeeData} />

            </Fragment>
        );
    }
}

export default EmployeeExample;

