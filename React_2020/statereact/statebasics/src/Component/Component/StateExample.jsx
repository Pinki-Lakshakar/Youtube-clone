import React, { Component,Fragment } from 'react'
class StateExample  extends Component {
    state = {
        username:"Pinki",
      };
    render() { 
        return ( 
            <Fragment>
            <h1> Hello i am statefull component</h1>
            </Fragment>
         );
    }
}
 
export default StateExample ;