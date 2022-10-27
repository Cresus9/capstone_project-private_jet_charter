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





//   <section class="vh-xxl-100">
// 	<div class="container h-100 d-flex px-0 px-sm-4">
// 		<div class="row justify-content-center align-items-center m-auto">
// 			<div class="col-12">
// 				<div class="bg-mode shadow rounded-3 overflow-hidden">
// 					<div class="row g-0">
// 						{/* <!-- Vector Image --> */}
// 						<div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
// 							<div class="p-3 p-lg-5">
// 								<img src="./assets/images/element/signin.svg" alt=""/>
// 							</div>
// 							{/* <!-- Divider --> */}
// 							<div class="vr opacity-1 d-none d-lg-block"></div>
// 						</div>
		
// 						{/* <!-- Information --> */}
// 						<div class="col-lg-6 order-1">
// 							<div class="p-4 p-sm-7">
// 								{/* <!-- Logo --> */}
// 								<a href="index.html">
// 									<img class="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo"/>
// 								</a>
// 								{/* <!-- Title --> */}
// 								<h1 class="mb-2 h3">Welcome back</h1>
// 								<p class="mb-0">New here?<a href="sign-up.html"> Create an account</a></p>
		
// 								{/* <!-- Form START --> */}
// 								<form  onSubmit={submitlogInUpdate} class="mt-4 text-start">
// 									{/* <!-- Email --> */}
// 									<div class="mb-3">
// 										<label class="form-label">Enter email</label>
// 										<input name="email" class="form-control"
//                     value={logInData.email}
//                     onChange={signInUpdate}/>
// 									</div>
// 									{/* <!-- Password --> */}
// 									<div class="mb-3 position-relative">
// 										<label class="form-label">Enter password</label>
// 										<input class="form-control fakepassword" name="password" id="psw-input"
//                     value={logInData.password}
//                     onChange={signInUpdate}
//                     />
// 										<span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
// 											<i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
// 										</span>
// 									</div>
// 									{/* <!-- Remember me --> */}
// 									{/* <div class="mb-3 d-sm-flex justify-content-between">
// 										<div>
// 											<input type="checkbox" class="form-check-input" id="rememberCheck"/>
// 											<label class="form-check-label" for="rememberCheck">Remember me?</label>
// 										</div>
// 										<a href="forgot-password.html">Forgot password?</a>
// 									</div> */}
// 									{/* <!-- Button --> */}
// 									<div><button type="submit" class="btn btn-primary w-100 mb-0">Login</button></div>
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





    // <div class='singin_div'>
    //   <form onSubmit={submitlogInUpdate}  class='signin_form'>
    //     <span class='signup_form_input'>
    //         <input 
    //           name='email'
    //           placeholder='email'
    //           value={logInData.email}
    //           onChange={signInUpdate}
    //         />
    //         <input 
    //           name='password'
    //           placeholder='Passord'
    //           value={logInData.password}
    //           onChange={signInUpdate}
    //         />
    //       <button>Submit</button>
    //     </span>
    //   </form>
    // </div>

