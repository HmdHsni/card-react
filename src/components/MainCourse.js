
import React from "react";
import {useParams} from 'react-router-dom';
import CoursesData from './../CoursesData';
import {Container,Row,Col} from 'react-bootstrap';
function MainCourse(){
    let params=useParams()
    let courseData=CoursesData.find(course=>
        course.id==params.courseID
    )
    console.log(courseData);
    return(
        <Container className="mt-5">
            <Row>
                <Col>
               <img src={courseData.img} style={{width:"80%" , height:"300px"}}/>
                </Col>
                <Col>
                <h2>{courseData.title}</h2>
                <p>{courseData.description}</p>
                </Col>
            </Row>
        </Container>

    )
}
export default MainCourse;