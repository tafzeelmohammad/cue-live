import React, { useEffect, useState, useContext } from "react";
import APIRequest from '../../API/ApiRequestConstant';
import baseRequest from '../../API/BaseRequest';
import { customAxiosConfig } from '../../API/BaseRequest';
import {get} from 'lodash';


 const customError = {
    code:  "AWSER_SomethingWentWrong",
    message: "No Data Found"
  };

  //  Send OTP To Mpbile
  export const requestOTP = (countryCode, mobileNumber, callback) => {
      baseRequest
        .post(APIRequest.RequestOTP, {
          mobile: mobileNumber,
          country_code: countryCode,
        })
        .then(function (response) {
          const token = get(response, 'data.authToken.token');

          if (token.length > 0) {
            callback(token, null);
          } else {
            callback(null, customError);
          }
        })
        .catch(function (error) {
          callback(null, customError);
        });
    };


  
  // Verify OTP API
  export const verifyOTP = (token, otp, callback) => {
    baseRequest
      .post(APIRequest.ValidateOTP, {
        token: token,
        otp: otp,
      })
      .then(function (response) {
        console.log('response===>verifyOTP', response.data);
        const authToken = get(response, 'data.authToken');
        const user = get(response, 'data.user');
        if(authToken.length > 0) {
          customAxiosConfig.token = authToken;
          callback(authToken, null);
        } else {
          callback(null, customError);
        }
      })
      .catch(function (error) {
        console.log('error===>verifyOTP', error);
        callback(null, customError);
      });
  };

  // Update UserName API
  export const updateUsername = (username, callback) => {
    console.log('response===>requestOTP username', username);
    baseRequest
      .post(APIRequest.Username, {
        username: username,
      })
      .then(function (response) {
        console.log('response===>requestOTP', response.data);
        const id = get(response, 'data.id', 0);
        const username = get(response, 'data.username', 0);

        if (id > 0 && username.length > 0) {
          callback(get(response, 'data', null), null);
        } else {
          callback(null, customError);
        }
      })
      .catch(function (error) {
        console.log('error===>requestOTP', JSON.stringify(error), true);
        callback(null, customError);
      });
  };


  // Update Profile Data
    export const updateProfileData = (profile_data, callback) => {
      console.log('response===>updateNameEmail', profile_data);
      baseRequest
        .post(APIRequest.ProfileUpdate, {
          full_name: profile_data.name,
          email: profile_data.email
        })
        .then(function (response) {
          console.log('response===>updateNameEmail', response.data);
          callback(response.data, null);
        })
        .catch(function (error) {
          console.log('error===>updateNameEmail', JSON.stringify(error), true);
          callback(null, customError);
        });
    };

/**
 *  API is used to resend OTP ,  returns the authtoken(used by API in request)
 * @param {token} 
 * @returns
 */
// export const resendOTP = (token, callback) => {
//   baseRequest
//     .post(APIRequest.ResendOTP, {
//       token: token,
//     })
//     .then(function (response) {
//       console.log('response===>resendOTP', get(response, 'data.resend_otp.token'));

//       if (isNotNullAndUndefined(response)) {
//         callback(token, customError);
//       } else {
//         callback(null, customError);
//       }
//     })
//     .catch(function (error) {
//       console.log('error===>resendOTP', error);
//       callback(null, customError);
//     });
// };

// const saveToken = async (data, dispatch, callback) => {
//   try {
//     await AsyncStorage.setItem('authToken', data.authToken);
//     dispatch(data);
//     callback(data.authToken, null);
//   } catch (error) {
//     console.log(error);
//     callback(null, error);
//   }
// };

// const verifyAuthentication = async callback => {
//   try {
//     const authToken = await AsyncStorage.getItem('authToken');
//     if (authToken !== null) {
//       customAxiosConfig.token = authToken;
//     }
//     await baseRequest
//       .get(APIRequest.ValidateGetUserDetails)
//       .then(response => {
//         const userData = get(response, 'data', null);
//         console.log('JSON verifyAuthentication response', userData);
//         if (isNotNullAndUndefined(userData)) {
//           dispatch({
//             type: contextConstant.VERIFY_AUTHENTICATION,
//             userData: userData,
//           });
//           callback(userData, null);
//         } else {
//           callback(null, customError);
//         }
//       })
//       .catch(error => {
//         console.log('JSON verifyAuthentication error', error);
//         callback(null, error);
//       });
//   } catch (error) {
//     console.log('JSON verifyAuthentication error', error);
//     callback(null, error);
//   }
// };

// const updateUsername = username => {
//   dispatch({
//     username: username,
//     type: contextConstant.UPDATE_USERDATA,
//   });
// };


// const signOut = async () => {
//   try {
//     await AsyncStorage.removeItem('authToken');

//     baseRequest
//       .post(APIRequest.console.Logout)
//       .then(function (response) {
//         console.log('response===>requestOTP', response.data);
//         const token = get(response, 'data.authToken.token');

//         if (token.length > 0) {
//           callback(token, null);
//         } else {
//           callback(null, customError);
//         }
//       })
//       .catch(function (error) {
//         console.log('error===>requestOTP', JSON.stringify(error), true);
//         callback(null, customError);
//       });

//   } catch (error) {
    
//   }
// };




