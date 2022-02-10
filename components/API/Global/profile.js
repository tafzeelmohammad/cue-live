import React, { useEffect, useState, useContext } from "react";
import APIRequest from '../ApiRequestConstant';
import baseRequest from '../BaseRequest';
import { customAxiosConfig } from '../BaseRequest';
import { CommunityUserList } from "./community";

import {get} from 'lodash';

const customError = {
    code:  "AWSER_SomethingWentWrong",
    message: "No Data Found"
};

//  Get Communities By User
export const UserProfile = (userId, callback) => {
    baseRequest
      .get(APIRequest.User + userId)
      .then(function (response) {
        baseRequest
        .get(APIRequest.CommunityUserListByCommunityId + '?user_id=' + userId)
        .then(function (response1) {
          baseRequest
          .get(APIRequest.GetUserCuesById + userId)
          .then(function (response2){
            const userCommunityData = {
              users: response,
              community: response1,
              cues: response2
            }
            callback(userCommunityData, null)
          })
        })
      })
      .catch(function (error) {
        callback(null, customError);
      });
  };