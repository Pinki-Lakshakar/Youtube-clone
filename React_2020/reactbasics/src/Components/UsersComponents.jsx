import React from 'react'

const UsersComponents = ({
    name, age, company, Salary, designation, children }) => {
    console.log(children);
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>Age:{age}</p>
            <p>Company:{company}</p>
            <p>salary:{Salary}</p>
            <p>designation:{designation}</p>
            <p>{children}</p>
        </div>
    );
};

export default UsersComponents;
