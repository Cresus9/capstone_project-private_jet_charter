import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import Login from './Login'
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar({onLogOut, onLogin, user,signUpData, signUpUpdate,submitlogInUpdate, submitHandler,logInData,signInUpdate, handleLogout}) {
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
    
    <div className='navbar'>
     <Link to="/"><p>Home</p></Link>
		 <Link to="/about"><p>About</p></Link>
    <Login signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData}/>
      {/* {renderSingnup} */}
      {/* {renderSingnin} */}
      {/* <button onClick={handleLogout}>Logout</button>
    */}
      
    </div>
  )
}
