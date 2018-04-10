import React, { Component } from "react";

class Modal extends Component {
  handleClickSave = () => {
    this.props.handleClickSave(
      this.refs.newTitle.value,
      this.refs.newDescription.value
    );
  };

  handleClickSave = this.handleClickSave.bind(this);

  render() {
    return (
      <div>
        <button
          className="btn btn-primary right-floated"
          data-toggle="modal"
          data-target="#todoAdder"
        >
          Add TODO
        </button>

        <div>
          <div
            className="modal fade"
            id="todoAdder"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add TODO
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    ref="newTitle"
                    className="form-control top-spaced"
                    placeholder="Enter title"
                  />
                  <textarea
                    ref="newDescription"
                    className="form-control"
                    placeholder="Enter description"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleClickSave}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
