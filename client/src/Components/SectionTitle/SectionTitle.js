import React, { Component } from 'react';
import styled from 'styled-components';

class SectionTitle extends Component {
  render() {
    const Title = styled.div`
      border-bottom: 1px solid #0f0f0f;
      display: block;
      line-height: 1.3;
      letter-spacing: -0.5px;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      position: relative;
      &:before {
        background: ${this.props.tabColour ? this.props.tabColour : '#ccc'};
        bottom: 0;
        content: '';
        display: block;
        height: 5px;
        left: 0;
        position: absolute;
        width: 25px;
      }
    `;
    const TitleAd = styled.div`
      border-bottom: 1px dashed #ccc;
      display: block;
      line-height: 1.3;
      letter-spacing: -0.5px;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      position: relative;
      &:before {
        background: ${this.props.tabColour ? this.props.tabColour : '#ccc'};
        bottom: 0;
        content: '';
        display: block;
        height: 5px;
        right: 0;
        position: absolute;
        width: 25px;
      }
    `;

    const titleAd = () => {
      return (
        <TitleAd>
          <h2
            className="text-muted"
            style={{
              fontWeight: 300,
              textTransform: 'uppercase',
              textAlign: this.props.isAd ? 'right' : 'left',
            }}
          >
            {this.props.title}
          </h2>
        </TitleAd>
      );
    };

    const title = () => {
      return (
        <Title>
          <h2
            style={{
              fontWeight: 300,
              textTransform: 'uppercase',
              textAlign: 'left',
            }}
          >
            {this.props.title}
          </h2>
        </Title>
      );
    };

    return this.props.isAd ? titleAd() : title();
  }
}

export default SectionTitle;
