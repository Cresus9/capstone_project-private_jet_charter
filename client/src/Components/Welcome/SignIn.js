import React,{ useState } from 'react'
import './SignUp.css'

export default function SignIn({logInData,signInUpdate, submitlogInUpdate}) {
  // const [email, setEmail] =useState('');
  // const [password, setPassword] =useState('');

  
  return (
	<div className='signup_div'>
    <h1>Sign In</h1>
      <form onSubmit={submitlogInUpdate}  className='signup_form'>
            <input className='sign'
              name='email'
              placeholder='email'
              value={logInData.email}
              onChange={signInUpdate}
            />
            <input 
              className='sign'
              name='password'
              placeholder='Passord'
              value={logInData.password}
              onChange={signInUpdate}
            />
          <button className='signbtn'>Sign In</button>
      </form>
    </div>

  )}
