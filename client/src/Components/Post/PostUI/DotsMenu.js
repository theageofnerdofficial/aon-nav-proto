/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import utils from '../../../config/utils';

class DotsMenu extends Component {
  /*
  The dots menu panel should appear in line with the dots menu button.
  In order to calculate this position, we need to find the offset "left"
  value of the post title and the offset "left" value of the dots menu button.
  We then subtract the offset left value of the post from the dots menu 
  button and assign this value to the dots menu panel.

  A way this could be improved is adding an event listener for when the page is
  resized so that the panel changes position responsively, but for now I will
  leave it as it is and come back to improve this later.
  */
  dynamicMenuPos = {
    getElem: {
      postPanel: {
        getOffset(id, pos, dynamicMenuPos) {
          const { getElem } = dynamicMenuPos;
          const postOffset = getElem.postTitle.getOffset(id)[pos];
          const btnOffset = getElem.postDotsMenuBtn.getOffset(id)[pos];
          return btnOffset - postOffset;
        },
      },
      postTitle: {
        getOffset(id) {
          const postTitleElem = document.getElementById(`feed-title-${id}`);
          return utils.dom.pos.getOffset(postTitleElem);
        },
      },
      postDotsMenuBtn: {
        getOffset(id) {
          const dotsMenuBtn = document.getElementById(`dotsmenu-${id}`);
          return utils.dom.pos.getOffset(dotsMenuBtn);
        },
      },
    },
  };

  handleBtnClick(btnLabel, labels) {
    const { save, hide, visit } = labels.ui.posts.contextDotsMenu;
    if (btnLabel === save) {
      alert('save post func');
    } else if (btnLabel === hide) {
      alert('hide post func');
    } else if (btnLabel === visit) {
      alert('visit external link');
    }
  }

  render() {
    const { data, FontIcon, labels, newsfeedReducer } = this.props;

    // If the ID of this post is included in the visibleMenusById arr, show it:
    const shouldDotsMenuBeVisible = () => {
      return newsfeedReducer.dotsMenu.visibleMenusById.includes(
        data.id.toString()
      );
    };

    // Assign offset value to variable to keep things tidy:
    const offsetPosL = this.dynamicMenuPos.getElem.postPanel.getOffset(
      data.id,
      'left',
      this.dynamicMenuPos
    );

    return (
      <div
        className="post-newspost-dots-menu-container rounded shadow"
        id={`panel-${data.id}`}
        style={{
          display: shouldDotsMenuBeVisible() ? 'block' : 'none',
          left: `${offsetPosL}px`,
          position: 'absolute',
        }}
      >
        {[
          { label: labels.ui.posts.contextDotsMenu.save, icon: 'faSave' },
          { label: labels.ui.posts.contextDotsMenu.hide, icon: 'faEyeSlash' },
          {
            label: labels.ui.posts.contextDotsMenu.visit,
            icon: 'faExternalLinkAlt',
          },
        ].map((btn) => {
          return (
            <button
              className="btn-sm form-control post-newspost-dots-menu-ui-btn rounded-0"
              onClick={() => {
                this.handleBtnClick(btn.label, labels);
              }}
            >
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
