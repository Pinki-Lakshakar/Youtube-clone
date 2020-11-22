import React, { Component,Fragment } from 'react';
import YoutubeHeader from './Component/YoutubeHeader/Header';
import axios from "axios";
import api,{baseParams} from "./Services/Api";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos:[],
     };
  }
  onTermSubmit = async term =>{
    /*console.log(term);*/
let response=await api.get("/search",{
  params:{
  q:term,
  ...baseParams,// search Componenet we are using q term 
  

},
  });
  this.setState({videos:response.data.item});
  /*console.log(response)*/
};
render(){
    return (
      <Fragment>
       <header onTermSubmit={this.onTermSubmit}> 
        <YoutubeHeader/>
       </header>


      </Fragment>
      );
  }

}

 
export default App;
