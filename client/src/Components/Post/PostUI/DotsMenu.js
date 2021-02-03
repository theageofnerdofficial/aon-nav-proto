/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class DotsMenu extends Component {
  render() {
    const { data, FontIcon, labels } = this.props;
    return (
      <div
        className="post-newspost-dots-menu-container rounded shadow"
        id={`panel-${data.id}`}
      >
        {[
          { label: labels.ui.posts.contextDotsMenu.save, icon: 'faSave' },
          { label: labels.ui.posts.contextDotsMenu.hide, icon: 'faEyeSlash' },
          {
            label: labels.ui.posts.contextDotsMenu.hide,
            icon: 'faExternalLinkAlt',
          },
        ].map((btn) => {
          return (
            <button className="btn-sm form-control post-newspost-dots-menu-ui-btn rounded-0">
              <span className="float-left">{FontIcon(btn.icon)}</span>
              {btn.label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default DotsMenu;
