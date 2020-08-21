import React, { Component } from 'react';

class SectionTitlePostsNotice extends Component {
  render() {
    return (
      <h5 className="font-weight-light my-3 text-muted text-center">
        {this.props.text}
      </h5>
    );
  }
}

export default SectionTitlePostsNotice;
