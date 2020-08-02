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
    const sectionTitle = `NintendoUK (${allData ? allData.length : 0})`;
    return (
      <div className="col-md-12 m-0 p-0 row">
        <div className=" col-md-8 m-0 p-0 pr-3">
          <SectionTitle
            tabColour={settings.ui.style.sectionTab.featured}
            title="Featured"
          />
          <SectionTitlePostsTitle text={sectionTitle} />
          <Posts allData={allData} />
        </div>
        <div className=" col-md-4 m-0 pl-3">
          <SectionTitle title="Trending" />
          <div
            className="shadow-sm rounded bg-light"
            style={{ width: '100%', height: 500 }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Home;
