import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignupTourPage1 from "./pages/SignupTourPage1";
import SignupTourPage2 from "./pages/SignupTourPage2";
import SignupTourPage3 from "./pages/SignupTourPage3";
import SignupForm from "./pages/SignupForm";

import "./css/main.css";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/signin-existing" component={LoginPage}/>
          <Route exact path = "/signup-tour/benefits" component={SignupTourPage1}/>
          <Route exact path = "/signup-tour/plans" component={SignupTourPage2}/>
          <Route exact path = "/signup-tour/account-creation" component={SignupTourPage3}/>
          <Route exact path = "/signup-tour/signup-form" component={SignupForm}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
