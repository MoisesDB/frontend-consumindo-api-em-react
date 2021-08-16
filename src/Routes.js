import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default Routes;
