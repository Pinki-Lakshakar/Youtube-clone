import React, { Component,Fragment } from 'react'
class ChildrenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"sagar",
            age:25,
         }
    }
    render() { 
        return (
            <Fragment>
                <h1> Hello children Component</h1>
            </Fragment>
          );
    }
}
 
export default ChildrenComponent;