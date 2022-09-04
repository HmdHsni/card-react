import Courses from './Courses';
import MainCourse from './MainCourse';
import About from './About';
import Login from './Login';
import Panel from './Panel';
import Dashboard from './Dashboard';
import Form from './Form/Form';
import Users from './Users';
import PrivateRoute from './PrivateRoute';
let routes=[
    { path:'/courses', element:<Courses/>},
    { path:'/course/:courseID', element:<MainCourse/>},
    {path:'/about/*', element:<About/>,
          children:[{
            path:"setting", element:<p style={{textAlign:"center"}}> this is setting</p>,
            path:"dashboard", element:<p style={{textAlign:"center"}}> this is dashboard</p>,
          }]
        },
     { path:"/login", element:<Login/> },
     { path:"/form", element:<Form/>},
     {path:"/users" , element:<Users/>},
     { path:"/*", element:<PrivateRoute/>,children:[
                          {path:'panel' , element:<Panel/>},
                          {path:'dashboard' , element:<Dashboard/>},

     ]},
     
  ]
export default routes;