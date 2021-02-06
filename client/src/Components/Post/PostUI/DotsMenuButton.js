/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class DotsMenuButton extends Component {
  render() {
    const { data, FontIcon, newsfeedReducer } = this.props;

    // :
    const dotsMenuVisible = () => {
      return newsfeedReducer.dotsMenu.visibleMenusById.includes(
        data.id.toString()
      );
    };

    return (
      <div className="col-1 m-0 p-0 text-right">
        <button
          className="btn btn-sm col-12 text-muted"
          id={`dotsmenu-${data.id}`}
          onClick={(e) => this.props.dotsMenuToggle({ id: e.currentTarget.id })}
          style={{ background: dotsMenuVisible() ? '#FFF' : '' }}
        >
          {FontIcon('faEllipsisV')}
        </button>
      </div>
    );
  }
}

export default DotsMenuButton;
