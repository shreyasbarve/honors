import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customerlist from "./components/Customerlist";
import EditCustomer from "./components/EditCustomer";
import AddCustomer from "./components/AddCustomer";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/customers" component={Customerlist} />
            <Route path="/editcustomer/:id" component={EditCustomer} />
            <Route path="/addcustomer" component={AddCustomer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
