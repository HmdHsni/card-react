import React from 'react';
import {isLogin} from './../Utils';
function Dashboard(){
   let isUserLogin = isLogin("Reza");
    console.log(isUserLogin);
    return(
        <div> welcome to youre Dashboard</div>    
    )
}
export default Dashboard;