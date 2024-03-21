
// ==================================== [PRACTICE] B00K-LIBRARY-MANAGE-APPLICATION ==================================

import './BookManageApp.css';

import React, {useState} from "react";

//import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookManageApp=()=> {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState({
        heading:"",
        number: "",
    })
    const [editIndex, setEditIndex] = useState(null);
    const [titleError, setTitleError] = useState("")
    const [amountError, setAmountError] = useState("")
      


    const handleChange=(event)=> {
        setValue(prevState=> ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const addBooks=(e)=> {
        e.preventDefault();
        const updateBooks = [...books, {title: value.heading, amount: value.number, completed: false}];
        let titleErr;
        let amountErr;
        if(editIndex === null) {
            if(value.heading && value.number && Number(value.number)) {
                setBooks(updateBooks)
                setValue(prevState=>({
                    ...prevState,
                    heading:"",
                    number:"",
                }))
            }
                  
            if(!value.heading){
                titleErr = "Required" 
                setTitleError(titleErr)
            }else{
                setTitleError("")
            }

            if(!value.number){
                amountErr = "Required" 
                setAmountError(amountErr) 
            }else if(!Number(value.number)) {
                amountErr = "Amount must be number" 
                setAmountError(amountErr) 
            } else {
                setAmountError("")
            }
                                 
        } else {
            if(value.heading&&value.number&&Number(value.number)) {
                const updateBooks =[...books]
                updateBooks[editIndex].title = value.heading;
                updateBooks[editIndex].amount = value.number;
                setBooks(updateBooks)
                setValue(prevState=> ({
                    ...prevState,
                    heading:"",
                    number:"",
                }))
                setEditIndex(null)
            } 
            
            if(!value.heading){
                titleErr = "Required" 
                setTitleError(titleErr)
            }else{
                setTitleError("")
            }
            
            if(!value.number){
                amountErr = "Required" 
                setAmountError(amountErr) 
            }else if(!Number(value.number)) {
                amountErr = "Amount must be number" 
                setAmountError(amountErr) 
            } else {
                setAmountError("")
            }

        }
               
        console.log(updateBooks)
    }

    const editBook=(index)=> {
        const updateBooks =[...books]
        setValue(prevState=> ({
            ...prevState,
            heading: books[index].title,
            number: books[index].amount,
        }))
        setEditIndex(index)
        setBooks(updateBooks)
        
    }

    const deleteBook=(index)=> {
        const updateBooks = [...books];
        updateBooks.splice(index, 1);
        setBooks(updateBooks);
    }


    return (
        <div className='container'>
            <div className='container-form'>
                <h1>Library</h1>
                <form className='form-control' onSubmit={addBooks}>
                    <div className='form-control-title'>
                        <p>Title</p>
                        <input type="text" name='heading' value={value.heading} onChange={handleChange}  placeholder='Enter a new title...' />
                        {titleError?<p style={{color:"red"}}>{titleError}</p>:""}
                    </div>
                    <div className='form-control-amount'>
                        <p>Amount</p>
                        <input type="text" name='number' value={value.number} onChange={handleChange}  placeholder='Enter numbers...' />
                        {amountError? <p style={{color:"red"}}>{amountError}</p>:""}
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='container-content'>
                <table className='table'>
                    <tbody>
                        <tr className='table-title'>
                            <th>Title</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    {books.map((book, index) => 
                        <tr key={index} className='table-content'>
                            <td>{book.title}</td>
                            <td>{book.amount}</td>
                            <td>
                                <button onClick={()=> editBook(index)}>Edit</button>
                                <button onClick={()=> deleteBook(index)}>Delete</button>
                            </td>
                        </tr>
                    
                    )}
                    </tbody>
                </table>
            </div>

        </div>

    )
}
export default BookManageApp;