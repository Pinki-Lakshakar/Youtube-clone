import React, { Component, Fragment } from 'react';

class PlayerList extends Component {
    // in react constructor is used for bindings  this keyword 
    constructor(){
        super()
        this.handleEvents =this.handleEvents.bind(this)
    }

     /*Alert(){
         window.alert('I am react alert')
     }*/
     handleEvents(){
         console.log(this)
     }
//react event with this keyword bindings
    //simple function or method 
    render() { 
        return ( 
            <Fragment>
                <h1> List Player</h1>
                <button className="btn btn-primary"
                onClick={this.handleEvents}>Click me </button>
            </Fragment>
         );
    }
}
 
export default PlayerList;

