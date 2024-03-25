
// ==================================== [PRACTICE] B00K-LIBRARY-MANAGE-APPLICATION ==================================

// import './BookManageApp.css';

// import React, {useState} from "react";


// const BookManageApp=()=> {
//     const [books, setBooks] = useState([]);
//     const [value, setValue] = useState({
//         heading:"",
//         number: "",
//     })
//     const [editIndex, setEditIndex] = useState(null);
//     const [titleError, setTitleError] = useState("")
//     const [amountError, setAmountError] = useState("")
      


//     const handleChange=(event)=> {
//         setValue(prevState=> ({
//             ...prevState,
//             [event.target.name]: event.target.value
//         }))
//     }

//     const addBooks=(e)=> {
//         e.preventDefault();
//         const updateBooks = [...books, {title: value.heading, amount: value.number, completed: false}];
//         let titleErr;
//         let amountErr;
//         if(editIndex === null) {
//             if(value.heading && value.number && Number(value.number)) {
//                 setBooks(updateBooks)
//                 setValue(prevState=>({
//                     ...prevState,
//                     heading:"",
//                     number:"",
//                 }))
//             }
                  
//             if(!value.heading){
//                 titleErr = "Required" 
//                 setTitleError(titleErr)
//             }else{
//                 setTitleError("")
//             }

//             if(!value.number){
//                 amountErr = "Required" 
//                 setAmountError(amountErr) 
//             }else if(!Number(value.number)) {
//                 amountErr = "Amount must be number" 
//                 setAmountError(amountErr) 
//             } else {
//                 setAmountError("")
//             }
                                 
//         } else {
//             if(value.heading&&value.number&&Number(value.number)) {
//                 const updateBooks =[...books]
//                 updateBooks[editIndex].title = value.heading;
//                 updateBooks[editIndex].amount = value.number;
//                 setBooks(updateBooks)
//                 setValue(prevState=> ({
//                     ...prevState,
//                     heading:"",
//                     number:"",
//                 }))
//                 setEditIndex(null)
//             } 
            
//             if(!value.heading){
//                 titleErr = "Required" 
//                 setTitleError(titleErr)
//             }else{
//                 setTitleError("")
//             }
            
//             if(!value.number){
//                 amountErr = "Required" 
//                 setAmountError(amountErr) 
//             }else if(!Number(value.number)) {
//                 amountErr = "Amount must be number" 
//                 setAmountError(amountErr) 
//             } else {
//                 setAmountError("")
//             }

//         }
               
//         console.log(updateBooks)
//     }

//     const editBook=(index)=> {
//         const updateBooks =[...books]
//         setValue(prevState=> ({
//             ...prevState,
//             heading: books[index].title,
//             number: books[index].amount,
//         }))
//         setEditIndex(index)
//         setBooks(updateBooks)
        
//     }

//     const deleteBook=(index)=> {
//         const updateBooks = [...books];
//         updateBooks.splice(index, 1);
//         setBooks(updateBooks);
//     }


//     return (
//         <div className='container'>
//             <div className='container-form'>
//                 <h1>Library</h1>
//                 <form className='form-control' onSubmit={addBooks}>
//                     <div className='form-control-title'>
//                         <p>Title</p>
//                         <input type="text" name='heading' value={value.heading} onChange={handleChange}  placeholder='Enter a new title...' />
//                         {titleError?<p style={{color:"red"}}>{titleError}</p>:""}
//                     </div>
//                     <div className='form-control-amount'>
//                         <p>Amount</p>
//                         <input type="text" name='number' value={value.number} onChange={handleChange}  placeholder='Enter numbers...' />
//                         {amountError? <p style={{color:"red"}}>{amountError}</p>:""}
//                     </div>
//                     <button type='submit'>Submit</button>
//                 </form>
//             </div>
//             <div className='container-content'>
//                 <table className='table'>
//                     <tbody>
//                         <tr className='table-title'>
//                             <th>Title</th>
//                             <th>Number</th>
//                             <th>Actions</th>
//                         </tr>
//                     {books.map((book, index) => 
//                         <tr key={index} className='table-content'>
//                             <td>{book.title}</td>
//                             <td>{book.amount}</td>
//                             <td>
//                                 <button onClick={()=> editBook(index)}>Edit</button>
//                                 <button onClick={()=> deleteBook(index)}>Delete</button>
//                             </td>
//                         </tr>
                    
//                     )}
//                     </tbody>
//                 </table>
//             </div>

//         </div>

//     )
// }
// export default BookManageApp;




//=========================================APPLICATION MANAGE BOOKS LIBRARY BY (CHAT GPT)===========================

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, { useState } from 'react';

// function BookManageApp() {
//   const [books, setBooks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddBook = (values, { resetForm }) => {
//     setBooks([...books, values]);
//     resetForm();
//   };

//   const handleEditBook = (values, { resetForm }) => {
//     const updatedBooks = [...books];
//     updatedBooks[editIndex] = values;
//     setBooks(updatedBooks);
//     setEditIndex(null);
//     resetForm();
//   };

//   const handleDeleteBook = (index) => {
//     const updatedBooks = [...books];
//     updatedBooks.splice(index, 1);
//     setBooks(updatedBooks);
//   };

//   return (
//     <div className="App">
//       <h1>Book Management</h1>
//       <Formik
//         initialValues={{
//           title: '',
//           quantity: ''
//         }}
//         validate={values => {
//           const errors = {};
//           if (!values.title) {
//             errors.title = 'Title is required';
//           }
//           if (!values.quantity) {
//             errors.quantity = 'Quantity is required';
//           } else if (!/^\d+$/.test(values.quantity)) {
//             errors.quantity = 'Quantity must be a number';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { resetForm }) => {
//           if (editIndex === null) {
//             handleAddBook(values, { resetForm });
//           } else {
//             handleEditBook(values, { resetForm });
//           }
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="title">Title</label>
//               <Field type="text" name="title" />
//               <ErrorMessage name="title" component="div" />
//             </div>
//             <div>
//               <label htmlFor="quantity">Quantity</label>
//               <Field type="text" name="quantity" />
//               <ErrorMessage name="quantity" component="div" />
//             </div>
//             <button type="submit" disabled={isSubmitting}>
//               {editIndex !== null ? 'Update' : 'Submit'}
//             </button>
//           </Form>
//         )}
//       </Formik>
//       <h2>Book List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Quantity</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book, index) => (
//             <tr key={index}>
//               <td>{book.title}</td>
//               <td>{book.quantity}</td>
//               <td>
//                 <button onClick={() => setEditIndex(index)}>Edit</button>
//                 <button onClick={() => handleDeleteBook(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookManageApp;


// ==================================== [PRACTICE] B00K-LIBRARY-MANAGE-APPLICATION BY FORMIK ==================================

// import './BookManageApp.css'

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, {useState} from "react";

// function BookManageApp () {
  
//   const [books, setBooks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
  

//   const addStoreBook =(values, {resetForm}) => {
//     const updateBooks = [...books, values]
//     setBooks(updateBooks);
//     console.log(books);
//     resetForm();
//   }

//   const editBook =(index, setValues)=> {
//     const updateBooks = [...books]
//     setEditIndex(index)
//     setValues({title:updateBooks[index].title, quantity:updateBooks[index].quantity})
//     setBooks(updateBooks)
//   }

//   const handleEditBook =(values, {resetForm})=> {
//     const updateBooks = [...books];
//     updateBooks[editIndex].title = values.title;
//     updateBooks[editIndex].quantity = values.quantity;
//     setEditIndex(null);
//     resetForm();
//   }

//   const deleteBook=(index)=> {
//     const updateBooks =[...books];
//     updateBooks.splice(index,1);
//     setBooks(updateBooks);

//   }


//   return (
//     <div className='container'>
//       <h1>Library</h1>
//       <Formik
//         initialValues={{title:"", quantity:"", completed:false}}
//         validate={values=>{
//           let error={};
//           if(!values.title){
//             error.title = "Required"
//           }
//           if(!values.quantity) {
//             error.quantity = "Required"
//           } else if(!Number(values.quantity)) {
//             error.quantity="Quantity must be a number!!!"
//           }
//           return error;
//         }}
//         onSubmit={(values, {resetForm}) => {
//           if(editIndex === null) {
//             addStoreBook(values,{resetForm});

//           }else {
//             handleEditBook(values, {resetForm})
//           }

//         }}   
//       >
//         {({isSubmitting, setValues}) =>(
//           <div>
//             <Form className='form-control'>
//               <div className='control-title'>
//                 <label htmlFor='title'>Title:</label>
//                 <Field type="text"  name="title"/>
//                 <ErrorMessage name='title' component="div"/>
//               </div>
//               <div className='control-quantity'>
//                 <label htmlFor='quantity'>Quantity:</label>
//                 <Field type="text" name="quantity"/>
//                 <ErrorMessage name='quantity' component="div"/>
//               </div>
//               <button type='submit' disabled={isSubmitting}>Submit</button>
//             </Form>
//             <table className='table'>
//               <thead>
//                 <tr className='table-title'>
//                   <th>Title</th>
//                   <th>Quantity</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {books.map((book, index)=>
//                   <tr key={index} className='table-content'>
//                     <td>{book.title}</td>
//                     <td>{book.quantity}</td>
//                     <td>
//                       <button onClick={() => editBook(index, setValues)}>Edit</button>
//                       <button onClick={()=> deleteBook(index)}>Delete</button>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </Formik>
      
//     </div>



//   )
// }

// export default BookManageApp;



//=================================================== OPINION CONSULT CHAT GPT========================================
// import { Field, Form, Formik } from "formik";

// import React from "react";

// const initialValues = {
//   items: [
//     { id: 1, content: "Item 1" },
//     { id: 2, content: "Item 2" },
//     { id: 3, content: "Item 3" }
//   ]
// };

// const BookManageApp = () => {
//   const handleEdit = (index, values, setFieldValue) => {
//     // Lấy nội dung của item được chỉnh sửa
//     const editedContent = values.items[index].content;
//     // Set giá trị của ô input thành nội dung của item được chỉnh sửa
//     setFieldValue(`items[${index}].content`, editedContent);
//   };

//   return (
//     <div>
//       <h1>Formik Edit Example</h1>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({ values, setFieldValue }) => (
//           <Form>
//             {values.items.map((item, index) => (
//               <div key={item.id}>
//                 {/* Hiển thị nội dung của item trong ô input */}
//                 <Field name={`items[${index}].content`} />
//                 {/* Nút chỉnh sửa */}
//                 <button
//                   type="button"
//                   onClick={() => handleEdit(index, values, setFieldValue)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             ))}
//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default BookManageApp;
 

// ============================================ CONSULT CHAT GPT ======================================

// import { Field, Form, Formik } from 'formik';

// import React from 'react';

// const BookManageApp = () => (
//   <div>
//   <Formik
//     initialValues={{ firstName: '', lastName: '' }}
//     onSubmit={(values, actions) => {
//       // Xử lý logic gửi form ở đây
//       console.log(values);
//       actions.setSubmitting(false);
//     }}
//   >
//     {({ setValues }) => (
//       <div>
//         <Form>
//           <Field name="firstName" />
//           <Field name="lastName" />
//           {/* <button type="button" onClick={() => {
//             // Thiết lập giá trị mới cho các trường
//             setValues({ firstName: 'New First Name', lastName: 'New Last Name' });
//           }}>
//             Đặt giá trị mới
//           </button> */}
//           <button type="reset">
//             Đặt lại
//           </button>
//           <button type="submit">
//             Gửi
//           </button>
//         </Form>
//         {/* <button type="button" onClick={() => {
//           // Thiết lập giá trị mới cho các trường
//           setValues({ firstName: 'New First Name', lastName: 'New Last Name' });
//         }}>
//           Đặt giá trị mới
//         </button> */}
//       </div>
     
//     )}
//   </Formik>
//    <button type="button" onClick={() => {
//     // Thiết lập giá trị mới cho các trường
//     setValues({ firstName: 'New First Name', lastName: 'New Last Name' });
//   }}>
//     Đặt giá trị mới
//   </button>
//   </div>
// );

// export default BookManageApp;


//============================================= CREATE APPLICATION MANAGE BOOKS'S LIBRARY [TRY AGAIN] ============================

// import './BookManageApp.css';

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, {useState} from "react";

// const BookManageApp=()=> {

//   const [books, setBooks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddBooks =(values, {resetForm})=> {
//     const updateBooks = [...books, values];
//     setBooks(updateBooks);
//     resetForm();
//     console.log(books)
//   }

//   const editBook=(index, setValues)=> {
//     const updateBooks =[...books];
//     setEditIndex(index);
//     setValues({title:updateBooks[index].title, quantity: updateBooks[index].quantity});
//     setBooks(updateBooks);

//   }

//   const handleEditBook =(values, {resetForm}) =>{
//     const updateBooks =[...books];
//     updateBooks[editIndex].title = values.title
//     updateBooks[editIndex].quantity = values.quantity
//     //setBooks(updateBooks)
//     setEditIndex(null);
//     resetForm()
//   }

//   const deleteBook=(index)=> {
//     const updateBooks=[...books]
//     updateBooks.splice(index, 1)
//     setBooks(updateBooks)
//   }


//   return (
//     <div className='container'>
//       <h1>Library</h1>
//       <Formik
//         initialValues={{title:"", quantity:"", completed: false}}
//         validate={values=> {
//           let error ={};
//           if (!values.title) {
//             error.title = "Required"
//           } 
//           if (!values.quantity) {
//             error.quantity = "Required"
//           } else if (!Number(values.quantity)){
//             error.quantity ="Quantity must be a number!!!"
//           }
//           return error;
//         }}

//         onSubmit={(values, {resetForm})=> {
//           if(editIndex===null){
//             handleAddBooks(values, {resetForm})

//           } else (
//             handleEditBook(values, {resetForm})
//           )

//         }}
  
//       >
//         {({isSubmitting, setValues})=> (
//           <div>
//           <div className='container-form'>
//             <Form>
//               <div className='form-control-title'>
//                 <label>Title:</label>
//                 <Field type="text" name="title"/>
//                 <ErrorMessage name='title' component="div"/>
//               </div>
//               <div className='form-control-quantity'>
//                 <label>Quantity:</label>
//                 <Field type="text" name="quantity"/>
//                 <ErrorMessage name='quantity' component="div"/>
//               </div>
//               <button type='submit' disabled={isSubmitting}>Submit</button>
//             </Form>

//           </div>
//           <div className='container-table'>
//             <table className='table'>
//               <thead>
//                 <tr className='table-title'>
//                   <th>Title</th>
//                   <th>Quantity</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {books.map((book, index)=> 
//                   <tr key={index} className='table-content'>
//                     <td>{book.title}</td>
//                     <td>{book.quantity}</td>
//                     <td>
//                       <button onClick={()=> editBook(index, setValues)}>Edit</button>
//                       <button onClick={()=> deleteBook(index)}>Delete</button>
//                     </td>
//                   </tr>
                
//                 )}


//               </tbody>
//             </table>
//           </div>
//           </div>
//         )}

//       </Formik>
//     </div>
//   )

// }
// export default BookManageApp;

//============================================= CREATE APPLICATION MANAGE BOOKS'S LIBRARY [TRY AGAIN]============================

// import './BookManageApp.css';

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, {useState} from "react";

// const BookManageApp=()=> {
//   const [books, setBooks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddBooks=(values, {resetForm})=> {
//     const updateBooks =[...books, values]
//     setBooks(updateBooks);
//     resetForm();
//     console.log(books);
//   }

//   const editBook=(index, setValues)=> {
//     const updateBooks =[...books];
//     setEditIndex(index);
//     setValues({title:updateBooks[index].title, quantity: updateBooks[index].quantity});
//     setBooks(updateBooks);
//   }

//   const handleEditBooks=(values, {resetForm})=> {
//     const updateBooks =[...books];
//     updateBooks[editIndex].title = values.title
//     updateBooks[editIndex].quantity = values.quantity
//     setBooks(updateBooks)
//     setEditIndex(null);
//     resetForm();
//   }

//   const deleteBook=(index)=> {
//     const updateBooks=[...books];
//     updateBooks.splice(index, 1);
//     setBooks(updateBooks)
//   }

  
//   return (
//     <div className="container">
//       <h1>Library</h1>
//       <Formik
//         initialValues={{title:"", quantity:"", completed: false}}
//         validate ={values=>{
//           let error={};
//           if(!values.title) {
//             error.title = "Required"
//           }
//           if(!values.quantity) {
//             error.quantity = "Required"
//           } else if(!Number(values.quantity)) {
//             error.quantity = "Quantity must be a number !!!"
//           }
//           return error;
//         }}
//         onSubmit={(values, {resetForm})=> {
//           if(editIndex === null) {
//             handleAddBooks(values, {resetForm})

//           } else {
//             handleEditBooks(values, {resetForm})
//           }

//         }}
      
      
//       >
//         {({isSubmitting, setValues})=> (
//           <div>
//             <div className='container-form'>
//               <Form>
//                 <div className='form-control-title'>
//                     <label htmlFor="title">Title:</label>
//                     <Field type="text" name="title"/>
//                     <ErrorMessage name='title' component="div"/>
//                 </div>
//                 <div className='form-control-quantity'>
//                     <label htmlFor="quantity">Quantity:</label>
//                     <Field type="text" name="quantity"/>
//                     <ErrorMessage name='quantity' component="div"/>
//                 </div>
//                 <button type='submit' disabled={isSubmitting}>Submit</button>
//               </Form>
//             </div>
//             <div >
//               <table className='container-table'>
//                 <thead>
//                   <tr className='table-title'>
//                     <th>Title:</th>
//                     <th>Quantity:</th>
//                     <th>Actions: </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {books.map((book, index) =>
//                     <tr key={index} className='table-content'>
//                       <td>{book.title}</td>
//                       <td>{book.quantity}</td>
//                       <td>
//                         <button onClick={()=> editBook(index, setValues)}>Edit</button>
//                         <button onClick={()=> deleteBook(index)}>Delete</button>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>

//             </div>
//           </div>
//         )}

//       </Formik>
//     </div>

//   )
// }
// export default BookManageApp;



