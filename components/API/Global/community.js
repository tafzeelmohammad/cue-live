import React, { useEffect, useState, useContext } from "react";
import APIRequest from '../../API/ApiRequestConstant';
import baseRequest from '../../API/BaseRequest';
import { customAxiosConfig } from '../../API/BaseRequest';
import {get} from 'lodash';


const customError = {
    code:  "AWSER_SomethingWentWrong",
    message: "No Data Found"
};

//  Get Communities By User
export const GetCommunity = (communityId, callback) => {
    baseRequest
      .get(APIRequest.GetCommunityById + '?community_id=' + communityId)
      .then(function (response) {
        console.log(response);
        callback(response, null)
      })
      .catch(function (error) {
        callback(null, customError);
      });
  };