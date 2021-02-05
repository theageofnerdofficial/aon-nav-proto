// Imports:
import React, { Component } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

class Ad extends Component {
  render() {
    return (
      <div className="col-md-4 m-0 p-0 section-responsive-pr">
        <SectionTitle title={this.props.FontIcon('faAd')} isAd={true} />
        <div className="bg-light rounded shadow-sm" style={{ width: '100%' }}>
          <img
            alt="Placeholder ad"
            className="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW5__jf83H2uCndvgpC-A_J-FtbyiKxsxS5w&usqp=CAU"
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Ad;
