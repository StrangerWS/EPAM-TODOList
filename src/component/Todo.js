import React, { Component } from "react";
import Entry from "./list/Entry";
import Search from "./control/Search";
import Modal from "./control/Modal";
import "./style.css";

class App extends Component {
  state = {
    storage: []
  };

  handleAdd = (title, description) => {
    let length = this.state.storage.length
    let id = (length === 0) ? length + 1: this.state.storage[length - 1].id + 1;
    let task = {
      id,
      title,
      description,
      isDone: false
    };
    let newStorage = this.state.storage.slice()
    newStorage.push(task);
    this.setState({
      storage: newStorage.slice()
    });
  };

  handleDelete(id) {
    this.state.storage.indexOf({id: id});
    this.state.storage.splice(id, 1);
    this.setState({});
    //this.state.storage.filter((item)=>{return item !== id});
  }

  render() {
    const entries = this.state.storage
      .slice()
      .map(task => (
        <Entry
          key={task.id}
          task={task}
          clickDelete={this.handleDelete.bind(this)}
        />
      ));
    return (
      <div className="container top-spaced">
        <div className="input-group">
          <Search />
          <Modal handleSave={this.handleAdd} />
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
