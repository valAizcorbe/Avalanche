import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./Components/Account/Account";
import Dashboard from "./Components/Dashboard/Dashboard";
import Auth from "./Components/Auth/Auth";
import Landing from "./Components/Landing/Landing";
import Form from "./Components/Form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/account" component={Account} />
    <Route path="/authentication" component={Auth} />
    <Route path="/form" component={Form} />
  </Switch>
);
