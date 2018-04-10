import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <td>
        <p>{this.props.description}</p>
      </td>
    );
  }
}

export default Description;
