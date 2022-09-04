import React from 'react';
import {isLogin} from './../Utils';
import {Navigate} from 'react-router-dom';
function Panel(){
   let isUserLogin = isLogin("Reza");
    console.log(isUserLogin);
    return(
           <div> welcome to youre panel</div>
    )
}
export default Panel;