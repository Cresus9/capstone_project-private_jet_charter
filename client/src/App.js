
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import React,{ useEffect, useState} from 'react';
import Profil from './Components/Rendering/User/Profil'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './Components/Welcome/NavBar';
import Home from './Components/Welcome/Home';
import About from './Components/Welcome/About';
import JetListings from './Components/Rendering/Jet/JetListings';
import SignIn from './Components/Welcome/SignIn';
import Login from './Components/Welcome/Login';
import Footer from './Components/Welcome/Footer';
import SignUp from './Components/Welcome/SignUp';
import UserBookingHistory from './Components/Rendering/User/UserBookingHistory';
import UserBookings from './Components/Rendering/User/UserBookings'
import EditProfil from './Components/Rendering/User/EditProfil';


function App() {
  
  const navigate = useNavigate();
  const [content, setContent]=useState([])

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
  const [bookings, setBookings]=useState([])



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

  // const list=(content)=>{
  //   console.log(content)
  // }
  // list(content)
  // console.log(content)
  
// console.log(content)

const bookme=(e)=>{
  if (user===user){
    setUser(user)
    navigate('./profil')
  } else{ "Please sign in to proceed"}
}



  
return (
    <div className="App">
      {/* < NavBar signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData} handleLogout={handleLogout} user={user} setUser={setUser}/> */}
      {/* <Login signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate} logInData={logInData} user={user} setUser={setUser} listings={content}/> */}
      
      
      <Routes>
          <Route path='/jets' element={<JetListings jets={setContent}/>}/>
          <Route path='profil/profile/update' element={ <EditProfil user={user} setUser={setUser}/>}/>
          <Route path='/bookings/upcoming' element={ <UserBookings user={user} bookings={bookings} setBookings={setBookings} />}/>
          <Route path='/bookings/history' element={<UserBookingHistory user={user} bookings={bookings} setBookings={setBookings}/>}/>
          <Route path="/about" element={<About />} />
          {/* <Profil user={user} setUser={setUser} handleLogout={handleLogout} listings={content} /> */}
          <Route path="/profil" element={<Profil user={user} setUser={setUser} handleLogout={handleLogout} listings={content}  />}/>
          <Route path="/about" element={ <About />}/>
          <Route path="/sign in" element={ <SignIn logInData={logInData} signInUpdate={signInUpdate} submitlogInUpdate={submitlogInUpdate}/>}/>
          <Route path="/sign up" element={ <SignUp />}/>
          <Route path="/" element={ <Home />}/>
      </Routes>
      <JetListings jets={setContent} bookme={bookme}/>
      
      <Footer />
    </div>
  );
}

export default App;
