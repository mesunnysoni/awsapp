import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/Login";

const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
};
export default Routing;
