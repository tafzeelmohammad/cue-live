import React, {Fragment} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import W1A1CueDetail from "./components/Index";
import SignIn from "./components/SignIn";
import Otp from "./components/ValidateOtp";
import Details from "./components/Details";
import Successful from "./components/Successful";
import Unsuccessful from "./components/Unsuccessful";
import Community from "./components/Community";
import { transitions, positions, Provider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Profile from "./components/Profile";

function App() {

  const options = {
    timeout: 5000,
    type: types.SUCCESS,
    position: positions.TOP_RIGHT,
    offset: '30px',
    transition: transitions.FADE,
    containerStyle: {
    zIndex: 100
    }
  };

  return (
      <Fragment>
        <Router>
          <Switch>
          <Provider template={AlertTemplate} {...options}>
            <Route path="/:path(|home)"><W1A1CueDetail /></Route>
            <Route path="/signin" component={ SignIn} />
            <Route path="/validate-otp" component={ Otp } />
            <Route path="/fill-details" component={ Details } />
            <Route path="/success" component={ Successful } />
            <Route path="/unsuccess" component={ Unsuccessful } />
            <Route path='/profile' component={ Profile } />
            <Route path='/community/:id' component={ Community } />
          </Provider>
          </Switch>
        </Router>
      </Fragment>
  );
}

export default App;


