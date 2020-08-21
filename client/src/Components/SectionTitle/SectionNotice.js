import React, { Component } from 'react';
import styled from 'styled-components';

class SectionNotice extends Component {
  render() {
    const Title = styled.div`
      border-bottom: 1px solid #0f0f0f;
      display: block;
      font-size: 1.6em;
      line-height: 1.3;
      letter-spacing: -0.5px;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      position: relative;
      }
    `;
    return (
      <Title>
        <h2
          style={{
            fontWeight: 300,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {this.props.title}
        </h2>
      </Title>
    );
  }
}

export default SectionNotice;
