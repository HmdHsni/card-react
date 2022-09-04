import React from 'react';
import {Link,Routes, Route} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
function About(){
    return(
        <>
        <p >welcome to About</p>
        <hr/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <Link to ="setting">Setting</Link>
        <Link to ="dashboard">Dashboard</Link>
        
        </div>
        <hr/>
        <Outlet/>
        </>
       
    )
}
export default About