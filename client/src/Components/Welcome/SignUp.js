import React,{ useState } from 'react'
import './SignUp.css'

export default function SignUp({onLogin}) {
  // const [first_name, setFirst_name] =useState('');
  // const [last_name, setLast_name] =useState('');
  // const [email, setEmail] =useState('');
  // const [password, setPassword] =useState('');

  const signUpBody= {
    firstName :"",
    lastName:"",
    email:"",
    password:""
  }

  let [signUpData, setSignUpData]= useState({...signUpBody})


  //user enters sign up info
  const signUpUpdate = (e) => {
    const { name, value } = e.target;
      setSignUpData({ ...signUpData,
      [name]: value});
  }

  // sign up new user
  const submitsigUpUpdate = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/signup", {
      mode: "no-cors",
      method: 'POST',
      headers: {
        "Content-Type": "application/json" },
        body: JSON.stringify(signUpData),})
    .then(res => res.json())
    .then(data => {
      onLogin(data.user)
      localStorage.setItem('token', data.token)})
    .catch(err => console.log(err))
  }
  


  return (
    <div className='signup_div'>
      <form onSubmit={submitsigUpUpdate}  className='sigup_form'>
        <span className='signup_form_input'>
          <label> First Name:
            <input 
              type='text'
              name='firstName'
              placeholder='firstName'
              value={signUpData.firstName}
              onChange={signUpUpdate}
            />
            </label>
            <label> Last Name:
            <input
              type='text'
              name='lastName'
              placeholder='lastName'
              value={signUpData.lastName}
              onChange={signUpUpdate}
            />
            </label>
            <label> Email:
            <input 
              name='email'
              placeholder='email'
              value={signUpData.email}
              onChange={signUpUpdate}
            />
            </label>
            <label> Password:
            <input
              name='password'
              placeholder='password'
              value={signUpData.password}
              onChange={signUpUpdate}
            />
            </label>
            {/* <input 
              name='confirmPassword'
              placeholder=''
              // value={}
            /> */}
          <button type="submit">Submit</button>
        </span>
      </form>
    </div>
  )
}
