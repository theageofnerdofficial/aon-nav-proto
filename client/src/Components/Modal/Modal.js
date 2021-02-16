/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { modalReducer, userLogin } = this.props;

    // Get size modal should be depending on mode:
    const getModalSize = () => (modalReducer.size ? modalReducer.size : null);

    return (
      <div
        aria-hidden="true"
        aria-labelledby="mainModalLongTitle"
        className="modal fade"
        id="mainModalLong"
        role="dialog"
        tabIndex="-1"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${getModalSize()}`}
          role="document"
        >
          <div className="modal-content">
            {/* put modal header, body, and footer here */}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
