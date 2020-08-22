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
    return (
      <Title>
        <h2 style={{ fontWeight: 300, textTransform: 'uppercase' }}>
          {this.props.title}
        </h2>
      </Title>
    );
  }
}

export default SectionTitle;
