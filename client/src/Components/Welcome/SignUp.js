import React from 'react'
import './SignUp.css'

export default function SignUp({signUpData, signUpUpdate, submitsigUpUpdate, signUpBody}) {
  return (
    <div>
      <form onSubmit={(e) =>submitsigUpUpdate(e)}  className='sigup_form'>
        <span className='signup_form_input'>
            <input 
              name='first_name'
              placeholder=''
              value={signUpBody.first_name}
              onChange={(e)=>signUpUpdate(e)}
            />
            <input 
              name='first_name'
              placeholder=''
              value={signUpBody.last_name}
              onChange={(e)=>signUpUpdate(e)}
            />
            <input 
              name='email'
              placeholder=''
              value={signUpBody.email}
              onChange={(e)=>signUpUpdate(e)}
            />
            <input 
              name='password'
              placeholder=''
              value={signUpBody.password}
              onChange={(e)=>signUpUpdate(e)}
            />
            {/* <input 
              name='confirmPassword'
              placeholder=''
              // value={}
            /> */}
          <button>Submit</button>
        </span>
      </form>
    </div>
  )
}
