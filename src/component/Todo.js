import React, { Component } from "react";
import initTasks from "../initTasks";
import Entry from "./list/Entry";
import Create from "./control/Create";
import Search from "./control/Search";
import Modal from "./modal/Modal";
import "./style.css";

class App extends Component {
  allTasks = initTasks.slice();
  state = {
    tasks: this.allTasks.slice(),
    modalIsOpen: false
  };

  modalOpen = () => {
    this.setState({
      tasks: this.tasks.slice(),
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
      tasks: this.tasks.slice(),
      modalIsOpen: false
    });
  };

  taskDelete(task) {}

  render() {
    const entries = this.state.tasks
      .slice()
      .map((task, index) => (
        <Entry task={task} clickDelete={this.taskDelete.bind(this, task)} />
      ));
    return (
      <div class="container top-spaced">
        <div className="input-group">
          <Search />
          <Create />
        </div>

        <table class="table table-striped spaced">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">IS DONE</th>
              <th scope="col">TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>{entries}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
