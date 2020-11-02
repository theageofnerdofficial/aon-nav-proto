import React, { Component } from 'react';
import NewsPost from '../NewsPost';

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
    const content = ['Lorem ipsum ksldkdlslkskd'];

    const getPost = (el, index) => {
      return (
        <NewsPost
          index={index}
          isOfficial={true}
          sourcename="Sourcename"
          sourcepost={content[Math.floor(Math.random() * content.length)]}
          thumbnail={arr[Math.floor(Math.random() * arr.length)]}
        />
      );
    };
    return (
      <div>
        <div
          className="trending-list-wrapper col-12 m-0 mb-4 p-0 rounded row shadow-sm"
          style={{ height: '540px', overflow: 'scroll' }}
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
