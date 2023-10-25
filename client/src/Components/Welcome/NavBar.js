import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar({onLogOut, user, signUpData, signUpUpdate, submitlogInUpdate, submitHandler,logInData,signInUpdate, handleLogout, setUser}) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Jetsetter Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/sign in">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/sign up">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>

	)
}