import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
