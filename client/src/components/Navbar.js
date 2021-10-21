import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper purple darken-1">
          <ul id="nav-mobile" className="left hide-on-sm-and-down">
            <li>
              <Link to="/customers">View Customers</Link>
            </li>
            <li>
              <Link>Edit Customers</Link>
            </li>
            <li>
              <Link to="/addcustomer">Add Customers</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
