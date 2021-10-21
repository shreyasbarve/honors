import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "fontsource-roboto";

// components
import Details from "./views/Details/Details";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}
