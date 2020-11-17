import  React,{Component,Fragment} from "react";


class StateExampleComponent extends Component{
    state={
        username:"Pinki",
        age: 24,
        Company: "Capgemini",
        salary: 30000,
    };
    render(){
        console.log(this.state.Company);
        return (
            <Fragment>
        <h1>{this.state.username}</h1>
                 <p>{this.state.age}</p>
            </Fragment>
        );
    }
}
export default StateExampleComponent;