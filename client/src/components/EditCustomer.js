import axios from "axios";
import React from "react";

export default class EditCustomer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      gender: "",
      id: this.props.match.params.id,
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
      .patch(`http://localhost:5000/customers/${this.state.id}`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        gender: this.state.gender,
      })
      .then((res) => this.props.history.push("/customers"))
      .catch((er) => console.log(er));
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/customers/${this.state.id}`)
      .then((res) => {
        this.setState({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          gender: res.data.gender,
        });
      })
      .catch((err) => console.log(err));
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
                <label for="first_name" className="active">
                  First Name
                </label>
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
                <label for="last_name" className="active">
                  Last Name
                </label>
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
                <label for="gender" className="active">
                  Gender
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.submitHandler}
                >
                  Edit Customer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
