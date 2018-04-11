import React, { Component } from "react";

class Delete extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <td>
        <button
          className="btn btn-danger centered"
          onClick={this.props.clickDelete}
        >
          Delete
        </button>
      </td>
    );
  }
}

export default Delete;
