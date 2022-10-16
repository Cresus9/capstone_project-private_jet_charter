import React from 'react'
import './SignIn.css'

export default function SignIn({signInUpdate,submitsigInUpdate,signInData}) {
  return (
    <div>
      <form onSubmit={(e) =>submitsigInUpdate(e)}  className='sigup_form'>
        <span className='signup_form_input'>
            <input 
              name='email'
              placeholder=''
              value={signInData.email}
              onChange={(e)=>signInUpdate(e)}
            />
            <input 
              name='password'
              placeholder=''
              value={signInData.password}
              onChange={(e)=>signInUpdate(e)}
            />
          <button>Submit</button>
        </span>
      </form>
    </div>
  )
}
