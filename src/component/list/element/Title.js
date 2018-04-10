import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <td>
        <p>{this.props.title}</p>
      </td>
    );
  }
}
export default Title;
