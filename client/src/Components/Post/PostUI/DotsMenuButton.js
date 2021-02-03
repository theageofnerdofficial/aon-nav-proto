/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class DotsMenuButton extends Component {
  render() {
    const { FontIcon } = this.props;

    // :
    const toggleMenu = () => {
      window.alert('menu');
    };

    return (
      <div className="col-1 m-0 p-0 text-right">
        <button
          className="btn btn-sm col-12 text-muted"
          onClick={() => toggleMenu()}
        >
          {FontIcon('faEllipsisV')}
        </button>
      </div>
    );
  }
}

export default DotsMenuButton;
