/*import React from 'react'

const Header= () => {
    const state = {
        name:"Pinki",
        age:24,
        conpany:"Startup",
    };
    return (
        <div>

            <h1>Jspiders</h1>

        </div>
    );
};

export default Header;*/
/*------------------------------------------------------------------------*/
import  React ,{ useState } from "react";
const Header = () =>{
    let {user ,setUser}=useState("Shashi");
    return (
        <div>
<h1> Qspiders</h1>
        </div>
    );
};
export default Header;


