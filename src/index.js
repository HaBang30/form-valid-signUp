import './index.css';

import MedicalDeclarationForm from './medicalDeclarationForm'
//import BookManageApp from './BookManageApp';
//import App from './App';
// import EmailDraftingForm from './EmailDraftingForm';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Register from './SignUpForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <BookManageApp/> */}
    {/* <EmailDraftingForm/> */}
    <MedicalDeclarationForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
