
import './App.css';
import React,{ useEffect, useState} from 'react';
import Profil from './Components/Rendering/User/Profil'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './Components/Welcome/NavBar';
import Home from './Components/Welcome/Home';
import About from './Components/Welcome/About';
import JetListings from './Components/Rendering/Jet/JetListings';
import SignIn from './Components/Welcome/SignIn';
import Login from './Components/Welcome/Login';


function App() {
  
  const navigate = useNavigate();


   const signUpBody= {
    first_name :"",
    last_name:"",
    email:"",
    phone_number:"",
    password_digest:""
  }
  const logInBody ={
    email:'',
    password:''
  }
const [logInData, setLogInData]= useState(logInBody)
  const [user, setUser]= useState({email:''})
  const [page, setPage]= useState("/")
  const [signUpData, setSignUpData]= useState({...signUpBody})



  useEffect(() =>{
    let token=localStorage.getItem('jwt')
    if (token && !user.email){
      fetch ("/profile",{
        header: {
          token: token,
          "Content-Type": "application/json",
        },
      })
      .then (resp =>resp.json())
      .then (data => {
        // console.log(data)
        if(data.user){
          setUser(data.user)
          console.log(data.user)}
      });
    }
  }, []);


useEffect(()=>{
  // console.log(navigate)
},[navigate])



  const signInUpdate = (e) =>{
    setLogInData({
      ...logInData,
      [e.target.name] : e.target.value
    })
  }


  const submitlogInUpdate =(e) =>{
    e.preventDefault();
    fetch("/login", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(logInData),
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.user);
      if(data["user"]){
        // console.log(data.user);
        localStorage.setItem("jwt", data.token);
        setUser(
          data.user
        );
        navigate('/profil')
      }else{
        alert(data["error"])
      }
    });
  }
  // console.log(setUser)



  //user signIn 
  //SignOut user
  
  // const logOut = () =>{
  //   setUser({email:''})
  //   localStorage.removeItem('token')
  // }

	function handleLogout() {
		localStorage.clear();
		setUser(null);
    navigate("/")
	}


  
return (
    <div className="App">
      < NavBar signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData} handleLogout={handleLogout} user={user} setUser={setUser}/>
      //  <Login signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData} user={user} setUser={setUser}/>
      <JetListings />
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profil" element={<Profil user={user} setUser={setUser} handleLogout={handleLogout}/>}/>
          <Route path="/" element={ <Home />}/>
      </Routes>
    </div>
  );
}

export default App;
