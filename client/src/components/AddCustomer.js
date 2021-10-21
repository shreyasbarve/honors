import axios from "axios";
import React, { Component } from "react";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      gender: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/customers/`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        gender: this.state.gender,
      })
      .then((res) => {
        this.setState({ first_name: "", last_name: "", gender: "" });
        this.props.history.push("/customers");
      })
      .catch((er) => console.log(er));
  }

  render() {
    const { first_name, last_name, gender } = this.state;

    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="validate"
                  value={first_name}
                  onChange={this.changeHandler}
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="validate"
                  value={last_name}
                  onChange={this.changeHandler}
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  className="validate"
                  value={gender}
                  onChange={this.changeHandler}
                />
                <label for="gender">Gender</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.submitHandler}
                >
                  Add Customer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
