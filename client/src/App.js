
import './App.css';
import React,{ useEffect, useState} from 'react';
import Profil from './Components/Rendering/User/Profil'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import NavBar from './Components/Welcome/NavBar';
import Home from './Components/Welcome/Home';
import About from './Components/Welcome/About';


function App() {
  //State
  let [user, setUser]= useState({email:''})
  const [page, setPage]= useState("/")

//   function getCurrentPage(){
//     switch(page){
//       case "/":
//         return <Home />
//       case "/Profil":
//         return <Profil user={user} setUser={setUser} />
//       case "/About":
//         return <About />
    
//     default:
//       return <h1> 404 not found</h1>
//   }
// }

  

  useEffect(() =>{
    let token=localStorage.getItem('token')
    if (token && !user.email){
      fetch ("/profil",{
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

  


  //user signIn 
  //SignOut user
  
  const logOut = () =>{
    setUser({email:''})
    localStorage.removeItem('token')
  }


  // //user enters sign up info
  // const signUpUpdate = (e) => {
  //   setSignUpData({
  //     ...signUpData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // // sign up new user
  // const submitsigUpUpdate = (e) => {
  //   e.preventDefault()
  //   fetch('/signup', {
  //     method: 'POST',
  //     body: JSON.stringify(signUpData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setUser(data.user)
  //     localStorage.setItem('token', data.token)
  //   })
  //   .catch(err => console.log(err))
  // }

  
return (
    <div className="App">
      <p>Hi</p>
      <Home />
      <NavBar />
      <NavBar onLogOut={logOut} onLogin={setUser}/>
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profil">
          <Profil user={user} setUser={setUser}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
