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
