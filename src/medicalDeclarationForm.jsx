import './medicalDeclarationForm.css';

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";

const MedicalDeclarationForm=()=> {
    return (
        <div className="container">
            <h1>Medical Declaration Form</h1>
            <Formik
                initialValues={{name:"", id:"", birthday:"", gender:"", nationality:"", provine:"", district:"", commune:"", housenumber:"", phone:"", email:"", countrytest:"", diseased:[], contact:[]}}
                validate ={values=>{
                    let error={};
                    if(!values.name) {error.name ="Required"}
                    if(!values.id) {error.id = "Required"}
                    if(!values.birthday) {
                        error.birthday = "Required"
                    } else if(values.birthday > 1900) {
                        error.birthday = "Birthday must be bigger 1900"
                    }
                    if(!values.gender) {
                        error.gender = "Please select a gender"
                    }
                    if(!values.nationality) {
                        error.nationality = "Required"
                    }
                    if(!values.provine) {
                        error.provine = "Required"
                    }
                    if(!values.district) {
                        error.district = "Required"
                    }
                    if(!values.commune) {
                        error.commune = "Required"
                    }
                    if(!values.housenumber) {
                        error.housenumber = "Required"
                    }
                    if(!values.phone) {
                        error.phone = "Required"
                    } else if (!Number(values.phone)) {
                        error.phone = "Phone must be a number"
                    }
                    if(!values.email) {
                        error.email = "Required"
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(values.email)) {
                        error.email = "Invalid email address"
                    }
                    return error;
                    
                    
                    
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
            >
                {({isSubmitting, values})=> (
                    <Form className="container-form">
                        <div className="container-form-input">
                            <div className="form-control">
                                <label htmlFor="name">Ho ten:</label>
                                <Field type='text' name='name'/>
                                <ErrorMessage name='name' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="id">So ho chieu/CCCD:</label>
                                <Field type='text' name='id'/>
                                <ErrorMessage name='id' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="birthday">Nam sinh:</label>
                                <Field type='text' name='birthday'/>
                                <ErrorMessage name='birthday' component="div" className="error"/>
                            </div>
                            <div className="form-control-check">
                                <label htmlFor="gender">Gioi Tinh:
                                    <Field type='radio' name='gender' value="male"/>Nam
                                    <Field type='radio' name='gender' value='female'/>Nu
                                </label>
                                <ErrorMessage name='gender' component="div" className="error"/>
                
                            </div>
                            <div className="form-control">
                                <label htmlFor="nationality">Quoc Tich:</label>
                                <Field type='text' name='nationality'/>
                                <ErrorMessage name='nationality' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="company">Cong ty lam viec:</label>
                                <Field type='text' name='company'/>
                                <ErrorMessage name='company' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="department">Bo phan lam viec:</label>
                                <Field type='text' name='department'/>
                                <ErrorMessage name='department' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="insuranceCard">The bao hiem y te:</label>
                                <Field type='text' name='insuranceCard'/>
                                <ErrorMessage name='insuranceCard' component="div" className="error"/>
                            </div>
                            <div className="form-control-check">
                                <label htmlFor="carded">Co the bao hiem y te:
                                    <Field type='checkbox' name='carded'/>
                                </label>
                                <ErrorMessage name='carded' component="div" className="error"/>
                            </div>
                            
                            
                        </div>
                        <div className="container-form-address">
                            <h4>Dia chi lien lac tai Viet Nam</h4>
                            <div className="form-control">
                                <label htmlFor="provine">Tinh Thanh:</label>
                                <Field type='text' name='provine'/>
                                <ErrorMessage name='provine' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="district">Quan/huyen:</label>
                                <Field type='text' name='district'/>
                                <ErrorMessage name='district' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="commune">Phuong/xa:</label>
                                <Field type='text' name='commune'/>
                                <ErrorMessage name='commune' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="housenumber">So nha, pho, to dan pho/thon/doi:</label>
                                <Field type='text' name='housenumber'/>
                                <ErrorMessage name='housenumber' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone">Dien thoai:</label>
                                <Field type='text' name='phone'/>
                                <ErrorMessage name='phone' component="div" className="error"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email:</label>
                                <Field type='text' name='email'/>
                                <ErrorMessage name='email' component="div" className="error"/>
                            </div>
                        <div/>
                        <div className="container-form-test">
                            <div className="form-control">
                                <label htmlFor="countrytest">- Trong vong 14 ngay qua, Anh/chi co den quoc gia/vung lanh tho nao (Co the di qua nhieu quoc gia)</label>
                                <Field as='textarea' name='countrytest'/>
                                <ErrorMessage name='countrytest' component="div" className="error"/>
                            </div>
                            <div className="form-control-test">
                                <label htmlFor="diseased"> - Trong vong 14 ngay qua, Anh/chi co thay xuat hien dau hieu nao sau day khong </label>
                                <p><Field type='checkbox' name='diseased' value="fever"/>Sot</p>
                                <p><Field type='checkbox' name='diseased' value="cough"/>Ho</p>
                                <p><Field type='checkbox' name='diseased' value="stifling"/>Kho tho</p>
                                <p><Field type='checkbox' name='diseased' value="pneumonia"/>Viem phoi</p>
                                <p><Field type='checkbox' name='diseased' value="sorethroat"/>Dau hong</p>
                                <p><Field type='checkbox' name='diseased' value="tired"/>Met moi</p>
                                <ErrorMessage name='diseased' component="div" className="error"/>
                            </div>
                            <div className="form-control-test">
                                <label htmlFor="contact">- Trong vong 14 ngay qua, Anh/chi co tiep xuc voi? </label>
                                <p><Field type='checkbox' name='contact' value="inlandCovi"/>Nguoi benh hoac nghi ngo, mac benh COVID-19</p>
                                <p><Field type='checkbox' name='contact' value="foreignCovi"/>Nguoi tu nuoc co benh COVID-19</p>
                                <p><Field type='checkbox' name='contact' value="illnessSign"/>Nguoi co bieu hien (sot, ho, kho tho, viem phoi)</p>     
                                <ErrorMessage name='contact' component="div" className="error"/>
                            </div>
                        </div>
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )} 

            </Formik>

        </div>


    )
}
export default MedicalDeclarationForm;