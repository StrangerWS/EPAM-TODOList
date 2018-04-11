import React, { Component } from "react";

class Title extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <td>
        <p>{this.props.title}</p>
      </td>
    );
  }
}
export default Title;
