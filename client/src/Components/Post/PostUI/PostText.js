/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostText extends Component {
  render() {
    const { ReactHtmlParser, utils } = this.props;
    const { source, text, userData } = this.props.data;
    const getParsedText = (o, utils, ReactHtmlParser) =>
      ReactHtmlParser(utils.urlify(o.text));
    return (
      <p className="font-weight-light m-0 p-0">
        {getParsedText({ source, text, userData }, utils, ReactHtmlParser)}
      </p>
    );
  }
}

export default PostText;
