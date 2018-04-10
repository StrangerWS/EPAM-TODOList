import React, { PureComponent } from "react";

class Delete extends PureComponent {
  render() {
    return (
      <td>
        <button className="btn btn-danger centered">Delete</button>
      </td>
    );
  }
}

export default Delete;
