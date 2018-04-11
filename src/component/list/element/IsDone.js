import React, { Component } from "react";

class IsDone extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <td className="centered">
        <input
          type="checkbox"
          onChange={this.props.check}
          checked={this.props.isDone ? "checked" : ""}
        />
      </td>
    );
  }
}
export default IsDone;
