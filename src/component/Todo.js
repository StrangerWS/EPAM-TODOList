import React, { Component } from "react";
import initTasks from "../initTasks";
import Entry from "./list/Entry";
import Create from "./control/Create";
import Search from "./control/Search";
import "./style.css";

class App extends Component {
  tasks = initTasks.slice();
  state = {
    items: this.tasks.slice(),
    modalIsOpen: false
  };

  modalOpen = () => {
    this.setState({
      items: this.tasks.slice(),
      modalIsOpen: true
    });
  };

  taskAdd = (title, description) => {
    let id = this.tasks[this.tasks.length - 1].id - 1;
    let task = {
      id: id,
      title: title,
      description: description,
      isDone: false
    };
    this.tasks.push(task);
    this.setState({
      items: this.tasks.slice(),
      modalIsOpen: false
    });
  };

  render() {
    return <div />;
  }
}

export default App;
