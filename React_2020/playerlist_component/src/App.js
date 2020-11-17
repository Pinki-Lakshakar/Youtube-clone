import React from 'react';
import ConditionalRender from "./Components/ConditionalRenderComponent";
//import PlayerList from "./Components/PlayerList";

//import './App.css';

function App(){
  return (
    <div className="container my-4">
      {/* <PlayerList/> */}
      <ConditionalRender/>
    </div>
  );
}



export default App;
