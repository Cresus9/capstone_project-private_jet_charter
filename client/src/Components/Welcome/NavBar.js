import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar({onLogOut, user, signUpData, signUpUpdate, submitlogInUpdate, submitHandler,logInData,signInUpdate, handleLogout, setUser}) {
  // const [displaySignup, setDisplaySignup] = useState(true)
  // const [displaySignin, setDisplaySignin] =useState(true)

  // const clickHandler = () =>{
  //   setDisplaySignup((displaySignup) =>!displaySignup)
  // }
  // const clickHandlersignin = () =>{
  //   setDisplaySignin((displaySignin) =>!displaySignin)
  // }
  // const renderSingnup = displaySignup?<button onClick={clickHandler}>Sign Up</button>:<SignUp onClick={clickHandler} signUpData={signUpData} signUpUpdate={signUpUpdate} submitHandler={submitHandler}/> 
  // const renderSingnin = displaySignin?<button onClick={clickHandlersignin}>Sign In</button>:<SignIn onClick={clickHandlersignin} onLogin={onLogin} user={user}/> 



  // function handleLogout() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogOut());
  // }

 
  return (
    <>
    <header className='header'>
      <div>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/about">About</Link>
      </div>
      <nav className='navbar'>
        <ul>
        <Link className='links' to="/sign in">Sign In</Link>
        <Link className='links' to="/sign up">Sign Up</Link>
        </ul>
      </nav>
    </header>
    </>

	)
}