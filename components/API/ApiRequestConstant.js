const getAPIRequest = {
    ValidateGetUserDetails: 'api:FJSLfV81/auth/me', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:FJSLfV81/#/auth/get_auth_me
    CheckUsername: 'api:Hdw516uD/username', //https://www.notion.so/tactconnect/4-35e6bebebed84e5aa21594cd111cf600
    MasterCategory: 'api:q570Id4i/master/category', // https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:q570Id4i/#/master/get_master_category
    SearchUser: 'api:TkqLzgAM/search/user',
    SearchEvent: 'api:TkqLzgAM/search/event',
    SearchCommunity: 'api:TkqLzgAM/search/community',
    ListBankAccount: 'api:_dz3UmOR/bankaccount', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:_dz3UmOR/#/bankaccount/get_bankaccount
    browsItem: 'api:dodGfQhH/browse',
    ProfileVerificationStatus: 'api:Hdw516uD/profile/verification/status',
    SearchUserByInterests: 'api:TkqLzgAM/search/user-by-interests',
    
    User: 'api:Hdw516uD/user/',
    UserFollowers: 'api:Hdw516uD/user/followers/',
    UserFollowing: 'api:Hdw516uD/user/following/',
  
    GetEventById: 'api:PPo7qDNa/event/',
    GetEventUserStatus: 'api:PPo7qDNa/event-user/',
    ListBlockUser: '/report/list',
    UserCommunity: 'api:_dz3UmOR/usercommunity',
    GetCommunityById: 'api:ih5W24rc/community/',
    GetUserCuesById: 'api:_dz3UmOR/user/event/',
  
    CommunityUserListByCommunityId: 'api:ih5W24rc/community-user/list',
    Feeds: 'api:_dz3UmOR/feeds',
    GetUserCalendarList: 'api:_dz3UmOR/user-calendar', //https://xwpo-c4qw-zxn1.m2.xano.io/api:_dz3UmOR/user-calendar?filter=FILTER_NAME ->FILTER_NAME=UPCOMMING/USEREVENT/USERPASSES/ALL
    ProfileInterest: 'api:Hdw516uD/profile/interest',
  };
  
  const postAPIRequest = {
    Logout: '/api:FJSLfV81/auth/logout',
    RequestOTP: 'api:FJSLfV81/auth/request-otp', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:FJSLfV81/#/auth/post_auth_request_otp
    ValidateOTP: 'api:FJSLfV81/auth/validate_otp', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:FJSLfV81/#/auth/post_auth_validate_otp
    ResendOTP: 'api:FJSLfV81/auth/resend_otp', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:FJSLfV81/#/auth/post_auth_resend_otp
    UpdateUserName: 'api:Hdw516uD/username', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/username/post_username
    ProfileUpdate: 'api:Hdw516uD/profile/update', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/profile/post_profile_update
    ProfileInterestUpdate: 'api:Hdw516uD/profile/update-interest', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/profile/post_profile_update_interest
    RegisterDevice: 'device', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/device/post_device
  
    Username: 'api:Hdw516uD/username', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/username/post_username
    Device: 'api:Hdw516uD/device',
    ContactUpload: 'api:Hdw516uD/contact/upload', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/contact/post_contact_upload
  
    UploadImage: 'api:q570Id4i/upload/image', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:q570Id4i/#/upload/post_upload_image
  
    UserFollow: 'api:Hdw516uD/user/follow',
    UserUnfollow: 'api:Hdw516uD/user/unfollow',
  
    AddBankaccount: 'api:_dz3UmOR/bankaccount', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:_dz3UmOR/#/bankaccount/post_bankaccount
    UpdateBankaccount: 'api:_dz3UmOR/bankaccount/', //https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:_dz3UmOR/#/bankaccount/post_bankaccount__bankaccount_id_
    ProfileVerificationRequest: 'api:Hdw516uD/profile/verification/request', // https://xwpo-c4qw-zxn1.m2.xano.io/apidoc:Hdw516uD/#/profile/post_profile_verification_request
  
    ReportUser: 'api:_dz3UmOR/report',
    CreateEvent: 'api:PPo7qDNa/event',
    AddEventUser: 'api:PPo7qDNa/event-user',
    AddMultipleEventUser: 'api:Hdw516uD/event-user/multiple',
  
    EditEvent: 'api:PPo7qDNa/event/',
    CreateCommunity: 'api:ih5W24rc/community',
    AddMemberInCommunity: 'api:ih5W24rc/community-user',
  
    AddMembersInCommunity: 'api:ih5W24rc//community-user/multiple/',
  
    AddToCalendar: 'api:_dz3UmOR/user-calendar',
    NotInterestedEvent: 'api:_dz3UmOR/event-not-interested',
  
    EditCommunity: 'api:ih5W24rc/community/',
    UpdateCommunityUserType: 'api:ih5W24rc/community-user',
    RequestToJoinCommunity: 'api:ih5W24rc/community-request',
    EndLiveEvent: 'api:PPo7qDNa/live-event/end/',
    LeaveLiveEvent: 'api:PPo7qDNa/live-event/leave/',
    JoinLiveEvent: 'api:PPo7qDNa/live-event/join/',
    UpdateLiveEvent: 'api:PPo7qDNa/live-event/update/',
  
    ChangeNumber: 'api:Hdw516uD/profile/change-phone',
    DeactivateAccount: 'api:Hdw516uD/profile/deactivate',
  };
  
  const PatchAPIRequest = {
    CancelEvent: 'api:PPo7qDNa/event/',
    TurnOffAllNotification: 'api:_dz3UmOR/user/switch-notification',
  };
  
  const DeleteAPIRequest = {
    DeleteAccount: 'api:_dz3UmOR/bankaccount/',
    RemoveUserFromEvent: 'api:PPo7qDNa/event-user/',
    UnblockUser: '/report/',
    RemoveFromCalendar: 'api:_dz3UmOR/user-calendar?event_id=',
    RemoveOrLeaveCommunity: 'api:ih5W24rc//community-user/multiple/',
  
    DeleteCommunity: '/community/',
  };
  const APIRequest = {
    ...getAPIRequest,
    ...postAPIRequest,
    ...DeleteAPIRequest,
    ...PatchAPIRequest,
  };
  export default APIRequest;
  