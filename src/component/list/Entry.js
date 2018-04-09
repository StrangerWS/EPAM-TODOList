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
    this.props.item.isDone = !this.props.item.isDone;
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.task.id}</th>
        <IsDone isDone={this.state.isDone} check={this.check} />
        <Title title={this.props.task.title} />
        <Description description={this.props.task.description} />
        <Delete
          clickDelete={this.props.clickDelete.bind(this, this.props.task)}
        />
      </tr>
    );
  }
}

export default Entry;
