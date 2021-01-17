import React, { Component } from 'react';

class ModalFooter extends Component {
  render() {
    return (
      <div className="modal-footer">
        <button
          className="btn btn-modal-close btn-secondary btn-sm"
          data-dismiss="modal"
          type="button"
        >
          Close
        </button>
      </div>
    );
  }
}

export default ModalFooter;
