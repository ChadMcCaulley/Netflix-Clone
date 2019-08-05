import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SignupTourPage1 from "./pages/SignupTour/SignupTourPage1";
import SignupTourPage2 from "./pages/SignupTour/SignupTourPage2";
import SignupTourPage3 from "./pages/SignupTour/SignupTourPage3";
import SignupForm from "./pages/SignupForm";
import CreateAccount from "./pages/CreateAccount";
import NetflixMainPage from "./pages/NetflixMainPage";

import "./css/main.css";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/signin-existing" component={LoginPage}/>
          <Route exact path = "/:account_id/user-page" component={UserPage}/>
          <Route exact path = "/signup-tour/benefits" component={SignupTourPage1}/>
          <Route exact path = "/signup-tour/plans" component={SignupTourPage2}/>
          <Route exact path = "/signup-tour/account-creation" component={SignupTourPage3}/>
          <Route exact path = "/signup-tour/signup-form" component={SignupForm}/>
          <Route exact path = "/signup-tour/create-account/:account_id" component={CreateAccount}/>
          <Route exact path = "/browse" component={NetflixMainPage}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
