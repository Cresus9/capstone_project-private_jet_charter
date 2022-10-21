import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Login({onLogin,logInData,signInUpdate,submitlogInUpdate}) {
  const [displaySignup, setDisplaySignup] = useState(true)
  const [displaySignin, setDisplaySignin] =useState(true)

  const clickHandler = () =>{
    setDisplaySignup((displaySignup) =>!displaySignup)
  }
  const clickHandlersignin = () =>{
    setDisplaySignin((displaySignin) =>!displaySignin)
  }
  const renderSingnup = displaySignup?<button onClick={clickHandler}>Sign Up</button>:<SignUp /> 
  const renderSingnin = displaySignin?<button onClick={clickHandlersignin}>Sign In</button>:<SignIn signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData}/> 

  return (
    <div>
        {renderSingnup}
        {renderSingnin}

    </div>
  )
}
