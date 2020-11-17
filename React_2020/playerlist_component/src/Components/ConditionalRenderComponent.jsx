// Conditional Rendering 
// if Else Block in React 
/*import React, { Component} from 'react'
class ConditionalRender  extends Component {
    state = {  
        ISAuthenticated :false
    }
     render() { 
if(this.state.ISAuthenticated){
      return(
           <h1> wel come to Pinki</h1>
      )}else{
      return (
            <h1> welcome to Guest</h1>
         )
      }
            //  <Fragment>
                // <h1> Conditional Rendering </h1>
            // </Fragment>*/

/*}
    // render() {
        // retrun (
        // <Fragment>
            // {this.state.ISAuthenticated ? 'wlcome to Pinki' : 'welcome to guest'}
        // </Fragment>
        // )
    // }
}*/
import React, { Component, Fragment } from 'react';
class Navbar extends Component {
    state = {
        IsLoggin: true
    }
    render() {
        return (
            <Fragment>
                <ul className="navbar-nav ml-auto">
                    {
                        this.state.isLoggedIn === true ? <Fragment>

                            <li className="nav-item">
                                <a className="nav-link" href="/logout">logout</a>
                            </li>
                            </Fragment>:<Fragment>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">login</a>

                            </li>
                        </Fragment>

                    }
                </ul>

            </Fragment>
        );
    }
}

export default Navbar;
