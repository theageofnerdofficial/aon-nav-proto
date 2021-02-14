/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostText extends Component {
  render() {
    const { ReactHtmlParser, utils } = this.props;
    const { settings, source, text, userData } = this.props.data;

    // Methods for formatting post text:
    const formatText = {
      get(forbiddenCharacters) {
        const txt = formatText.parseHTML(
          { source, text, userData },
          utils,
          ReactHtmlParser
        );
        return forbiddenCharacters.enabled
          ? txt
          : formatText.removeForbiddenChars(forbiddenCharacters, txt);
      },

      parseHTML: (o, utils, ReactHtmlParser) =>
        ReactHtmlParser(utils.urlify(o.text)),

      removeForbiddenChars(forbiddenCharacters, post) {
        /*
        forbiddenCharacters.arr.forEach((char) => {
          let reg = new RegExp(char, 'g');
          post[0] = post[0].replaceAll(reg, '');
        });*/
        return post;
      },
    };

    return (
      <p className="font-weight-light m-0 mt-2 p-0">
        {formatText.get(settings.content.newsfeed.forbiddenCharacters)}
      </p>
    );
  }
}

export default PostText;
