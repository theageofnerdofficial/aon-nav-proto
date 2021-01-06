/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostText extends Component {
  render() {
    let { source, text, userData } = this.props.data;
    let { ReactHtmlParser, utils } = this.props;
    return (
      <p className="font-weight-light p-0 m-0">
        {this.props.postElem.text.get(
          { source, text, userData },
          utils,
          ReactHtmlParser
        )}
      </p>
    );
  }
}

export default PostText;
