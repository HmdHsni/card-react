import React from 'react';
import {isLogin} from './../Utils';
import {Navigate , Outlet} from 'react-router-dom';

function PrivateRoute({children}){
   let isUserLogin = isLogin("Ali");
    console.log(isUserLogin);
    return(
       <div>
            {  
            isUserLogin ? (<Outlet/>)
             :(<Navigate to="/login"/>)
            }
       </div>     
    )
}
export default PrivateRoute;