import React from 'react';
import Header from "./components/Header";
import {Routes,Route,useRoutes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses';
import MainCourse from './components/MainCourse';
import About from './components/About';
import routes from './components/routes';
function App() {
  let router=useRoutes(routes)
  return (
    <>
    <Header/>
    {router}
    {/* <Routes>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/course/:courseID' element={<MainCourse/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/about/*' element={<About/>}>
            <Route path="setting" element={<p style={{textAlign:"center"}}> this is setting</p>}></Route>
            <Route path="dashboard" element={<p style={{textAlign:"center"}}> this is dashboard</p>}></Route>
      </Route>
    </Routes> */}
    </>
  );
}

export default App;
