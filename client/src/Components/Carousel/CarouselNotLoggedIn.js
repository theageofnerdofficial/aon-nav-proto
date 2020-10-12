import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
import utils from '../Utils/utils/utils';

class CarouselNotLoggedIn extends Component {
  render() {
    return this.props.items.map((item, index) => {
      return (
        <div
          className={`rounded carousel-item ${index === 0 ? 'active' : null}`}
        >
          <div
            className="bg-white m-0 p-0 rounded shadow-sm vertical-center"
            style={{
              height: '100%',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
            }}
          >
            <div
              className={`font-weight-light text-${item.align}`}
              style={{ width: '75%' }}
            >
              <SectionTitle
                title={item.title}
                omitTabline={true}
                flatten={true}
                align={item.align}
              />
              <SectionTitlePostsTitle
                text={utils.str.makeTitleCase(item.mediaSubtype)}
              />
              <button className="btn btn-sm btn-secondary mb-1">Sign Up</button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CarouselNotLoggedIn;