
// root component
/*
<div>
   <h1> hello React js  I am root component </h1>

     <section>
   
     <ChildComponents Javascript="javascript"java="java" J2EE="j2ee"/>
      </section>
   </div>
     */
    /*====================================================================*/
    /*<UsersComponents
    name="Pinki"
    age={24}
    Company="TCS"
    Salary={3000}
    designation="software developer"
  >
    <button> Hire me </button>

  </UsersComponents>
  <UsersComponents
    name="Ayushi"
    age={22}
    Company="Capgemini"
    Salary={5000}
    designation="">
    <button> Hire me </button>

  </UsersComponents>
  <UsersComponents
    name="Nitesh"
    age={22}
    Company="Replicon"
    Salary={50000}
    designation="">
    <button> Hire me </button>

  </UsersComponents>
  <UsersComponents
    name="MAni"
    age={23}
    Company="Sagar"
    Salary={700}
    designation="">
    <button> Hire me </button>

  </UsersComponents>*/


import React from 'react';
import ChildComponents from './Components/ChildComponents';
import UsersComponents from "./Components/UsersComponents";
import ClassBasedComponent from './Components/ClassBasedComponent';

const App = () => {
  return (
    <section id="ParentBlock">
      <article>
        <ClassBasedComponent
        Javafullstack={[
          "java",
          "j2ee",
          "hibrnate",
          "javascript",
          "angular",
          "spiring",
        ]}
        />
        <ClassBasedComponent
        MernStack={[
          "react",
          "expresss",
          "mangoDb",
          "nodejs",
          "Api",
          "Javascript",
        ]}/>
      </article>
    </section>
  );
};

export default App;

