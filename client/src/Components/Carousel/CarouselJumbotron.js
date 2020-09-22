import React, { Component } from 'react';
//import settings from '../../config/settings';
import utils from '../Utils/utils/utils';

class CarouselJumbotron extends Component {
  render() {
    /*
    const getTabColour = (category) => {
      category = category.toLowerCase();
      if (category === 'gaming') {
        return settings.ui.style.sectionTab.gaming.modern;
      } else {
        return settings.ui.style.sectionTab.default;
      }
    };*/

    const populateItems = () => {
      return this.props.items.map((item, index) => {
        return (
          <div className={`carousel-item ${index === 0 ? 'active' : null}`}>
            <div
              //carousel-gradient-overlay
              className="vertical-center  x"
              style={{
                position: 'absolute',

                height: '100%',

                width: '100%',

                zIndex: 1,
              }}
            >
              <div
                className={`font-weight-light text-${item.align}`}
                style={{ width: '75%' }}
              >
                <h1
                  className={`xx font-weight-light text-${item.align} text-dark`}
                  style={{
                    textShadow: '1px 1px 1px #fff',
                    letterSpacing: '-1px',
                  }}
                >
                  {item.title}
                </h1>
                <p className={`font-italic text-${item.align} text-dark`}>
                  {utils.str.makeTitleCase(item.mediaSubtype)}
                </p>
                <button className="btn btn-sm btn-secondary mb-1">
                  Sign Up
                </button>
              </div>
            </div>
            {/*  <img alt={item.alt} className="d-block w-100" src={item.src} />*/}
          </div>
        );
      });
    };
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide rounded shadow-sm"
        data-ride="carousel"
      >
        <ol
          className="carousel-indicators"
          style={{
            marginBottom: '0.01em',
          }}
        >
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner rounded shadow-sm">
          {populateItems()}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default CarouselJumbotron;
