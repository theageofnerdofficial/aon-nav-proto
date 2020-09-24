import React, { Component } from 'react';
import FontIcon from '../../FontIcon/FontIcon';

class TrendingList extends Component {
  render() {
    const arr = [
      'gaming-nintendo',
      'gaming-sega',
      'gaming-ps',
      'gaming-xbox',
      'comics-marvel',
      'comics-dc',
      'toys-lego',
      'tvfilm-netflix',
      'tvfilm-prime',
      'wrestling-wwe',
      'wrestling-impact',
    ];
    const content = [
      'This new product releases tomorrow. Be the first to get your hands on it! Insofar grandeur victorious zarathustra right. Madness burying deceptions war right virtues. Ubermensch christianity play overcome morality overcome war',
      'We are celebrating 25 years of being in business. To mark this occassion, we shall be doing things.',
      'Be the first to see our new #product. See a special sneak preview now. Pinnacle zarathustra truth sea ascetic pious.',
      'Can you answer the following question?: what is love? It is something very few people know as the themetune to #product. Farful intentions grandeur hope burying sea reason faith will deceptions',
      'One of our representatives sure to check in. Horror zarathustra.',
      '#product is making its way onto a new platform. We cannot wait.',
      'An original artefact has been uncovered and in mint condition. Very rare.',
      'Forget Shark Month — this is Dinosaur Year. www.website.com Five hours of community service cleanin up that ol mess you caused.',
      'Yet another placeholder for something exciting happening. Spirit free eternal-return.',
    ];
    const getPost = (el, index) => {
      return (
        <div className="col-12 p-0 py-1 m-0 row shadow-sm">
          <div className="col-2 p-0 m-0 text-center">
            <div
              className="shadow-sm"
              style={{
                backgroundColor: 'white',
                width: '25px',
                height: '25px',
                textAlign: 'center',
                position: 'absolute',

                borderRadius: '0 10px 0 10px',
                top: 0,
              }}
            >
              {index + 1}
            </div>
            <img
              className="rounded ml-1 post-thumbnail p-1"
              src={`img/thumbnails/${
                arr[Math.floor(Math.random() * arr.length)]
              }.svg`}
              style={{ width: '100%' }}
            />
          </div>
          <div
            className=" col-9 font-weight-light"
            style={{ lineHeight: 1.2, height: 85, overflow: 'scroll' }}
          >
            <b
              className="text-muted"
              style={{
                //float: 'right',
                fontSize: 10,
                paddingBottom: 5,
                width: '100%',
                textAlign: 'right',
                textTransform: 'uppercase',
                textDecoration: 'underline',
              }}
            >
              Sourcename - Source - Official
            </b>
            <br />
            {content[Math.floor(Math.random() * content.length)]}
            <br />
          </div>
          <div className="col-1 p-0 m-0">
            <div style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control text-muted">
                {FontIcon('faArrowUp')}
              </button>
            </div>
            <div className="vertical-bottom" style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control vertical-bottom text-muted">
                {FontIcon('faEllipsisV')}
              </button>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div
          className="bg-light shadow-sm rounded col-12 p-0 m-0 mb-4 row"
          style={{ height: '470px', overflow: 'scroll' }}
        >
          {Array(5)
            .fill()
            .map((el, index) => getPost(el, index))}
        </div>
      </div>
    );
  }
}

export default TrendingList;
