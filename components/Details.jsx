import React, { useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, FormFeedback, Button } from "reactstrap";
import { useFormik } from "formik";
import formBg from './assets/images/formBg.png';
import "./assets/styleguide";
import Header from "./pages/layout/Header";
import { updateProfileData } from './context/authentication/AuthenticationContext';

import * as Yup from "yup";

function Details(props) {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();


  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
  
    initialValues: {
      email: email || "",
      name: name || "",
      username: username || "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required(
        "Please Enter Email"
      ),
      name: Yup.string().required(
        "Please Enter Name"
      ),
      username: Yup.string().required(
        "Please Enter Username"
      ),
    }),
    
    onSubmit: (values) => {

      updateProfileData(values, function callback(result, error) {
        if(typeof error !== 'undefined' && error !== null) {
        } else {
            console.log('profileNameEmailUpdate');
            console.log(result);
          }
      });
      
    },
  });
  
  return (

    <div className="container-center-horizontal">
      <div className="w1-a3-enter-otp screen">
      
      <Header/>

      <div className="OverlapGroup4 detailsForm" style={{ backgroundImage: `url(${formBg})` }}>
          <div className="OverlapGroup6">
            <div className="InputBox">

              <div className="HeaderText1">
                <h1 className="Title1">Personal Details</h1>
                <div className="FillText"><>enter your details to <br />proceed furthur.</></div>
              </div>

              <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit();  return false; }}>

                  <div className="Group">
                    <div className="Number">
                        <input className="inputfield" name="email"  placeholder="Email"  type="email"  autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.email || ""}
                            invalid={ validation.touched.email && validation.errors.email ? true : false } />
                    </div>
                  </div>
                  { validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid" className="d-block text-center text-center error">{validation.errors.email}</FormFeedback>
                    ) : null}

                  <div className="Group">
                    <div className="Number">
                        <input className="inputfield" name="name"  placeholder="Name"  type="text"  autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.name || ""}
                        invalid={ validation.touched.name && validation.errors.name ? true : false } />
                    </div>
                  </div>
                  { validation.touched.name && validation.errors.name ? (
                        <FormFeedback type="invalid" className="d-block text-center text-center error">{validation.errors.name}</FormFeedback>
                    ) : null}

                  <div className="Group">
                    <div className="Number">
                        <input className="inputfield" name="username"  placeholder="User Name"  type="text"  autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.username || ""}
                        invalid={ validation.touched.username && validation.errors.username ? true : false } />
                    </div>
                  </div>
                  { validation.touched.username && validation.errors.username ? (
                        <FormFeedback type="invalid" className="d-block text-center text-center error">{validation.errors.username}</FormFeedback>
                    ) : null}

                  <div className="btn-wrap text-center">
                      <Button color="primary" type="submit" className="submit-button otpButton" size="lg">Continue</Button>
                  </div>

                </Form>

            </div>
          </div>
      </div>
      </div>
    </div>
  );
}


export default Details;
