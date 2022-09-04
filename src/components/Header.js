import React from 'react';
import {Link} from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap';
function Header(){
    return(
       <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactProject</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginLeft:30}}>Home</Link>
            <Link to="/courses" style={{marginLeft:30}}>Courses</Link>
            <Link to="/about" style={{marginLeft:30}}>About</Link>
            <Link to="/login" style={{marginLeft:30}}>Login</Link>
            <Link to="/panel" style={{marginLeft:30}}>Panel</Link>
            <Link to="/dashboard" style={{marginLeft:30}}>Dashboard</Link>
            <Link to="/form" style={{marginLeft:30}}>Sabtnam</Link>
            <Link to="/users" style={{marginLeft:30}}>showUsers</Link>

          </Nav>
        </Container>
      </Navbar>
      </>
    )
}
export default Header