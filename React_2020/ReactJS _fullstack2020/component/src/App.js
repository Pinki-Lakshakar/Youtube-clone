// class Based component

/*import React, { Component, Fragment } from 'react';
import {Class ,AppwithFunction} from './Component/Class';
export  default class App extends Component{
  render(){
    return <Fragment>
      <Class />
      <AppwithFunction/>
    </Fragment>

  }
}
*/
// functional Component

/*export let AppwithFunction = () => {
  return <h1> Component with function </h1>;
};*/
/*-----------------------------------------------------------------------*/
/*import React, { Component } from 'react';
import Header from "./Component/Header";
class App extends Component {
  state = { 
    users:{
      name:'Pinki',
      age:23,
      company:'Amazon',
      Salary:19000,
      designation :"software developer",
    },
    languages :["java","Sql","HTML","Javascript"]
   };
  render() { 
    return (
      <div>
    <h1> i am class Based Component </h1> 
    <h1>users : {this.state.users.name}</h1>
    <p>age : {this.state.users.age}</p>
    <p>company : {this.state.users.company}</p>
    <p>Salary : {this.state.users.Salary}</p>
    <p>designation : {this.state.users.designation}</p>
  <Header />
    </div>
    );
  }
}
 
export default App;*
/*----------------------------------------------------------------------------*/
import React, { Component ,Fragment} from 'react';
class App extends Component {
  state ={
    username:"Shashi",

  };
  //INSIDE CLASS SHOULD CALL RENDER METHOD 
  //JSX SYNTAX
  render(){
    return( 
      <Fragment>
    <h1> my name is { this.state.username}</h1>
    <p>

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button className="btn btn-danger" id ="jspiders">Submit </button>
    </Fragment>
    );
  }
}
export default App;

