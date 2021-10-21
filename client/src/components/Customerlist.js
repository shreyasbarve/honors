import { Component } from "react";
import axios from "axios";

export default class Customerlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchTerm: "",
    };

    this.searchText = this.searchText.bind(this);
  }

  deleteHandler(id) {
    axios
      .delete(`http://localhost:5000/customers/${id}`)
      .then((res) => {
        this.state.data.filter((elements) => elements._id !== id);
      })
      .catch((err) => console.log(err));
  }

  searchText(searchTerm) {
    this.setState({ searchTerm: searchTerm });
  }

  renderTableData() {
    return this.state.data.map((el) => {
      if (
        this.state.searchTerm === "" ||
        el.first_name
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        el.last_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      ) {
        return (
          <tr>
            <td>{el.first_name}</td>
            <td>{el.last_name}</td>
            <td>{el.gender}</td>
            <td>
              <button
                className="waves-effect waves-light btn"
                onClick={() => {
                  this.props.history.push(`/editcustomer/${el._id}`);
                }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="waves-effect waves-light btn"
                onClick={() => this.deleteHandler(el._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers/")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s4"></div>
              <div className="input-field col s4">
                <input
                  id="search_term"
                  name="search_term"
                  type="text"
                  className="validate"
                  value={this.state.searchTerm}
                  onChange={(e) => this.searchText(e.target.value)}
                />
                <label for="search_term">Search Text</label>
              </div>
              <div className="input-field col s4"></div>
            </div>
          </form>
        </div>
        <table className="higlight">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
