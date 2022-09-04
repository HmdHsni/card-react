import React, { useState } from "react";
import CoursesData from "../CoursesData";
import Course from './Course'

function Courses(){
    const [courses,setCourses]=useState(CoursesData)
    return(
<div style={{display:'flex' ,justifyContent:"space-around"}} className='mt-5'>
    {courses.map(course=>( <Course key={course.id} {...course}/>)
      
    )}
</div>
    )
}
export default Courses;