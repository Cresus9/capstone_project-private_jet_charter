import React, { useState } from 'react'
import './NavBar.css'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function NavBar({onLogOut}, onLogin={onLogin}) {
  const [displaySignup, setDisplaySignup] = useState(true)
  const [displaySignin, setDisplaySignin] =useState(true)

  const clickHandler = () =>{
    setDisplaySignup((displaySignup) =>!displaySignup)
  }
  const clickHandlersignin = () =>{
    setDisplaySignin((displaySignin) =>!displaySignin)
  }
  const renderSingnup = displaySignup?<button onClick={clickHandler}>Sign Up</button>:<SignUp onClick={clickHandler} onLogin={onLogin}/> 
  const renderSingnin = displaySignin?<button onClick={clickHandlersignin}>Sign In</button>:<SignIn onClick={clickHandlersignin} onLogin={onLogin}/> 



  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogOut());
  }

 
  return (
    
    <div>
      {renderSingnup}
      {renderSingnin}
      <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
      
    </div>
  )
}
