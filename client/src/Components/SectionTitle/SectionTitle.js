import React, { Component } from 'react';
import styled from 'styled-components';

class SectionTitle extends Component {
  render() {
    /* Add padding/margin if "flatten" prop is not passed:
     *************************************************************/
    const addPaddingMargin = () =>
      this.props.flatten
        ? `margin-bottom: 0rem; padding-bottom: 0rem;`
        : `margin-bottom: 1rem; padding-bottom: 0.5rem;`;

    /* Add coloured tab w/ underline if omitTabline is not passed:
     *************************************************************/
    const addTabline = () => {
      return `border-bottom: 1px solid #0f0f0f;
      &:before {background: ${
        this.props.tabColour ? this.props.tabColour : '#ccc'
      };
        bottom: 0;
        content: '';
        display: block;
        height: 5px;
        left: 0;
        position: absolute;
        width: 25px;
      }`;
    };

    /* Title regular style:
     *************************************************************/
    const Title = styled.div`
      display: block;
      letter-spacing: -0.5px;
      line-height: 1;
      ${addPaddingMargin()}
      position: relative;
      text-align: center !important;
      ${this.props.omitTabline ? null : addTabline()};
    `;

    /* Title ad style:
     *************************************************************/
    const TitleAd = styled.div`
      border-bottom: 1px dashed #ccc;
      display: block;
      line-height: 1;
      letter-spacing: -0.5px;
      ${addPaddingMargin()}
      position: relative;
      ${this.props.omitTabline ? null : addTabline()}
      }
    `;

    /* Is title a regular title (not an ad)? Do this:
     *************************************************************/
    const title = () => {
      return (
        <Title>
          <h2
            style={{
              fontWeight: 300,
              textAlign: this.props.align ? this.props.align : 'left',
              textTransform: 'uppercase',
            }}
          >
            {this.props.title}
          </h2>
        </Title>
      );
    };
    /* Is title an ad? Do this:
     *************************************************************/
    const titleAd = () => {
      return (
        <TitleAd>
          <h2
            className="text-muted"
            style={{
              fontWeight: 300,
              textAlign: this.props.isAd ? 'right' : 'left',
              textTransform: 'uppercase',
            }}
          >
            {this.props.title}
          </h2>
        </TitleAd>
      );
    };

    return this.props.isAd ? titleAd() : title();
  }
}

export default SectionTitle;
