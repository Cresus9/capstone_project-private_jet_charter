
import './App.css';
import React,{ useEffect, useState} from 'react';
import NavBar from './Components/Welcome/NavBar';
import SignUp from './Components/Welcome/SignUp'
import SignIn from './Components/Welcome/SignIn'

function App() {
  //logIn user
  const signUpBody= {
    first_name : "",
    last_name: "",
    email: "",
    password: ""
  }
  const logInBody ={
    email:'',
    password:''
  }
  //State
  let [user, setUser]= useState({email:''})
  let [logInData, setLogInData]= useState({...logInBody})
  let [signUpData, setSignUpData]= useState({...signUpBody})

  useEffect(() =>{
    let token=localStorage.getItem('token')
    if (token && !user.email){
      fetch ("http://localhost:3000/me",{
        header: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then (resp =>resp.json())
      .then (data => {
        if (data.user){
          setUser(data.user)
        }
      })
    }
  }, [])

  //user signIn info update
  const signInUpdate = (e) =>{
    setLogInData({
      ...logInData,
      [e.target.value] : e.target.value
    })
  }
  const submitlogInUpdate =(e) =>{
    e.preventDefault()
    fetch ('http://localhost:3000/login',{
      method: 'POST',
      header:{
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(logInData)
    })
    .then(resp => resp.json)
    .then (data =>{
      setUser(data.user)
      localStorage.setItem('token', data.token)
    })

  }

  //SignOut user
  
  const logOut = () =>{
    setUser({email:''})
    localStorage.removeItem('token')
  }


  //user enters sign up info
  const signUpUpdate = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    })
  }

  // sign up new user
  const submitsigUpUpdate = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data.user)
      localStorage.setItem('token', data.token)
    })
    .catch(err => console.log(err))
  }

  





  return (
    <div className="App">
      <SignUp signUpData={signUpData} signUpUpdate={signUpUpdate} submitsigUpUpdate={submitsigUpUpdate} signUpBody={signUpBody}/>
      <SignIn signInUpdate={signInUpdate} submitsigInUpdate={submitlogInUpdate} signInData={logInData}/>
     <NavBar />
    </div>
  );
}

export default App;
