import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Course(props){
    return(
       <Link to={`/course/${props.id}`}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">add to card </Button>
      </Card.Body>
    </Card></Link>
    )
}
export default Course;