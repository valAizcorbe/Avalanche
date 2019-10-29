import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./Components/Account/Account";
import Dashboard from "./Components/Dashboard/Dashboard";
import Authentication from "./Components/Authentication/Authentication";
import Landing from "./Components/Landing/Landing";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/account" component={Account} />
    <Route path="/authentication" component={Authentication} />
  </Switch>
);
