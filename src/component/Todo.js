import React, { Component } from "react";
import { storage } from "../initTasks";
import Entry from "./list/Entry";
import Search from "./control/Search";
import Modal from "./control/Modal";
import "./style.css";

class App extends Component {
  allTasks = storage.slice();
  state = {
    tasks: this.allTasks.slice(),
    modalIsOpen: false
  };

  taskAdd = (title, description) => {
    let id = this.allTasks[this.allTasks.length - 1].id - 1;
    let task = {
      id: id,
      title: title,
      description: description,
      isDone: false
    };
    storage.push(task);
    this.setState({
      tasks: this.allTasks.slice(),
      modalIsOpen: false
    });
  };

  taskDelete(task) {
    let idxItem = this.state.tasks.indexOf(task);
    this.state.tasks.splice(idxItem, 1);

    idxItem = this.allTasks.indexOf(task);
    this.allTasks.splice(idxItem, 1);

    this.setState({});
  }

  render() {
    const entries = this.state.tasks
      .slice()
      .map((task, index) => (
        <Entry
          key={task.id}
          task={task}
          clickDelete={this.taskDelete.bind(this, task)}
        />
      ));
    return (
      <div className="container top-spaced">
        <div className="input-group">
          <Search />
          <Modal handleClickSave={this.taskAdd} />
        </div>

        <table className="table table-striped spaced">
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
