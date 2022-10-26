import React,{ useState } from 'react'
import SignIn from './SignIn'
import { useNavigate } from "react-router-dom";
import './SignIn.css'



export default function SignUp({onLogin}) {

  const navigate = useNavigate();
  const [user, setUser]=useState({email:""})
  const [first_name,setFirst_name]=useState("")
  const [last_name,setLast_name]=useState("")
  const [email, setEmail] = useState("");
  const [phone_number,setPhone_number]=useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        password
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          setUser(data.user)
          localStorage.setItem('token', data.token)
        });
        // navigate('/profil')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <section className='signup_div'>
      <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='signup_form'>
            <label>First Name</label>
            <input
              className='sign'
              type="text"
              name="First_name"
              placeholder="First Name"
              value={first_name}
              onChange={(e)=>setFirst_name(e.target.value)}
            />

            <label>Last Name</label>
            <input
              className='sign'
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={last_name}
              onChange={(e)=>setLast_name(e.target.value)}
            />

            <label >Email</label>
            <input
              className='sign'
              name="email"
              placeholder="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label >Phone</label>
            <input
              className='sign'
              name="Phone_number"
              placeholder="Phone"
              value={phone_number}
              onChange={(e)=>setPhone_number(e.target.value)}
            />
            <label >Password</label>
            <input
              className='sign'
              type="password"
              placeholder="Password"
              name="password_digest"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
        
            <button className='signbtn' type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            {errors.map((err) => (
              <error key={err}>{err}</error>
            ))}
        </form>
    </section>



  )
}
  



 
//   return (
//   <div>
    
//   <section class="vh-xxl-100">
// 	<div class="container h-100 d-flex px-0 px-sm-4">
// 		<div class="row justify-content-center align-items-center m-auto">
// 			<div class="col-12">
// 				<div class="bg-mode shadow rounded-3 overflow-hidden">
// 					<div class="row g-0">
// 						{/* <!-- Vector Image --> */}
// 						<div class="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
// 							<div class="p-3 p-lg-5">
// 								<img src="assets/images/element/signin.svg" alt=""/>
// 							</div>
// 							{/* <!-- Divider --> */}
// 							<div class="vr opacity-1 d-none d-lg-block"></div>
// 						</div>
		
// 						{/* <!-- Information --> */}
// 						<div class="col-lg-6 order-1">
// 							<div class="p-4 p-sm-6">
// 								{/* <!-- Logo --> */}
// 								<a href="index.html">
// 									<img class="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo"/>
// 								</a>
// 								{/* <!-- Title --> */}
// 								<h1 class="mb-2 h3">Create new account</h1>
// 								<p class="mb-0">Already a member?<a href="sign-in.html"> Log in</a></p>
		
// 								{/* <!-- Form START --> */}
// 								<form onSubmit={handleSubmit} class="mt-4 text-start">
// 									{/* <!-- Email --> */}
// 									<div class="mb-3">
// 										<label class="form-label">First Name</label>
// 										<input name='first_name' class="form-control"
//                      value={first_name}
//                      onChange={(e)=>setFirst_name(e.target.value)}
//                      />
// 									</div>

//                   {/* <!-- Email --> */}
// 									<div class="mb-3">
// 										<label class="form-label">Last Name</label>
// 										<input name='last_name' class="form-control"
//                     value={last_name}
//                     onChange={(e)=>setLast_name(e.target.value)}/>
// 									</div>

//                   <div class="mb-3">
// 										<label class="form-label">Phone</label>
// 										<input name='phone_number' class="form-control"
//                     value={phone_number}
//                     onChange={(e)=>setPhone_number(e.target.value)}/>
// 									</div>
                  
//                   {/* <!-- Email --> */}
// 									<div class="mb-3">
// 										<label class="form-label">Enter email</label>
// 										<input name='email' class="form-control"
//                     value={email}
//                     onChange={(e)=>setEmail(e.target.value)}/>
// 									</div>
// 									{/* <!-- Password --> */}
// 									<div class="mb-3 position-relative">
// 										<label class="form-label">Enter password</label>
// 										<input class="form-control fakepassword" name="password" id="psw-input"
//                      value={password}
//                      onChange={(e)=>setPassword(e.target.value)}
//                      />
// 										<span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
// 											<i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
// 										</span>
// 									</div>
// 									<button type="submit" class="btn btn-primary w-100 mb-0">{isLoading ? "Loading..." : "Sign Up"}</button>
//                   {errors.map((err) => (
//                     <error key={err}>{err}</error>
//                   ))}
// 								</form>
// 								{/* <!-- Form END --> */}
// 							</div>		
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
// </div>
//   )}
  


  //   <div className='signup_div'>
    // <form onSubmit={handleSubmit} className='signup_form'>
  //       <label>First Name</label>
  //       <input
  //         type="text"
  //         name="First_name"
  //         placeholder="First Name"
  //         value={first_name}
  //         onChange={(e)=>setFirst_name(e.target.value)}
  //       />

  //       <label>Last Name</label>
  //       <input
  //         type="text"
  //         name="last_name"
  //         placeholder="Last Name"
          // value={last_name}
          // onChange={(e)=>setLast_name(e.target.value)}
  //       />

  //       <label >Email</label>
  //       <input
  //         name="email"
  //         placeholder="email"
          // value={email}
          // onChange={(e)=>setEmail(e.target.value)}
  //       />
  //       <label >Phone</label>
  //       <input
  //         name="Phone_number"
  //         placeholder="Phone"
          // value={phone_number}
          // onChange={(e)=>setPhone_number(e.target.value)}
  //       />
  //       <label >Password</label>
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         name="password_digest"
          // value={password}
          // onChange={(e)=>setPassword(e.target.value)}
  //       />
  //       {/* <label >Password Confirmation</label>
  //       <input
  //         type="password"
  //         value={passwordConfirmation}
  //         onChange={(e) => setPasswordConfirmation(e.target.value)}
  //         autoComplete="current-password"
  //       /> */}
     
        // <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        // {/* {errors.map((err) => (
        //   <error key={err}>{err}</error>
        // ))} */}
  //   </form>
  //   </div>
  // );


