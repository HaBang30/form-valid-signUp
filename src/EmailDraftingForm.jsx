// import './EmailDraftingForm.css';

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, {useState} from "react";

// const EmailDraftingForm=()=> {
//     const [userData, setUserData] = useState([]);
    
//     const handleSubmit =(values, {resetForm})=> {
//         const updateData = [...userData, values];
//         setUserData(updateData)
//         resetForm();
//         console.log(userData)

//     }
//     return (
//         <div className='container'>
//             <h1>Contact form </h1>
//             <Formik
//                 initialValues={{email:"", title:"", message:"", file:""}}
//                 validate={values => {
//                     let error ={};
//                     if (!values.email) {
//                         error.email = "Requirede"
//                     } else if (!/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/.test(values.email)){
//                         error.email = "Invalid email address"
//                     }

//                     if(!values.title) {
//                         error.title = "Required"
//                     }
//                     if(!values.message) {
//                         error.message = "Required"
//                     }
//                     return error;
                    
//                 }}

//                 onSubmit={handleSubmit}

//             >
//                 {({isSubmitting}) => (
//                     <Form>
//                         <div className='form-control-email'>
//                             <label htmlFor='email'>To: </label>
//                             <Field type='text' name='email'/>
//                             <ErrorMessage name='email' component="div"/>
//                         </div>
//                         <div className='form-control-title'>
//                             <label htmlFor='title'>Title:</label>
//                             <Field type='text' name='title'/>
//                             <ErrorMessage name='title' component="div"/>
//                         </div>
//                         <div className='form-control-message'>
//                             <label htmlFor='message'>Message</label>
//                             <Field as='textarea' name='message'/>
//                             <ErrorMessage name='message' component="div"/>
//                         </div>
//                         <div className='form-control-file'>
//                             <label htmlFor='file'>File:</label>
//                             <Field type='file' name='file' />
//                             <ErrorMessage name='file' component="div"/>
//                         </div>
//                         <button type='submit' disabled={isSubmitting}>Submit</button>

//                     </Form>
//                 )}

//             </Formik>
//         </div>

//     )
// }

// export default EmailDraftingForm;



// ===================================== EMAIL DRAFTING FORM (CHAT GPT) ======================================

//import React, { useState } from 'react';

// const EmailDraftingForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send selectedFiles to others
//     console.log("Sending files:", selectedFiles);
//     // Here you can write code to send files to a server or any other destination
//   };

//   return (
//     <div>
//       <h2>File Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" multiple onChange={handleFileChange} />
//         <button type="submit">Send Files</button>
//       </form>
//     </div>
//   );
// };

// export default EmailDraftingForm;

// ===================================== EMAIL DRAFTING FORM (CHAT GPT) ======================================

// import * as Yup from 'yup';

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from 'react';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   file: Yup.mixed().required('File is required'),
// });

// const handleSubmit = (values, { setSubmitting }) => {
//   // Assuming you have an API endpoint to send the file
//   const formData = new FormData();
//   formData.append('email', values.email);
//   formData.append('file', values.file);
//   console.log(formData)
//   if(formData) {
//     alert("Send successfully")
//   }
  

// //   try {
// //     const response = await fetch('YOUR_API_ENDPOINT', {
// //       method: 'POST',
// //       body: formData,
// //     });
// //     if (response.ok) {
// //       // File sent successfully
// //       console.log('File sent successfully');
// //     } else {
// //       // Handle error
// //       console.error('Failed to send file');
// //     }
// //   } catch (error) {
// //     console.error('Error:', error);
// //   }

//   setSubmitting(false);
// };

// const EmailDraftingForm = () => {
//   return (
//     <div>
//       <h1>File Upload Form</h1>
//       <Formik
//         initialValues={{
//           email: '',
//           file: null,
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//             </div>

//             <div>
//               <label htmlFor="file">File:</label>
//               <input
//                 id="file"
//                 name="file"
//                 type="file"
//                 onChange={(event) => {
//                   setFieldValue('file', event.currentTarget.files[0]);
//                 }}
//               />
//               <ErrorMessage name="file" component="div" />
//             </div>

//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default EmailDraftingForm;

// ===================================== EMAIL DRAFTING FORM (CHAT GPT) ======================================

// import * as Yup from 'yup';

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from 'react';

// const validationSchema = Yup.object().shape({
//   to: Yup.string()
//     .required('Required')
//     .matches(/^[a-zA-Z0-9+\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/, 'Invalid email address'),
//   title: Yup.string().required('Required'),
//   message: Yup.string().required('Required'),
// });

// const EmailDraftingForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     // Here you can perform submission logic, like sending data to backend
//     console.log(values)
//     alert('Sent successfully!!!');
//     resetForm();
//   };

//   return (
//     <div>
//       <h1>Form</h1>
//       <Formik
//         initialValues={{ to: '', title: '', message: '', file: null }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, handleChange, handleBlur, setFieldValue, errors, touched }) => (
//           <Form>
//             <div>
//               <label htmlFor="to">To:</label>
//               <Field
//                 type="text"
//                 id="to"
//                 name="to"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.to}
//               />
//               <ErrorMessage name="to" component="div" className="error" />
//             </div>
//             <div>
//               <label htmlFor="title">Title:</label>
//               <Field
//                 type="text"
//                 id="title"
//                 name="title"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.title}
//               />
//               <ErrorMessage name="title" component="div" className="error" />
//             </div>
//             <div>
//               <label htmlFor="message">Message:</label>
//               <Field
//                 as="textarea"
//                 id="message"
//                 name="message"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.message}
//               />
//               <ErrorMessage name="message" component="div" className="error" />
//             </div>
//             <div>
//               <label htmlFor="file">Upload file:</label>
//               <input
//                 id="file"
//                 name="file"
//                 type="file"
//                 onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}
//               />
//             </div>
//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default EmailDraftingForm;


// ===================================== EMAIL DRAFTING FORM (CHAT GPT) ======================================

// import './EmailDraftingForm.css';

// import * as Yup from 'yup';

// import { ErrorMessage, Field, Form, Formik } from 'formik';

// import React from "react";

// const validationSchema = Yup.object().shape({
//   to: Yup.string()
//     .required("Required")
//     .matches(/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email address!!!'),
//   title: Yup.string()
//     .required("Required")
//     .matches(/^[a-zA-Z]+$/, "Title must be a leter!!!"),
//   message: Yup.string().required("Required"),
// })

// const EmailDraftingForm=()=> {
//   const handleSubmit=(values, {resetForm})=> {
//     console.log(values);
//     resetForm();

//   }
//   return (
//     <div className='container'>
//       <h1>Email form</h1>
//       <Formik
//         initialValues={{to:"", title:"", message:"", file: null}}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
      
//       >
//         {({values, handleChange, handleBlur, setFieldValue})=>(
//           <Form className='container-form'>
//             <div className='form-control-email'>
//               <label htmlFor='to'>To:</label>
//               <Field type='text' name='to' value={values.to} onChange={handleChange} onBlur={handleBlur} />
//               <ErrorMessage name='to' component='div' className="error" />
//             </div>
//             <div className='form-control-title'>
//               <label htmlFor='title'>Title:</label>
//               <Field type='text' name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
//               <ErrorMessage name='title' component='div' className="error" />
//             </div>
//             <div className='form-control-message'>
//               <label htmlFor='message'>Message:</label>
//               <Field as='textarea' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} />
//               <ErrorMessage name="message" component="div" className="error" />
//             </div>
//             <div className='form-control-file'>
//               <label htmlFor='file'>File:</label>
//               <input type='file' name='file'  onChange={(event)=> setFieldValue('file', event.currentTarget.files[0])} />
//             </div>
//             <button type='submit'>Submit</button>
            
        
//           </Form>
//         )}


//       </Formik>

//     </div>


//   )

// }
// export default EmailDraftingForm;

// ===================================== EMAIL DRAFTING FORM (CHAT GPT) ======================================

import './EmailDraftingForm.css';

import * as Yup from "yup"

import {ErrorMessage, Field, Form, Formik} from "formik";

import React from "react";

const validationSchema = Yup.object().shape({
  to: Yup.string()
    .required("Required")
    .matches(/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email address!!!'),
  title: Yup.string()
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Title must be a leter!!!"),
  message: Yup.string().required("Required"),
})
const EmailDraftingForm=()=> {
  const handleSubmit=(values, {resetForm})=> {
    console.log(values);
    resetForm();
  }
  return (
    <div className='container'>
      <h1>Email form</h1>
      <Formik
        initialValues={{to:"", title:"", message:"", file: null}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      
      >
        {({setFieldValue, values, handleBlur, handleChange})=> (
          <Form className='container-form'>
            <div className='form-control-email'>
              <label htmlFor="to">To:</label>
              <Field type='to' name='to' value={values.to} onChange={handleChange} onBlur={handleBlur}/>
              <ErrorMessage name='to' component="div" className='error'/>
            </div>
            <div className='form-control-title'>
              <label htmlFor="title">Title:</label>
              <Field type='text' name='title' value={values.title} onChange={handleChange} onBlur={handleBlur}/>
              <ErrorMessage name='title' component="div" className='error'/>
            </div>
            <div className='form-control-message'>
              <label htmlFor="message">Message:</label>
              <Field as='textarea' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur}/>
              <ErrorMessage name='message' component="div" className='error'/>
            </div>
            <div className='form-control-file'>
              <label htmlFor="file">File:</label>
              <input type='file' name='file'  onChange={(event) => setFieldValue('file', event.currentTarget.files[0])} />
            </div>
            <button type='submit'>Submit</button>

          </Form>
        )}

      </Formik>

    </div>

  )
}
export default EmailDraftingForm;

