import React, { Component } from 'react';
import labels from '../../config/labels';
import FontIcon from '../FontIcon/FontIcon';
import SectionTitle from '../SectionTitle/SectionTitle';

class CarouselNotLoggedIn extends Component {
  render() {
    const { items } = this.props;
    return items.map((item, index) => {
      return (
        <div
          className={`rounded carousel-item ${index === 0 ? 'active' : null}`}
        >
          <div
            className="bg-white m-0 p-0 rounded vertical-center"
            style={{
              height: '100%',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
            }}
          >
            <div
              className={`font-weight-light text-${item.align}`}
              style={{ width: '100%' }}
            >
              <SectionTitle
                align={item.align}
                flatten={true}
                omitTabline={true}
                title={item.title}
              />
              {/* 
              <SectionTitlePostsTitle text={utils.str.makeTitleCase(item.mediaSubtype)}/>*/}
              <button className="btn btn-sm btn-light mb-1 text-uppercase">
                {labels.ui.home.welcomeSignUpPrompt} {FontIcon('faArrowRight')}
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CarouselNotLoggedIn;
