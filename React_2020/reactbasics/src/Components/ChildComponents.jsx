import React from 'react';


const ChildComponents = (props) => {
    console.log(props);
    return (
        <div>
            <h1> i am child components</h1>
            <h2>{props.javascript}</h2>
            <p>{props.java}</p>

        </div>
    );
};

export default ChildComponents;
