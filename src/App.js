import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import "./css/main.css";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
