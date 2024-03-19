

//================================== [Practice] New account registration form =============================================


// // THE CASE 1:
// import React, {useState}  from 'react';

// const SignUpForm =()=> {
//     const [form, setForm ] = useState({
//         yourName:"",
//         yourEmail:"",
//         yourPassword:"",
//         confirmYourPassword:""

//     })

//     const handleChange=(event) => {
//         const {name, value} = event.target
//         setForm({
//             ...form,
//             [name]: value
//         })
//     }

//     const submitForm=(e) => {
//         e.preventDefault();
//         if (form.yourName&&form.yourEmail && form.yourPassword && form.confirmYourPassword) {
//             alert("Congratulation! You sign up successfully")
//         } else {
//             alert("Please, fill out all the fields !!!")
//         }
//     }
//     return (
//         <form onSubmit={submitForm}>
//             <h1>Sign Up</h1>
//             <p>name, email, password, confirmPassword: {form.yourName} == {form.yourEmail} == {form.yourPassword} == {form.confirmYourPassword}</p>
//             <div>
//                 <p style={{margin:"0"}}>yourName: </p>
//                 <input type="text" name='yourName' value={form.yourName} onChange={handleChange}/>
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>yourEmail: </p>
//                 <input type="text" name='yourEmail' value={form.yourEmail} onChange={handleChange} />
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>yourPassword: </p>
//                 <input type="password" name='yourPassword' value={form.yourPassword} onChange={handleChange} />
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>Confirm yourPassword: </p>
//                 <input type="password" name='confirmYourPassword' value={form.confirmYourPassword} onChange={handleChange}/>
//             </div>
//             <button type='submit'>Submit</button>
//         </form>

//     )
// }
// export default SignUpForm;

// ======================================= [Practice] New account registration form ===============================


// THE CASE 2:

// import React, {useState}  from 'react';

// const SignUpForm =()=> {
//     const [form, setForm ] = useState({
//         yourName:"",
//         yourEmail:"",
//         yourPassword:"",
//     })
   

//     const handleChange=(event) => {
//         setForm({
//             ...form,
//             [event.target.name]: event.target.value
//         })  
//     }

//     const submitForm=(e) => {
//         e.preventDefault();
//         if (form.yourName&&form.yourEmail && form.yourPassword && form.confirmYourPassword) {
//             alert("Congratulation! You sign up successfully")
//         } else{
//             alert("Please, fill out all the fields !!!")
//         }
        

//     }
//     return (
//         <form onSubmit={submitForm}>
//             <h1>Sign Up</h1>
//             <p>name, email, password, confirmPassword: {form.yourName} == {form.yourEmail} == {form.yourPassword} == {form.confirmYourPassword}</p>
//             <div>
//                 <p style={{margin:"0"}}>yourName: </p>
//                 <input type="text" name='yourName' onChange={handleChange}/>
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>yourEmail: </p>
//                 <input  type="text" name='yourEmail'  onChange={handleChange} />
               
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>yourPassword: </p>
//                 <input type="password" name='yourPassword'  onChange={handleChange} />
//             </div>
//             <div>
//                 <p style={{margin:"0"}}>Confirm yourPassword: </p>
//                 <input type="password" name='confirmYourPassword'  onChange={handleChange}/>
//             </div>
//             <button type='submit'>Submit</button>

//         </form>

//     )
// }
// export default SignUpForm;

// =======================================   [PRACTICE] VALIDATE FORM SIGN UP     ===================================

// import './SignUpForm.css';

// import React, {useState} from "react";

// const Register =()=> {

//     const userNameRegex = /^[A-Za-z\s]{2,}$/;
//     const emailRegex =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
//     const passwordRegex = /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/;
//     const [user, setUser] = useState({
//         userName: '',
//         email:"",
//         password:"",
//         confirmPassword:"",
//     })
//     const [validateName, setValidateName] = useState(true);
//     const [validateEmail, setValidateEmail] = useState(true);
//     const [validatePassword, setValidatePassword] = useState(true);
//     const [errorConfirmPassword, seteErrorConfirmPassword] = useState("");
    
    
    


//     const handleChange =(event)=> {
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value,
//         })
        
        
//         //==== Validate userName===========
//         if(event.target.name ==="userName") {
//           const nameValue = userNameRegex.test(event.target.value)
//           setValidateName(nameValue);
//         }
       
//         // ======== validate Email ========
//         if(event.target.name ==="email") {
//           const emailValue = emailRegex.test(event.target.value)
//           setValidateEmail(emailValue);
//         }
//          // ======== validate password =========
//         if(event.target.name ==="password") {
//             const passwordValue = passwordRegex.test(event.target.value)
//             setValidatePassword(passwordValue);
//         }
//         // ======== validate confirm password ====
//         if(event.target.name === "confirmPassword") {
//             const value = event.target.value;
//             if(value !== user.password) {
//                 seteErrorConfirmPassword("Password do not match")
//             } else {
//                 seteErrorConfirmPassword("")
//             }
//         }

//     }

//     const submitForm=(e)=> {
//         e.preventDefault();
//         if(user.userName&&user.email&&user.password&&user.confirmPassword) {
//             alert("Register successfull")
//         } else{
//             alert("Please fill out all the fields")
//         }
//     }


//     return(
//         <form onSubmit={submitForm} className="formControl">
//             <h1>SIGN UP</h1>
//             <div className={`nameField ${user.userName&&!validateName &&"error-name"}`}>
//                 <p>userName</p>
//                 <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="Enter your name" />
//                 {!validateName&& <p style={{color:"red"}}>Name Error</p>}
//             </div>
//             <div className="emailField">
//                 <p style={{color: !validateEmail&& "red"}}>Email</p>
//                 <input style={{border: !validateEmail&& "2px solid red"}}  type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email"/>
//                 {!validateEmail&& <p style={{color:"red"}}>Email Error</p>}
//             </div>
//             <div className="passwordField">
//                 <p style={{color: !validatePassword&& "red"}}>Password</p>
//                 <input style={{border: !validatePassword&& "2px solid red"}} type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter password"/>
//                 {!validatePassword&& <p style={{color:"red"}}>Password Error</p>}
//             </div>
//             <div className="confirmPasswordField">
//                 <p>Confirm Password</p>
//                 <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Enter confirm password" />
//                 <p style={{color:"red"}}>{errorConfirmPassword}</p>
//             </div>
//             <button type="submit">Register</button>
//         </form>
        

//     )
// }
// export default Register;



//================================================= [PRACTICE] VALIDATE FORM SIGN UP (SPECIAL) This is answer of CodeGym ========================================================




// import './SignUpForm.css'

// import React, { useState } from "react";

// export default function Register() {
//   const MESSAGE_ERROR = {
//     username: "Username error",
//     email: "Email error",
//     password: "Password error",
//     confirmPassword: "Password must be the same"
//   };

//   const REGEX = {
//     username: /^[a-zA-Z]{2,}$/,
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
//   };

//   const [form, setForm] = useState({});

//   function handleChange(event) {
//     let error = "";
//     if (event.target.name === "password") {
//       if (form.confirmPassword && form.confirmPassword.value) {
//         error =
//           event.target.value === form.confirmPassword.value
//             ? ""
//             : MESSAGE_ERROR[event.target.name];
//       } else {
//         error = REGEX[event.target.name].test(event.target.value)
//           ? ""
//           : MESSAGE_ERROR[event.target.name];
//       }
//     } else if (event.target.name === "confirmPassword") {
//       error =
//         event.target.value === form.password.value
//           ? ""
//           : MESSAGE_ERROR[event.target.name];
//     } else {
//       error = REGEX[event.target.name].test(event.target.value)
//         ? ""
//         : MESSAGE_ERROR[event.target.name];
//     }
//     setForm({
//       ...form,
//       [event.target.name]: { value: event.target.value, error: error }
//     });
//   }

//   function handleSubmit() {
//     const isFilled =
//       form.username &&
//       form.username.value &&
//       form.email &&
//       form.email.value &&
//       form.password &&
//       form.password.value &&
//       form.confirmPassword &&
//       form.confirmPassword.value;
//     const isError =
//       isFilled &&
//       (form.username.error ||
//         form.email.error ||
//         form.password.error ||
//         form.confirmPassword.error);

//     alert(
//       isFilled && !isError
//         ? "Sign up successfully!!!"
//         : "Please fill out all the fields!!!"
//     );
//   }

//   return (
//     <div>
//       <h1>Sign up</h1>
//       <form>
//         <div
//           className={`custom-input ${form.username &&
//             form.username.error &&
//             "custom-input-error"}`}
//         >
//           <label>Username </label>
//           <input
//             name="username"
//             value={(form.username && form.username.value) || ""}
//             onChange={handleChange}
//           />
//           {form.username && form.username.error && (
//             <p className="error">{form.username.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.email &&
//             form.email.error &&
//             "custom-input-error"}`}
//         >
//           <label>Email </label>
//           <input
//             name="email"
//             value={(form.email && form.email.value) || ""}
//             onChange={handleChange}
//           />
//           {form.email && form.email.error && (
//             <p className="error">{form.email.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.password &&
//             form.password.error &&
//             "custom-input-error"}`}
//         >
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={(form.password && form.password.value) || ""}
//             onChange={handleChange}
//           />
//           {form.password && form.password.error && (
//             <p className="error">{form.password.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.confirmPassword &&
//             form.confirmPassword.error &&
//             "custom-input-error"}`}
//         >
//           <label>Confirm password </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={(form.confirmPassword && form.confirmPassword.value) || ""}
//             onChange={handleChange}
//           />
//           {form.confirmPassword && form.confirmPassword.error && (
//             <p className="error">{form.confirmPassword.error}</p>
//           )}
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }



//================================================= TRY AGAIN VALIDATE FORM SIGN UP (FLLOW CODOGYM)  ========================================================

// import './SignUpForm.css'

// import React, {useState} from "react";

// export default function Register() {

//     const ERROR_MESSAGE = {
//         username: "Username Error",
//         email: "Email Error",
//         password: "Password Error",
//         confirmPassword: "Password do not match"
//     }

//     const REGEX = {
//         username: /^[A-Za-z\s]{2,}$/,
//         email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/,
//         password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/,
//     }
//     const [user, setUser] =useState({})

//     const handleChange=(event)=> {
//         let error;
//         if(event.target.name ==="password") {
//             if(user.confirmPassword && user.confirmPassword.value) {
//                 error = event.target.value === user.confirmPassword.value?"":ERROR_MESSAGE[event.target.name];
//             } else {
//                 error = REGEX[event.target.name].test(event.target.value)?"":ERROR_MESSAGE[event.target.name];
//             }
//         } else if (event.target.name ==="confirmPassword") {
//             error = event.target.value === user.password.value? "": ERROR_MESSAGE[event.target.name];
//         } else {
//             error = REGEX[event.target.name].test(event.target.value)?"":ERROR_MESSAGE[event.target.name]
//         }

//         setUser(prevState=> ({
//             ...prevState,
//             [event.target.name]: {value: event.target.value, error: error}
//         }))

//     }

//     const submitForm=(e)=> {
//         e.preventDefault();
//         // if(user.username&&user.email&&user.password&&user.confirmPassword) {
//         //     alert("Register successfull")
//         // } else {
//         //     alert("Please fill out all fields")
//         // }

//         let isFields = 
//         (user.username&&user.username.value&&
//         user.email&&user.email.value&&
//         user.password&&user.password.value&&
//         user.confirmPassword&&user.confirmPassword.value)

//         let isError = isFields &&
//         (user.username.error||user.email.error||user.password.error||user.confirmPassword.error)
//         alert(
//             isFields && !isError ? "Register successfull": "Please fill out all the fields!!"
//         )
//     }


//     return (
//         <form className="form-control" onSubmit={submitForm}>
//             <div className={`name-input ${user.username&&user.username.error&&"name-error"}`}>
//                 <p>UserName</p>
//                 <input type="text" name="username" value={(user.username&&user.username.value) ||""} onChange={handleChange} />
//                 {(user.username&&user.username.error) && <p className='name-error-message'>{user.username.error}</p>}
//             </div>
//             <div className={`email-input ${user.email&&user.email.error&&"email-error"}`}>
//                 <p>Email</p>
//                 <input type="text" name="email" value={(user.email&&user.email.value) ||""} onChange={handleChange} />
//                 {(user.email&&user.email.error) && <p className='email-error-message'>{user.email.error}</p>}
//             </div>
//             <div className={`password-input ${user.password&&user.password.error&&"password-error"}`}>
//                 <p>Password</p>
//                 <input type="text" name="password" value={(user.password&&user.password.value) ||""} onChange={handleChange} />
//                 {(user.password&&user.password.error) && <p className='password-error-message'>{user.password.error}</p>}
//             </div>
//             <div className={`confrimPassword-input ${user.confirmPassword&&user.confirmPassword.error&&"confrimPassword-error"}`}>
//                 <p>Confirm Password</p>
//                 <input type="text" name="confirmPassword" value={(user.confirmPassword&&user.confirmPassword.value) ||""} onChange={handleChange} />
//                 {(user.confirmPassword&&user.confirmPassword.error) && <p className='confirmPassword-error-message'>{user.confirmPassword.error}</p>}
//             </div>

//             <button type="submit">Register</button>
//         </form>
//     )
// }


//================================================= TRY AGAIN VALIDATE FORM SIGN UP (FLLOW CODOGYM)  ========================================================

// import './SignUpForm.css';

// import React, {useState} from "react";

// export default function Register() {
    
//     const ERROR_MESSAGE = {
//         username:"Username Error",
//         email:"Email Error",
//         password:"Password Error",
//         confirmPassword:"Password do not match",
//     }
//     const REGEX = {
//         username: /^[a-zA-Z\s]{2,}$/,
//         email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/,
//         password:/^[a-zA-Z0-9!@#$%^&)(+=._-]{6,}$/,
//     }
//     const [user, setUser] = useState({})

//     const handleChange=(event)=> {
//         let error;
//         if(event.target.name === "password") {
//             if(user.confirmPassword&&user.confirmPassword.value) {
//                 error = event.target.value === user.confirmPassword.value?"": ERROR_MESSAGE[event.target.name];
//             } else {
//                 error = REGEX[event.target.name].test(event.target.value)?"": ERROR_MESSAGE[event.target.name];
//             }
//         } else if(event.target.name === "confirmPassword") {
//             error = event.target.value === user.password.value?"": ERROR_MESSAGE[event.target.name];
//         } else {
//             error = REGEX[event.target.name].test(event.target.value)?"" : ERROR_MESSAGE[event.target.name];
//         }

//         setUser(prevState=>({
//             ...prevState,
//             [event.target.name]: {value: event.target.value, error: error}
//         }))

//     }

//     const submitForm=(e)=> {
//         e.preventDefault();
//         let isFields = 
//         (user.username&&user.username.value&&
//         user.email&&user.email.value&&
//         user.password&&user.password.value&&
//         user.confirmPassword&&user.confirmPassword.value);

//         let isError = isFields&&(user.username.error||user.email.error||user.password.error||user.confirmPassword.error)
//         alert(isFields&&!isError?"Sign Up successfully": "Please fill out all the fields!!!")
//     }
   
//     return (
//         <form  className='form-control' onSubmit={submitForm}>
//             <div className={`name-input ${user.username&&user.username.error&&"name-error"}`}>
//                 <p>User Name:</p>
//                 <input type="text" name='username' value={(user.username&&user.username.value)||""} onChange={handleChange}/>
//                 {user.username&&user.username.error&& <p className='username-error-message'>{user.username.error}</p>}
//             </div>
//             <div className={`email-input ${user.email&&user.email.error&&'email-error'}`}>
//                 <p>Email:</p>
//                 <input type="text" name='email' value={(user.email&&user.email.value)||""} onChange={handleChange}/>
//                 {(user.email&&user.email.error)&& <p className='email-error-message'>{user.email.error}</p>}
//             </div>
//             <div className={`password-input ${user.password&&user.password.error&&'password-error'}`}>
//                 <p>Password:</p>
//                 <input type="text" name='password' value={(user.password&&user.password.value)||""} onChange={handleChange}/>
//                 {(user.password&&user.password.error)&& <p className='password-error-message'>{user.password.error}</p>}
//             </div>
//             <div className={`confirmPassword-input ${user.confirmPassword&&user.confirmPassword.error&&'confirmPassword-error'}`}>
//                 <p>Confirm Password</p>
//                 <input type="text" name='confirmPassword' value={(user.confirmPassword&&user.confirmPassword.value)||""} onChange={handleChange}/>
//                 {(user.confirmPassword&&user.confirmPassword.error)&& <p className='confirmPassword-error-message'>{user.confirmPassword.error}</p>}
//             </div>
//             <button type='submit'>Sign Up</button>
//         </form>
//     )

// }





// ==========================================  [PRACTICE] VALIDATE FORM LOGIN =================================================

// import './SignUpForm.css';

// import React, {useState} from "react";

// function Register(){
//     const ERROR_MESSAGE = {
//         email: "Email Error",
//         password: "Password Error"
//     }
    
//     const REGEX = {
//         email: /^(?=.*[A-Z])[a-zA-Z0-9+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+$/,
//         // password: /^(?=.*[@])[a-zA-Z0-9!@#$%^&+=._-]{6,}$/
//         password: /^(?=.*[a-zA-Z0-9!@#$%^&])[a-zA-Z0-9!@#$%^&+=._-]{6,}$/
//         //NOTE : (?=.*[a-zA-Z0-9!@#$%^&]) ?=.* cai dat it nhat mot ky tu dau tien phai o trong dau (). Neu khong se bao loi
//     }
    
//     const [user, setUser] = useState({});
    
//     const handleChange=(event)=> {
//         let error;
//         if(event.target.name === "email") {
//             error = REGEX[event.target.name].test(event.target.value)?"":ERROR_MESSAGE[event.target.name];
//         } else {
//             error = REGEX[event.target.name].test(event.target.value)?"":ERROR_MESSAGE[event.target.name];
//         }
//         setUser(prevState=> ({
//             ...prevState,
//             [event.target.name]:{value: event.target.value, error: error}
//         }))
//     }

//     const submitForm=(e)=> {
//         e.preventDefault();
//         let isFields = (user.email&&user.email.value&&user.password&&user.password.value);
//         let isError = isFields&&(user.email.error||user.password.error);
//         alert((isFields&&!isError)? "Log In is successfully" : "Please fill out all the fields!!!")
//     }
    
//     return (
//         <form className='form-control' onSubmit={submitForm}>
//             <h1>LOG IN</h1>
//             <div className={`email-input ${user.email&&user.email.error&&'email-error'}`}>
//                 <p>Email: </p>
//                 <input type="text" name='email' value={(user.email&&user.email.value)||""} onChange={handleChange} placeholder='Enter your email'/>
//                 {(user.email&&user.email.error)&& <p className='email-error-message'>{user.email.error}</p>}
//             </div>
//             <div className={`password-input ${user.password && user.password.error && 'password-error'}`}>
//                 <p>Password: </p>
//                 <input type="text" name='password'value={(user.password&&user.password.value)||""} onChange={handleChange} placeholder='Enter your password'/>
//                 {(user.password&&user.password.error)&& <p className='password-error-message'>{user.password.error}</p>}
//             </div>
//             <button type='submit'>Log In</button>
//         </form>

//     )
//     }
//     export default Register;



//========================================= VALIDATE FORM BY FORMIK (CODE BY CODEGYM) ================================

// import "./SignUpForm.css";

// import React, { useState } from "react";

// import { Formik } from "formik";

// export default function Register() {
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//   };

//   const [form, setForm] = useState({});

//   function handleChange(event) {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
    
//   }

//   function handleValidate() {
//     const errors = {};
//     if (!form.email) {
//       errors.email = "Required";
//     } else if (!REGEX.email.test(form.email)) {
//       errors.email = "Invalid email address";
//       console.log("code");
//     }
//     if (!form.password) {
//       errors.password = "Required";
//     }
//     return errors;
//   }

//   function handleSubmit() {
//     alert("Login in successfully!!!");
//   }

//   return (
//     <div>
//       <h1>Sign up</h1>
//       <Formik
//         initialValues={form}
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div
//               className={`custom-input ${errors.email ? "email-error" : ""}`}>
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email || ""}
//                 onChange={handleChange}
//               />
//               <p className="email-error-message">{errors.email}</p>
//             </div>
//             <div
//               className={`custom-input ${errors.password ? "password-error" : ""}`}>
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password || ""}
//                 onChange={handleChange}
//               />
//               <p className="password-error-message">{errors.password}</p>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }


// ================================================ VALIDATE FORMIK TRY AGAIN (GPT)=====================================

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from 'react';

// const validateEmail = (value) => {
//   let error;
//   if (!value) {
//     error = 'Email is required';
//   } else if (!/^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// };
// const onSubmit =(values, actions)=> {
//   console.log(values);
//   actions.setSubmitting(false)

// }

// const Register = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{email: ''}}
//         onSubmit={onSubmit}
//       >

//         <Form>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="text" name="email" validate={validateEmail} />
//             <ErrorMessage name="email" component="div" />
//           </div>
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Register;


// ================================================== YUP AND FORMIK TRY AGAIN (GPT)================================

// import "./SignUpForm.css"

// import * as Yup from 'yup';

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from 'react';

// const initialValues = {
//   name: '',
//   email: '',
// };

// const onSubmit = (values, actions) => {
//   console.log(values);
//   actions.setSubmitting(false);
// };

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
// });

// const Register = () => (
//   <div>
//     <h1>My Form</h1>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor="name">Name</label>
//           <Field type="text" id="name" name="name" />
//           <ErrorMessage name="name" component="div" />
//         </div>

//         <div className="email-error">
//           <label htmlFor="email">Email</label>
//           <Field type="email" id="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

// export default Register;


// =======================================  VALIDATE FORM BY FORMIK ===  TRY AGAIN (GPT)================================

// import "./SignUpForm.css";

// import { ErrorMessage, Field, Form, Formik } from "formik";

// import React from "react";

// function Register() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <Formik
//         initialValues ={{email: "", password: ""}}
//         validate = {values =>{
//           let error ={};
//           if(!values.email) {
//             error.email = "Email is required"
//           } else if(!/^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
//             error.email = "Invalid email eddress"
//           }
//           if(!values.password) {
//             error.password = " Password is required"
//           }
//           return error;
//         }}

//         onSubmit={(values, {setSubmitting}) => {
//           setTimeout(()=> {
//             alert("Log in successfully");
//             setSubmitting(false)
//           }, 1000)
//         }}
//       >

//         {({isSubmitting})=>(
//           <Form>
//             <div className="email-field">
//               <label htmlFor="email">Email:</label>
//               <Field type="text" name="email"/>
//               <ErrorMessage name="email" component='div'/>
//             </div>
//             <div className="password-field">
//               <label htmlFor="password">Password:</label>
//               <Field type="password" name="password"/>
//               <ErrorMessage name="password" component='div'/>
//             </div>
//             <button type="submit" disabled={isSubmitting}>Submit</button>
//           </Form>
//         )}

//       </Formik>

//     </div>
//   )
// }
// export default Register;


// =======================================  VALIDATE FORM BY FORMIK === TRY AGAIN BY ME================================

// import './SignUpForm.css';

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from "react";

// export default function Register() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{email: "", password:""}}
//         validate={values=> {
//           let error ={};
//           if(!values.email) {
//             error.email ="Email is required"
//           } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]+@[a-zA-Z\d]+\.[A-Za-z]+$/.test(values.email)){
//             error.email ="Invalid email address"
//           }

//           if(!values.password) {
//             error.password = "Password is required"
//           } else if (!/^(?=.*[a-zA-Z0-9!@#$%&*])(?=.*\d)[a-zA-Z0-9!@#$%^&*)(-_.+]{6,}$/.test(values.password)) {
//             error.password = "Invalid password"
//           }

//           return error;
//         }}


//         onSubmit={(values, {setSubmitting}) => {
          
//             alert("Login successfully");
//             setSubmitting(false)
         
//         }}
      
//       >

//         {({isSubmitting}) => (
//           <Form>
//             <div className='email-field'>
//               <label htmlFor='email'>Email:</label>
//               <Field type="text" name="email"/>
//               <ErrorMessage name='email' component='div'/>
//             </div>
//             <div className='password-field'>
//               <label htmlFor='password'>Password:</label>
//               <Field type="password" name="password"/>
//               <ErrorMessage name='password' component='div'/>
//             </div>
//             <button type='submit' disabled={isSubmitting}>Submit</button>
//           </Form>
//         )}
        
//       </Formik>
//     </div>
//   )
// }


//==========================================  [PRACTICE] CREATE CONTACT FORM ============================================================

// import "./SignUpForm.css";

// import React, {useState} from "react";

// export default function Register() {
//   const ERROR_MESSAGE ={
//     name: "Required",
//     email:"Required",
//     phone: "Required",

//   }
//   const REGEX ={
//     email: /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z\s]+$/
//   }
//   const [user, setUser] = useState({});
//   const handleChange=(event)=> {
//     let error;
//     if(event.target.name === "email") {
//       if(!event.target.value) {
//         error = ERROR_MESSAGE[event.target.name];
//       } else if(!REGEX[event.target.name].test(event.target.value)) {
//         error = "Invalid email address"
//       }
//     } else if(event.target.name ==="phone") {
//         if(!event.target.value) {
//           error = ERROR_MESSAGE[event.target.name]
//         } else if(!Number(event.target.value)) {
//           error = "Phone must be number!!!"
//         }
//     } else {
//       error = event.target.value?"": ERROR_MESSAGE[event.target.name]
//     }
//     setUser(prevState=> ({
//       ...prevState,
//       [event.target.name]: {value: event.target.value, error: error}

//     }))

//   }
//   const submitForm=(e)=> {
//     e.preventDefault();
//     let isFields = (
//       user.name&& user.name.value&&
//       user.email&&user.name.value&&
//       user.phone&&user.phone.value
//     );
//     let isError = isFields &&(user.name.error||user.email.error||user.phone.error);

//     alert(
//       isFields && !isError ? " Add Contact sucessfully" : "Add contact fail"

//     )

//   }

//   return (
//     <form className="form-control" onSubmit={submitForm}>
//       <h1>Contact form</h1>
//       <div className={`name-input ${user.name&&user.name.error&&"name-error"}`}>
//         <p>Name: </p>
//         <input type="text" name="name" value={(user.name&&user.name.value) || ""} onChange={handleChange}/>
//         {(user.name&&user.name.error)&& <p className="name-error-message">{user.name.error}</p>}
//       </div>
//       <div className={`email-input ${user.email&&user.email.error&&"email-error"}`}>
//         <p>Email: </p>
//         <input type="text" name="email" value={(user.email&&user.email.value) || ""} onChange={handleChange} />
//         {(user.email&&user.email.error)&& <p className="email-error-message">{user.email.error}</p>}

//       </div>
//       <div className={`phone-input ${user.phone&&user.phone.error&&"phone-error"}`}>
//         <p>Phone: </p>
//         <input type="text" name="phone" value={(user.phone&&user.phone.value) || ""} onChange={handleChange} />
//         {(user.phone&&user.phone.error)&& <p className="phone-error-message">{user.phone.error}</p>}

//       </div>
//       <div>
//         <p>Message: </p>
//         <textarea type='text'name="message" cols="25" rows="2" value={(user.message&&user.message.value) || ""} onChange={handleChange}/>
//       </div>
//       <button type="submit">Submit</button>

//     </form>

//   )
// }


//==========================================  [PRACTICE] CREATE CONTACT FORM  (OTHER WAY) ============================================================

// import './SignUpForm.css';

// import React , {useState} from "react";

// const Register =()=> {
//   const [user, setUser] = useState({
//     username:"",
//     email:"",
//     phone:"",
//     message:"",
    
//   })
//   const [error, setError] = useState({
//     name:"",
//     email:"",
//     phone:""
//   });
//   let emailRegex = /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/;


//   const handleChange=(event) => {
//     setUser(prevState=> ({
//       ...prevState,
//       [event.target.name]: event.target.value
//     }))
//     let emailError;
//     let phoneError;
//     let nameError;
//     if(event.target.name ==="email") {
//       if(!event.target.value) {
//         emailError = "Email is required"
//       } else {
//         emailError = emailRegex.test(event.target.value)?"":"Invalid email address"
        
//       }
//       setError({...error, email: emailError})
//     }
//     if(event.target.name === "phone") {
//       if(!event.target.value) {
//         phoneError = "Phone is required"
//       } else {
//         phoneError = Number(event.target.value) ?"": "Phone must be number" 
//       }
//       setError({...error, phone: phoneError})
//     }

//     if(event.target.name ==="username") {
//       nameError = event.target.value?"": "Name is required";
//       setError({...error, name: nameError})
//     }


    
    

//   }

//   const submitForm =(e)=> {
//     e.preventDefault();
//     let isFields = user.username&&user.email&&user.phone;
//     let isError = isFields&&(error.name || error.phone || error.email);
//     alert(
//       isFields&& !isError ? "Add contact successfully":"Add contact fail"
//     )

//   }


//   return (
//     <form className='form-control' onSubmit={submitForm} >
//       <h1>Contact form</h1>
//       <div className={`name-input ${error.name&&"name-error"}` }>
//         <p>Name: </p>
//         <input type="text" name='username' value={user.username} onChange={handleChange} placeholder='Enter your name'/>
//         {error.name&& <p className='name-error-message'>{error.name}</p>}
//       </div>
//       <div className={`email-input ${error.email&&"email-error"}` }>
//         <p>Email: </p>
//         <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your email' />
//         {error.email&&<p className='email-error-message'>{error.email}</p>}
//       </div>
//       <div className={`phone-input ${error.phone&&"phone-error"}` }>
//         <p>Phone: </p>
//         <input type="text" name='phone' value={user.phone} onChange={handleChange} placeholder='Enter your phone' />
//         {error.phone&& <p className='phone-error-message'>{error.phone}</p>}
//       </div>
//       <div>
//         <p>Message: </p>
//         <textarea cols={25} rows={2} type="text" name='message' value={user.message} onChange={handleChange} placeholder='Write somthing' />
//       </div>
//       <button type='submit'>Submit</button>
//     </form>

//   )
// }
// export default Register;


//==========================================  [PRACTICE] CREATE CONTACT FORM  (MAKE BY FORMIK) ============================================================

import './SignUpForm.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from "react";

const Register=()=> {
  return (
    <div className='container-control'>
      <h1>Contact form </h1>
      <Formik
        initialValues={{username:"", email:"", phone:"", message:""}}
        validate ={values=> {
          const error ={};
          if(!values.username) {
            error.username = "Name is required"
          }
          if(!values.email) {
            error.email ="Email is required"
          } else if(!/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+$/.test(values.email)){
            error.email = "Invalid email address!!!"
          }
          if(!values.phone) {
            error.phone ="Phone is required"
          } else if(!Number(values.phone)){
            error.phone = "Phone must be number"
          }
          // if(!values.message) {
          //   error.message ="Required"
          // }
          return error;

        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            alert("Add contact successfully!!!")
            setSubmitting(false);
          }, 400);
        }}
      
      >
        {({ isSubmitting }) =>(
          <Form>
            <div className="form-group">
              <label htmlFor='username'>Name:</label>
              <Field type="text" name="username" className="form-control"/>
              <ErrorMessage name='username' component="div" className='name-error'/>
            </div>
            <div className="form-group">
              <label htmlFor='email'>Email:</label>
              <Field type="text" name="email" className="form-control"/>
              <ErrorMessage name='email' component="div" className='email-error'/>
            </div>
            <div className="form-group">
              <label htmlFor='phone'>Phone:</label>
              <Field type="text" name="phone" className="form-control"/>
              <ErrorMessage name='phone' component="div" className='phone-error'/>
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <Field as="textarea" name="message" className="form-control"/>
              <ErrorMessage name='message' component="div"/>
            </div>
            <button type='submit' disabled={isSubmitting}>Submit</button>
          </Form>
        )}


      </Formik>
    </div>
  )
}
export default Register;




