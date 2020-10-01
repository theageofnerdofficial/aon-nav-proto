import React, { Component } from 'react';

class BrandColourAddInfo extends Component {
  render() {
    return (
      <p
        className="font-italic font-weight-light mt-2"
        style={{ fontSize: '0.85em' }}
      >
        NOTE: try for official trademark colours. Nintendo uses #e4000f for
        example. Try{' '}
        <a
          href="https://encycolorpedia.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Encycolorpedia
        </a>
        ? Also, use hexidecimal. Chrome, Firefox, and Opera have hex value
        selections in their colour pickers.{' '}
        <a
          href="https://css-tricks.com/color-inputs-a-deep-dive-into-cross-browser-differences/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Read here
        </a>{' '}
        for more.
      </p>
    );
  }
}

export default BrandColourAddInfo;
