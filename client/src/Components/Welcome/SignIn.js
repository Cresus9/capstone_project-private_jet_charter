import React,{ useState } from 'react'
import './SignIn.css'

export default function SignIn({logInData,signInUpdate, submitlogInUpdate}) {
  // const [email, setEmail] =useState('');
  // const [password, setPassword] =useState('');

  
  return (
    <div className='singin_div'>
      <form onSubmit={submitlogInUpdate}  className='signin_form'>
        <span className='signup_form_input'>
            <input 
              name='email'
              placeholder='email'
              value={logInData.email}
              onChange={signInUpdate}
            />
            <input 
              name='password'
              placeholder='Passord'
              value={logInData.password}
              onChange={signInUpdate}
            />
          <button>Submit</button>
        </span>
      </form>
    </div>
  )
}
