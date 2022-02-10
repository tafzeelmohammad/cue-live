import React, { useEffect, useState, useContext } from "react";
import { Container, Row } from "reactstrap";
import styled from "styled-components";
import { Link, Switch, Route, Redirect, useHistory  } from "react-router-dom";
import { Form, FormFeedback, Button } from "reactstrap";
import { useFormik } from "formik";
import bgImage from './assets/images/formBg.png';
import * as Yup from "yup";
import "./assets/EnterOTP";
import "./assets/styleguide";
import Header from "./pages/layout/Header";
import { requestOTP } from './context/authentication/AuthenticationContext';
import isNotNullAndUndefined from '../utils/Global';
import { useAlert } from 'react-alert'

function SignUp(props) {
  
  const alert = useAlert()

  const [mobile, setMobile] = useState();
  const [token, setToken] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const history = useHistory();

  const validation = useFormik({
      // enableReinitialize : use this flag when initial values needs to be changed
      enableReinitialize: true,
    
      initialValues: {
        mobile: mobile || ""
      },

      validationSchema: Yup.object({
        mobile: Yup.string().required(
          "Please Enter Mobile Number"
        ).matches(phoneRegExp, 'Mobile Number is not valid'),
      }),
      
      onSubmit: (values) => {
        const countryCode = '91';
        requestOTP('91', values.mobile, function callback(result, error) {
          if (typeof error !== 'undefined' && error !== null) {
            setErrorMessage('Something went wrong');
            alert.error("Something went wrong");
          }else{
            alert.show("Otp successfully send to your mobile");
            setToken(result);
            history.push({
              pathname: '/validate-otp',
              state: { countryCode: countryCode, phoneNumber: values.mobile, token: result }
            });
          }
        });
      },
  });


  return (
    <div className="container-center-horizontal">
      <div className="w1-a3-enter-otp screen" name="form1" action="form1" method="post">
      
      <Header/>

      <div className="OverlapGroup4" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="OverlapGroup5">
            <div className="InputBox">

              <div className="HeaderText1">
                <h1 className="Title1">let’s begin!</h1>
                <div className="FillText"><>please enter your mobile number. <br />it will be kept private &amp; secure.</></div>
              </div>
              
              <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit();  return false; }}>

                  <div className="Group">
                    <div className="Number">
                      <div className="Text1">+91</div>
                        <input className="inputfield" name="mobile"  placeholder="9xxxxxxxx"  type="text"  autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.mobile || ""}
                        invalid={ validation.touched.mobile && validation.errors.mobile ? true : false } />
                    </div>
                  </div>

                  { validation.touched.mobile && validation.errors.mobile ? (
                          <FormFeedback type="invalid" className="d-block error">{validation.errors.mobile}</FormFeedback>
                  ) : null}

                  <div className="btn-wrap text-center">
                    <Button color="primary" type="submit" className="submit-button otpButton" size="lg">Generate OTP</Button>
                  </div>

              </Form>

            </div>
            <div className="Text4">booked cues will be available on cue app</div>
          </div>
      </div>

      </div>

    </div>
  );
}

export default SignUp;
