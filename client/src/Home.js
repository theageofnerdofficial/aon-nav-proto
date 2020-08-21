// Imports:
import React, { Component } from 'react';
import Posts from './Components/Post/Posts';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import formatTweet from './Components/Utils/utils/formatTweet';
import formatReddit from './Components/Utils/utils/formatReddit';
import settings from './config/settings';
import { SOURCE_REDDIT, SOURCE_TWITTER } from './constants';

// Prevents repeated requests:
let dataPosts = {
  hasCombined: false,
  hasFormatted: {
    reddit: false,
    twitter: false,
  },
};

class Home extends Component {
  componentDidMount() {
    this.data.request.getRedditRaw();
    this.data.request.getTwitterRaw();
  }

  componentDidUpdate() {
    this.data.format.setRedditFormatted();
    this.data.format.setTwitterFormatted();
    this.data.combine();
  }

  data = {
    combine: () => {
      const {
        redditDataFormatted,
        tweetDataFormatted,
      } = this.props.dataReducer;
      // Ensure we've at least one formatted post from each source:
      const hasRedditFormatted =
        redditDataFormatted && redditDataFormatted.length > 0;
      const hasTweetFormatted =
        tweetDataFormatted && tweetDataFormatted.length > 0;
      // Combine formatted post/data:
      if (hasRedditFormatted && hasTweetFormatted && !dataPosts.hasCombined) {
        dataPosts.hasCombined = true;
        this.props.dataCombine();
      }
    },
    format: {
      setRedditFormatted: () => {
        let formattedRedditData = [];
        const { redditDataRaw } = this.props.dataReducer;
        const hasRedditRaw = redditDataRaw && redditDataRaw.length > 0;
        // If we have Reddit raw data but it's not formatted, format it:
        if (hasRedditRaw && !dataPosts.hasFormatted.reddit) {
          dataPosts.hasFormatted.reddit = true;
          redditDataRaw.forEach((r) => {
            formattedRedditData.push(formatReddit.formatRedditData(r.data));
          });
          this.props.dataFormatReddit(formattedRedditData);
        }
      },
      setTwitterFormatted: () => {
        let formattedTweetData = [];
        const { tweetDataRaw } = this.props.dataReducer;
        const hasTweetsRaw = tweetDataRaw && tweetDataRaw.statuses;
        // If we have Twitter raw data but it's not formatted, format it:
        if (hasTweetsRaw && !dataPosts.hasFormatted.twitter) {
          dataPosts.hasFormatted.twitter = true;
          tweetDataRaw.statuses.forEach((t) => {
            formattedTweetData.push(formatTweet.formatTweetData(t));
          });
          this.props.dataFormatTweets(formattedTweetData);
        }
      },
    },
    request: {
      getRedditRaw: () => {
        this.props.dataRequest({
          count: 15,
          endpoint: 'hot',
          src: SOURCE_REDDIT,
          user: 'nintendo',
        });

        this.props.dataRequest({
          count: 15,
          endpoint: 'hot',
          src: SOURCE_REDDIT,
          user: 'xbox',
        });

        this.props.dataRequest({
          count: 15,
          endpoint: 'hot',
          src: SOURCE_REDDIT,
          user: 'playstation',
        });
      },
      getTwitterRaw: () => {
        this.props.dataRequest({
          count: 15,
          endpoint: 'search%2Ftweets',
          src: SOURCE_TWITTER,
          user: 'nintendouk',
          // Refinements/queries if necessary: q: 'zelda since:2019-07-11',
        });
        //
        //
        this.props.dataRequest({
          count: 15,
          endpoint: 'search%2Ftweets',
          src: SOURCE_TWITTER,
          user: 'playstation',
          // Refinements/queries if necessary: q: 'zelda since:2019-07-11',
        });
      },
    },
  };
  render() {
    const { allData } = this.props.dataReducer;
    const sectionTitle = `Mix (${allData ? allData.length : 0})`;
    return (
      <div>
        <div className=" col-md-12 m-0 p-0 row">
          <div className="col-md-7 m-0 p-0 pr-3">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Featured"
            />
            <div>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      // src="..."
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="Third slide"
                    />
                  </div>
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
            </div>
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="More stuff"
            />
          </div>
          <div className=" col-md-5 m-0 p-0">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Nerd Feed"
            />
            <SectionTitlePostsTitle text={sectionTitle} />
            <Posts allData={allData} />
          </div>
          <div className=" col-md-4 m-0 pl-3">
            <SectionTitle title="Trending" />
            <div
              className="shadow-sm rounded bg-custom-panel"
              style={{
                height: 500,
                width: '100%',
              }}
            >
              <img
                alt="Test"
                style={{ width: '100%' }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-N6U3fMPOy2jNApLFqOPJFpxuuamBIi1GZA&usqp=CAU"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
