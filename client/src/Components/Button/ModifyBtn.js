import React, { Component } from 'react';
import { fetchConstructor } from '../../actions';
import FontIcon from '../FontIcon/FontIcon';
import labels from '../../config/labels';

class ModifyBtn extends Component {
  render() {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          const { props } = this;
          const getUrl = () => {
            let url;
            switch (props.action[0]) {
              case 'promote':
                url = '/user/promote';
                break;
              case 'demote':
                url = '/user/demote';
                break;
              case 'toggleBan':
                url = '/user/toggleBan';
                break;
              default:
                url = '/';
            }
            return url;
          };

          fetchConstructor(
            {
              url: getUrl(),
              body: JSON.stringify({ userId: this.props.userId }),
              method: 'PUT',
              func: {
                checkErrors: (res) => {
                  if (res.errors) {
                    const warnings = res.message;
                    props.flashMsgUpdate({
                      msg: warnings.split(',')[0],
                      style: 'danger',
                    });
                    props.flashMsgFlash();
                    return false;
                  } else {
                    props.flashMsgUpdate({
                      msg: `${labels.response.success}: this user was successfully ${props.action[1]}.`,
                      style: 'success',
                    });
                    props.flashMsgFlash();
                    // props.sourcesReset();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }
                },
                checkCatch: (e) => {
                  props.flashMsgUpdate({
                    msg: e.message,
                    style: 'danger',
                  });
                },
              },
            },
            this.props
          );
        }}
        className={`btn-light btn btn-sm form-control text-${this.props.color} font-weight-light   form-control p-0 rounded-0 text-center text-uppercase`}
      >
        {FontIcon(this.props.fontIcon)}&nbsp;{this.props.label}
      </button>
    );
  }
}

export default ModifyBtn;
