import React,{ useState } from 'react'
import './SignIn.css'

export default function SignIn({onLogin}) {
  // const [email, setEmail] =useState('');
  // const [password, setPassword] =useState('');

  const logInBody ={
    email:'',
    password:''
  }
let [logInData, setLogInData]= useState({...logInBody})
  // info update
  const signInUpdate = (e) =>{
    setLogInData({
      ...logInData,
      [e.target.value] : e.target.value
    })
  }
  const submitlogInUpdate =(e) =>{
    e.preventDefault()
    fetch ("/login",{
      method: 'POST',
      header:{
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(logInData)
    })
    .then(resp => resp.json)
    .then (data =>{
      onLogin(data.user)
      localStorage.setItem('token', data.token)
    })

  }


  return (
    <div className='singin_div'>
      <form onSubmit={submitlogInUpdate}  className='signin_form'>
        <span className='signup_form_input'>
            <input 
              name='email'
              placeholder=''
              value={signInUpdate.email}
              onChange={(e)=>signInUpdate(e)}
            />
            <input 
              name='password'
              placeholder=''
              value={signInUpdate.password}
              onChange={(e)=>signInUpdate(e)}
            />
          <button>Submit</button>
        </span>
      </form>
    </div>
  )
}
