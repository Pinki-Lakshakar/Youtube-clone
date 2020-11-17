  
import React, { Component, Fragment } from "react";
import { Route, Switch} from "react-router-dom";
// import { ToastContainer } from "react-toastify";


// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import HeaderComponent from "./HotstarComponent/HeaderComponent/Header";


import Login from "./HotstarComponent/AuthComponent/Login";
import Register from "./HotstarComponent/AuthComponent/Register";
// import HeaderComponent from "./HotstarComponent/HeaderComponent/Header";

// import Slider from "./HotstarComponent/SliderMenu/Slider";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <header>
    <HeaderComponent/>
    
          {/* <LifeCycel/> */}
        </header>
        <main>
          {/* <ToastContainer/> */}
          <Switch>
           <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        {/* <Slider/> */}
      </Fragment>
    );
  }
}

export default App;