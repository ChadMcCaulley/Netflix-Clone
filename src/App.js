import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import "./css/main.css";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
