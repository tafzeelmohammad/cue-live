import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Switch, Route, Redirect, useHistory, useLocation  } from "react-router-dom";
import { Form, FormFeedback, Button } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PoppinsNormalGraniteGray14px, PoppinsNormalPinkSwan18px, ValignTextMiddle, PoppinsNormalWhite14px,
  PoppinsNormalEerieBlack24px, PoppinsNormalGraniteGray18px, Border1pxBlack2, PoppinsNormalBlack36px } from "../styledMixins";
import "./assets/EnterOTP";
import "./assets/styleguide";
import bgImage from './assets/images/formBg.png';
import sideBarNav from './assets/images/sidebar-nav.png';
import Header from "./pages/layout/Header";
import { verifyOTP } from './context/authentication/AuthenticationContext';
import { updateUsername } from './context/authentication/AuthenticationContext';
import { get } from 'lodash';
import { useAlert } from 'react-alert'

function ValidateOtp(props) {

  const location = useLocation();
  const alert = useAlert();
  
  const [countryCode, setCountryCode] = useState(location.state.countryCode);
  const [phoneNumber, setPhoneNumber] = useState(location.state.phoneNumber);
  const [token, setToken] = useState(location.state.token);

  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();
  
  const phoneRegExp = /^[-+]?\d+$/
  const history = useHistory();

  const validation = useFormik({

      // enableReinitialize : use this flag when initial values needs to be changed
      enableReinitialize: true,
    
      initialValues: {
        otp1: otp1 || "",
        otp2: otp2 || "",
        otp3: otp3 || "",
        otp4: otp4 || "",
      },

      validationSchema: Yup.object({
        otp1: Yup.string().required(
          "-"
        ).matches(phoneRegExp, '-'),
        otp2: Yup.string().required(
          "-"
        ).matches(phoneRegExp, '-'),
        otp3: Yup.string().required(
          "-"
        ).matches(phoneRegExp, '-'),
        otp4: Yup.string().required(
          "-"
        ).matches(phoneRegExp, '-'),
      }),
      
      onSubmit: (values) => {

      var otp = values.otp1+values.otp2+values.otp3+values.otp4;
      
          verifyOTP(token, otp, function callback(result, error) {

          if(typeof error !== 'undefined' && error !== null) {
            } else {
              console.log('OTP Verified');
              alert.show("Otp Successfully Verified");
              const userName = get('result', 'user.username', '');
              updateUsername(userName, function callback(result, error){
              });
              if (userName.length === 0) {
                history.push({
                  pathname: '/fill-details',
                  state: {
                      token: result,
                    }
                });
              }
            }
          }
        );
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

                <Link to="/signup" className=""><img className="sidebar-nav" src={sideBarNav}/></Link>

                <h1 className="Title1">Otp verification</h1>
                <div className="FillText"><>enter the 4 digit otp sent on<br />xxxxxxxxx to proceed</></div>
              </div>
              
              <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit();  return false; }}>

                <div className="GroupWrap">

                    <div className="OverlapGroup">
                      <input className="inputfield ip ml0" name="otp1"  placeholder="-"  type="text" autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.otp1 || ""}
                        invalid={ validation.touched.otp1 && validation.errors.otp1 ? true : false } />

                        { validation.touched.otp1 && validation.errors.otp1 ? (
                            <FormFeedback type="invalid" className="d-block error text-center bold text-center">{validation.errors.otp1}</FormFeedback>
                        ) : null}

                    </div>

                    <div className="OverlapGroup">
                    <input className="inputfield ip" name="otp2"  placeholder="-"  type="text" autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.otp2 || ""}
                        invalid={ validation.touched.otp2 && validation.errors.otp2 ? true : false } />

                      { validation.touched.otp2 && validation.errors.otp2 ? (
                            <FormFeedback type="invalid" className="d-block error erstyle_1 bold">{validation.errors.otp2}</FormFeedback>
                        ) : null}

                    </div>
                 
                    <div className="OverlapGroup">
                    <input className="inputfield ip" name="otp3"  placeholder="-"  type="text" autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.otp3 || ""}
                        invalid={ validation.touched.otp3 && validation.errors.otp3 ? true : false } />

                        { validation.touched.otp3 && validation.errors.otp3 ? (
                                <FormFeedback type="invalid" className="d-block error erstyle_1">{validation.errors.otp3}</FormFeedback>
                            ) : null}
                    </div>
                  
                    <div className="OverlapGroup">
                    <input className="inputfield ip" name="otp4"  placeholder="-"  type="text"  autoComplete="off" 
                        onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.otp4 || ""}
                        invalid={ validation.touched.otp4 && validation.errors.otp4 ? true : false } />

                        { validation.touched.otp4 && validation.errors.otp4 ? (
                              <FormFeedback type="invalid" className="d-block error erstyle_1">{validation.errors.otp4}</FormFeedback>
                          ) : null}
                    </div>
                  
                </div>

               

                  <div className="btn-wrap text-center">
                    <Button color="primary" type="submit" className="submit-button confirmBtn">Confirm</Button>
                  </div>

                  <div className="resend-text">resend in 29 secs</div>

              </Form>

            </div>
            <div className="Text4">booked cues will be available on cue app</div>
          </div>
      </div>

      </div>
    </div>
  );
}




export default ValidateOtp;
