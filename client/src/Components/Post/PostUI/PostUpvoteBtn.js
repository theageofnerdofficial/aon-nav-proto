/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostUpvoteBtn extends Component {
  render() {
    const { FontIcon } = this.props;

    // :
    const upvotePost = () => {
      alert('upvote');
    };

    return (
      <div className="col-3 m-0 p-0 text-center">
        <button className="btn btn-sm col-12" onClick={() => upvotePost()}>
          33 {FontIcon('faArrowUp')}
        </button>
      </div>
    );
  }
}

export default PostUpvoteBtn;
