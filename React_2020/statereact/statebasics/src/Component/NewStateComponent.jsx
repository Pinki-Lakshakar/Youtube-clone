import React, { Component, Fragment } from 'react';
class NewStateComponent extends Component {
    state = { 
        count:0,
        // username:"Pinki",
        // age:24,
        // company:"Capgemini",
        // salary:25000,
     };
     ChangeCounter =()=>{
         this.setState({count:this.state.count-1});
     };
     resetCounter =()=>{
        this.setState({count:0});
    };
    render() { 
        // console.log(this.state.company)
        return (
            <Fragment> 
                <div className="col-md-4 mx-auto">
                <h1 className="font-weight-bold text-uppercase text-center">
                {this.state.count}
                </h1>
                <div className="btn-group">
                <button className="btn btn-success" onClick={this.increaseCounter}>
                    Increase
                </button>  
                
                <button className="btn btn-danger" onClick={this.decreaseCounter}>
                    decrease
                </button>
                </div>
               
        </div>
        </Fragment>
         );
    }
}
 
export default  NewStateComponent;
