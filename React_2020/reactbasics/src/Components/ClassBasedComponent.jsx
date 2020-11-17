import React, { Component } from 'react'
class ClassBasedComponent extends Component {
    whereisSagar="";
   
    render() { 
        this.whereisSagar="i dont know where is he, even he didnt attending call also...!";
        
            console.log(this.props);
    return <h1>{this.whereisSagar}</h1>;
        
    }
}
 
export default ClassBasedComponent;