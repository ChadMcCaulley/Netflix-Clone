import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignupTour from "./pages/SignupTour";
import "./css/main.css";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/signin-existing" component={LoginPage}/>
          <Route exact path = "/signup-tour" component={SignupTour}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
