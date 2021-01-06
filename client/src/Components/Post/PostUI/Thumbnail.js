/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    let { imgSrc, source } = this.props;
    return (
      <React.Fragment>
        <img
          alt={`Thumbnail for ${source} post`}
          className="mx-1 rounded"
          src={imgSrc}
          style={{ border: '10px', width: '40px' }}
        />
      </React.Fragment>
    );
  }
}

export default Thumbnail;
