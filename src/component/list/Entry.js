import React, { PureComponent } from "react";
import Delete from "./element/Delete";
import Description from "./element/Description";
import Title from "./element/Title";
import IsDone from "./element/IsDone";
import "../style.css";

class Entry extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDone: props.task.isDone
    };
  }

  check = () => {
    this.props.task.isDone = !this.props.task.isDone;
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.task.id}</th>
        <IsDone key="isDone" isDone={this.state.isDone} check={this.check} />
        <Title key="title" title={this.props.task.title} />
        <Description
          key="description"
          description={this.props.task.description}
        />
        <Delete
          key="deleteBtn"
          clickDelete={this.props.clickDelete.bind(this, this.props.task)}
        />
      </tr>
    );
  }
}

export default Entry;
