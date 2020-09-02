/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class PostsDummy extends Component {
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
      'This new product releases tomorrow. Be the first to get your hands on it!',
      'We are celebrating 25 years of being in business. To mark this occassion, we shall be doing things.',
      'Be the first to see our new #product. See a special sneak preview now',
      'Can you answer the following question?: what is love? It is something very few people know as the themetune to #product',
      'One of our representatives will be delivering a special AMA thread. Be sure to check in.',
      '#product is making its way onto a new platform. We cannot wait.',
      'An original artefact has been uncovered and in mint condition. Very rare.',
      'Forget Shark Month — this is Dinosaur Year. www.website.com',
      'Yet another placeholder for something exciting happening',
    ];
    const getPost = () => {
      return (
        <div className="col-12 p-0 py-3 m-0 row shadow-sm">
          <div className="col-1 p-0 m-0 text-center">
            <img
              className="rounded ml-1 post-thumbnail"
              src={`img/thumbnails/${
                arr[Math.floor(Math.random() * arr.length)]
              }.svg`}
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-10 font-weight-light" style={{ lineHeight: 1.2 }}>
            {content[Math.floor(Math.random() * content.length)]}
            <br />
          </div>
          <div className="col-1 p-0 m-0">
            <div style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control text-muted">
                {FontIcon('faEllipsisV')}
              </button>
            </div>
            <div className="vertical-bottom" style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control vertical-bottom text-muted">
                {FontIcon('faChevronDown')}
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
          style={{ height: '300px', overflow: 'scroll', paddingBottom: 5 }}
        >
          {Array(30)
            .fill()
            .map(() => getPost())}
        </div>
      </div>
    );
  }
}

export default PostsDummy;
