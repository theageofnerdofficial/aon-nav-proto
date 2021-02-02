// Imports:
import React, { Component } from 'react';
import FontIcon from './Components/FontIcon/FontIcon';
import Posts from './Components/Post/Posts';
import QuizPage from './Components/Quiz/QuizPage';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
// import TrendingList from './Components/Post/Trending/TrendingList';
import formatReddit from './Components/Utils/utils/formatReddit';
import formatTweet from './Components/Utils/utils/formatTweet';
import formatYoutube from './Components/Utils/utils/formatYoutube';
import formatInstagram from './Components/Utils/utils/formatInstagram';
import settings from './config/settings';
import utils from './Components/Utils/utils/utils';

// :
import redditSrc from './helpers/redditSrc';
import twitterSrc from './helpers/twitterSrc';
import youtubeSrc from './helpers/youtubeSrc';
import instagSrc from './helpers/instagSrc';

// :
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_YOUTUBE,
} from './constants';

class Home extends Component {
  componentDidMount() {
    const { sourcesEnabled } = settings.content.newsfeed;
    const {
      newsfeedResetData,
      sourcesGetTwitter,
      sourcesGetReddit,
      // sourcesGetInstagram,
      sourcesGetYoutube,
    } = this.props;

    newsfeedResetData();

    // Get data from enabled sources:
    if (sourcesEnabled.twitter) sourcesGetTwitter();
    if (sourcesEnabled.reddit) sourcesGetReddit();
    if (sourcesEnabled.youtube) sourcesGetYoutube();
    //if (sourcesEnabled.instagram) sourcesGetInstagram();
  }

  componentDidUpdate() {
    const { request } = this.data;
    const { sourcesEnabled } = settings.content.newsfeed;

    // :
    if (twitterSrc.ready(this.props, sourcesEnabled)) request.getTwitterRaw();
    if (redditSrc.ready(this.props, sourcesEnabled)) request.getRedditRaw();
    if (youtubeSrc.ready(this.props, sourcesEnabled)) request.getYoutubeRaw();
    // if (instagSrc.ready(this.props, sourcesEnabled)) request.getInstagRaw();

    // Format raw post data so it's suitable for newsfeed:
    if (sourcesEnabled.twitter) this.data.format.setTwitterFormatted();
    if (sourcesEnabled.reddit) this.data.format.setRedditFormatted();
    if (sourcesEnabled.instagram) this.data.format.setInstagramFormatted();
    if (sourcesEnabled.youtube) this.data.format.setYoutubeFormatted();
    this.data.combine();
  }

  data = {
    combine: () => {
      //
      const {
        redditDataFormatted,
        tweetDataFormatted,
        youtubeDataFormatted,
        instagramDataFormatted,
      } = this.props.dataReducer;

      //
      const {
        dataCombine,
        newsfeedReducer,
        newsfeedPostsHaveCombined,
      } = this.props;

      const { sourcesEnabled } = settings.content.newsfeed;

      // Has all formatted posts:
      const hasRedditF = redditSrc.hasAllF(redditDataFormatted, sourcesEnabled);
      const hasTweetF = twitterSrc.hasAllF(tweetDataFormatted, sourcesEnabled);

      const hasYt = sourcesEnabled.youtube
        ? youtubeDataFormatted && youtubeDataFormatted.length > 0
        : true;

      //
      const hasIF = sourcesEnabled.instagram
        ? instagramDataFormatted && instagramDataFormatted.length > 0
        : true;

      const hasAllF = hasTweetF && hasRedditF && hasIF && hasYt;

      // Combine formatted post/data:
      if (hasAllF && !newsfeedReducer.dataPosts.hasCombined) {
        newsfeedPostsHaveCombined(true);
        dataCombine();
      }
    },

    format: {
      setRedditFormatted: () => {
        redditSrc.format({
          dataFormatReddit: this.props.dataFormatReddit,
          dataFormatRedditStatus: this.props.dataFormatRedditStatus,
          dataReducer: this.props.dataReducer,
          formatReddit: formatReddit,
          newsfeedReducer: this.props.newsfeedReducer,
        });
      },

      setTwitterFormatted: () => {
        twitterSrc.format({
          dataFormatTweets: this.props.dataFormatTweets,
          dataFormatTwitterStatus: this.props.dataFormatTwitterStatus,
          dataReducer: this.props.dataReducer,
          formatTweet: formatTweet,
          newsfeedReducer: this.props.newsfeedReducer,
        });
      },

      setYoutubeFormatted: () => {
        youtubeSrc.format({
          dataFormatYoutube: this.props.dataFormatYoutube,
          dataFormatYoutubeStatus: this.props.dataFormatYoutubeStatus,
          dataReducer: this.props.dataReducer,
          formatYoutube: formatYoutube,
          newsfeedReducer: this.props.newsfeedReducer,
          sourceReducer: this.props.sourceReducer,
        });
      },

      setInstagramFormatted: () => {
        instagSrc.format({
          dataFormatInstagram: this.props.dataFormatInstagram,
          dataFormatInstagramStatus: this.props.dataFormatInstagramStatus,
          dataReducer: this.props.dataReducer,
          formatInstagram: formatInstagram,
          newsfeedReducer: this.props.newsfeedReducer,
        });
      },
    },

    request: {
      // :
      getInstagRaw: () => {
        instagSrc.getRawData({
          dataRawInstagramStatus: this.props.dataRawInstagramStatus,
          dataReducer: this.props.dataReducer,
          dataRequest: this.props.dataRequest,
          newsfeedIncrSourceCount: this.props.newsfeedIncrSourceCount,
          SOURCE_INSTAGRAM: SOURCE_INSTAGRAM,
          sourceReducer: this.props.sourceReducer,
        });
      },

      // :
      getRedditRaw: () => {
        redditSrc.getRawData({
          dataRawRedditStatus: this.props.dataRawRedditStatus,
          dataRequest: this.props.dataRequest,
          newsfeedIncrSourceCount: this.props.newsfeedIncrSourceCount,
          SOURCE_REDDIT,
          sourceReducer: this.props.sourceReducer,
        });
      },

      // :
      getYoutubeRaw: () => {
        youtubeSrc.getRawData({
          dataRawYoutubeStatus: this.props.dataRawYoutubeStatus,
          dataRequest: this.props.dataRequest,
          newsfeedIncrSourceCount: this.props.newsfeedIncrSourceCount,
          SOURCE_YOUTUBE,
          sourceReducer: this.props.sourceReducer,
        });
      },

      // :
      getTwitterRaw: () => {
        twitterSrc.getRawData({
          dataRawTwitterStatus: this.props.dataRawTwitterStatus,
          dataRequest: this.props.dataRequest,
          newsfeedIncrSourceCount: this.props.newsfeedIncrSourceCount,
          SOURCE_TWITTER,
          sourceReducer: this.props.sourceReducer,
        });
      },
    },
  };

  render() {
    const { allData } = this.props.dataReducer;
    const { labels, modalReducer, modalUpdateMode } = this.props;
    // const sectionTitle = `Mix (${allData ? allData.length : 0})`;
    return (
      <div>
        <div className="col-md-12 m-0 p-0 pt-4 pl-1 pb-4 row rounded">
          <div className="col-lg-12 m-0 p-0 mb-4 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Newsfeed"
            />
            <SectionTitlePostsTitle
              text={`${allData ? allData.length : null} Posts`}
            />
            {/*  <PostsDummy /> */}
            <div style={{ height: 540, overflow: 'scroll' }}>
              <Posts
                allData={allData}
                FontIcon={FontIcon}
                labels={labels}
                modalReducer={modalReducer}
                modalUpdateMode={modalUpdateMode}
                utils={utils}
              />
            </div>
          </div>
        </div>
        <br />

        {/* Row 2
         *********************/}
        <div className="col-md-12 m-0 mt-4 p-0 row">
          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="AON Exclusives"
            />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              perferendis, fugit, hic eos animi doloribus.
            </div>
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Today's Quiz"
            />
            <QuizPage
              quizAddAnswer={this.props.quizAddAnswer}
              quizCalculateScore={this.props.quizCalculateScore}
              quizId="5f58f9790a27010acad1d82e"
              quizReducer={this.props.quizReducer}
              quizRequestData={this.props.quizRequestData}
              quizReset={this.props.quizReset}
              quizUpdateQNumber={this.props.quizUpdateQNumber}
              quizUpdateScreen={this.props.quizUpdateScreen}
            />
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle title={FontIcon('faAd')} isAd={true} />
            <div
              className="bg-light rounded shadow-sm"
              style={{ width: '100%' }}
            >
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
        </div>
      </div>
    );
  }
}

export default Home;
