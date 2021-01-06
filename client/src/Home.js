// Imports:
import React, { Component } from 'react';
import CarouselJumbotron from './Components/Carousel/CarouselJumbotron';
import FontIcon from './Components/FontIcon/FontIcon';
import Posts from './Components/Post/Posts';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import TrendingList from './Components/Post/Trending/TrendingList';
import formatReddit from './Components/Utils/utils/formatReddit';
import formatTweet from './Components/Utils/utils/formatTweet';
import formatInstagram from './Components/Utils/utils/formatInstagram';
import settings from './config/settings';
import utils from './Components/Utils/utils/utils';

import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_YOUTUBE,
} from './constants';
import newsFeedFilter from './helpers/newsfeedFilter';
import format from './config/format';
import formatYoutube from './Components/Utils/utils/formatYoutube';
import QuizPage from './Components/Quiz/QuizPage';

// Variables (to be moved to reducer as state eventually):
let formattedTweets = false;
let formattedRedditPosts = false;
let formattedInstagrams = false;
let formattedYoutubes = false;
//
let gotTwitterData = false;
let gotRedditData = false;
let gotInstagramData = false;
let gotYoutubeData = false;

class Home extends Component {
  componentDidMount() {
    const { sourcesEnabled } = settings.content.newsfeed;
    const {
      newsfeedResetData,
      sourcesGetTwitter,
      sourcesGetReddit,
      sourcesGetInstagram,
      sourcesGetYoutube,
    } = this.props;

    newsfeedResetData();

    // Get data from enabled sources:
    if (sourcesEnabled.twitter) sourcesGetTwitter();
    if (sourcesEnabled.reddit) sourcesGetReddit();
    if (sourcesEnabled.instagram) sourcesGetInstagram();
    if (sourcesEnabled.youtube) sourcesGetYoutube();
  }

  componentDidUpdate() {
    const { request } = this.data;
    const { sourcesEnabled } = settings.content.newsfeed;
    const {
      sourcesTwitterData,
      sourcesRedditData,
      sourcesInstagramData,
      sourcesYoutubeData,
    } = this.props.sourceReducer;

    // If we've got source data but not post data from sources, get it:
    if (sourcesEnabled.twitter && sourcesTwitterData && !gotTwitterData)
      request.getTwitterRaw();
    if (sourcesEnabled.reddit && sourcesRedditData && !gotRedditData)
      request.getRedditRaw();
    if (sourcesEnabled.instagram && sourcesInstagramData && !gotInstagramData)
      request.getInstagramRaw();
    if (sourcesEnabled.youtube && sourcesYoutubeData && !gotYoutubeData)
      request.getYoutubeRaw();

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
        instagramDataFormatted,
        youtubeDataFormatted,
      } = this.props.dataReducer;

      //
      const {
        dataCombine,
        newsfeedReducer,
        newsfeedPostsHaveCombined,
      } = this.props;

      const { sourcesEnabled } = settings.content.newsfeed;
      //

      // Ensure we've at least one formatted post from each source:
      // If source is enabled check we have all its data formatted. If it's not enabled return true to skip
      const hasRedditF = sourcesEnabled.reddit
        ? redditDataFormatted && redditDataFormatted.length > 0
        : true;

      const hasTweetF = sourcesEnabled.twitter
        ? tweetDataFormatted && tweetDataFormatted.length > 0
        : true;

      const hasIF = sourcesEnabled.instagram
        ? instagramDataFormatted && instagramDataFormatted.length > 0
        : true;

      const hasYt = sourcesEnabled.youtube
        ? youtubeDataFormatted && youtubeDataFormatted.length > 0
        : true;

      /*
      var x = newsFeedFilter(
        settings.content.newsfeed.sourcesEnabled,
        hasTweetF,
        hasRedditF,
        hasIF
      );*/

      //
      // if enabled source AND has source
      //
      //

      // do all enabled sources have formatted sources?
      //
      const hasAllF = hasTweetF && hasRedditF && hasIF && hasYt;

      // Combine formatted post/data:
      if (hasAllF && !newsfeedReducer.dataPosts.hasCombined) {
        newsfeedPostsHaveCombined(true);
        dataCombine();
      }
    },

    format: {
      setRedditFormatted: () => {
        const { dataPosts } = this.props.newsfeedReducer;
        const { redditDataRaw } = this.props.dataReducer;
        let gotAllRedditPosts;
        let formattedRedditData = [];
        // let gotAllRedditData;
        let unformattedRedditData = [];

        redditDataRaw.forEach((r, index) => {
          r.data.children.forEach((c) => {
            // Do not push stickied posts (announcements, etc.)
            if (c.data && !c.data.stickied) {
              c.data.sourceData = r.sourceData;
              unformattedRedditData.push(c.data);
            }
          });
        });

        gotAllRedditPosts =
          redditDataRaw.length &&
          unformattedRedditData.length === dataPosts.count.reddit;

        unformattedRedditData.forEach((r) =>
          formattedRedditData.push(formatReddit.formatRedditData(r))
        );

        if (gotAllRedditPosts && !formattedRedditPosts) {
          formattedRedditPosts = true;
          this.props.dataFormatReddit(formattedRedditData);
        }
      },

      setTwitterFormatted: (total) => {
        const { dataPosts } = this.props.newsfeedReducer;
        const { tweetDataRaw } = this.props.dataReducer;
        // Arrays to store tweet data temporarily:
        let formattedTweetData = [];
        let gotAllTweets;
        let unformattedTweetData = [];

        //
        tweetDataRaw.forEach((t, index) => {
          t.statuses.forEach((s) => {
            s.sourceData = t.sourceData;
          });
          if (t.statuses) unformattedTweetData.push(t.statuses);
        });

        // Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
        unformattedTweetData.flat(1).forEach((t, index) => {
          formattedTweetData.push(formatTweet.formatTweetData(t));
        });

        gotAllTweets =
          tweetDataRaw.length &&
          formattedTweetData.length === dataPosts.count.twitter;

        //
        if (gotAllTweets && !formattedTweets) {
          formattedTweets = true;
          this.props.dataFormatTweets(formattedTweetData);
        }
      },

      setYoutubeFormatted: (total) => {
        const { dataPosts } = this.props.newsfeedReducer;
        const { youtubeDataRaw } = this.props.dataReducer;

        // Arrays to store Youtube data temporarily:
        let formattedYoutubeData = [];
        let unformattedYoutubeData = [];

        youtubeDataRaw.forEach((y, index) => {
          if (y) unformattedYoutubeData.push(y);
        });

        //formatYoutube.formatYoutubeData(unformattedYoutubeData[0]);

        unformattedYoutubeData.forEach((y, index) => {
          formattedYoutubeData.push(formatYoutube.formatYoutubeData(y));
        });

        var formattedAll = false;

        if (this.props.sourceReducer.sourcesYoutubeData) {
          formattedAll =
            formattedYoutubeData.length ===
            this.props.sourceReducer.sourcesYoutubeData.length;
        }

        if (formattedAll && !formattedYoutubes) {
          formattedYoutubes = true;
          this.props.dataFormatYoutube(formattedYoutubeData);
        }
      },

      setInstagramFormatted: () => {
        const { dataPosts } = this.props.newsfeedReducer;
        const { instagramDataRaw } = this.props.dataReducer;
        // Arrays to store instagram data temporarily:
        let formattedInstagramData = [];
        let gotAllInstagramPosts;
        let unformattedInstagramData = [];

        //
        instagramDataRaw.forEach((i) => {
          unformattedInstagramData.push(i);
        });

        unformattedInstagramData.forEach((i, index) => {
          if (i && i.edges.length) {
            i.edges.forEach((edge) => {
              formattedInstagramData.push(
                formatInstagram.formatInstagramData(edge.node, i, index)
              );
            });
          }
        });

        gotAllInstagramPosts =
          instagramDataRaw.length &&
          formattedInstagramData.length === dataPosts.count.instagram;

        //
        if (gotAllInstagramPosts && !formattedInstagrams) {
          formattedInstagrams = true;
          this.props.dataFormatInstagram(formattedInstagramData);
        }
      },
    },
    request: {
      getInstagramRaw: () => {
        gotInstagramData = true;

        const req = (count, o) => {
          this.props.newsfeedIncrSourceCount({
            service: 'instagram',
            value: count,
          });
          o.count = count;
          this.props.dataRequest(o);
        };
        this.props.sourceReducer.sourcesInstagramData.map((source) => {
          if (!source.muted) {
            req(source.postsNumber, {
              sourceData: source,
              src: SOURCE_INSTAGRAM,
              user: source.username,
            });
          }
        });
      },
      getRedditRaw: () => {
        gotRedditData = true;

        const req = (count, o) => {
          this.props.newsfeedIncrSourceCount({
            service: 'reddit',
            value: count,
          });
          o.count = count;
          this.props.dataRequest(o);
        };

        this.props.sourceReducer.sourcesRedditData.map((source) => {
          if (!source.muted) {
            req(source.postsNumber, {
              endpoint: source.filter,
              sourceData: source,
              src: SOURCE_REDDIT,
              user: source.subreddit,
            });
          }
        });
      },

      getYoutubeRaw: () => {
        gotYoutubeData = true;
        //
        const req = (count, o) => {
          this.props.newsfeedIncrSourceCount({
            service: 'youtube',
            value: count,
          });
          o.count = count;
          this.props.dataRequest(o);
        };
        //
        this.props.sourceReducer.sourcesYoutubeData.map((source) => {
          if (!source.muted) {
            req(source.videosNumber, {
              sourceData: source,
              src: SOURCE_YOUTUBE,
              userId: source.youtubeUserId,
            });
          }
        });
      },

      getTwitterRaw: () => {
        gotTwitterData = true;
        const req = (count, o) => {
          this.props.newsfeedIncrSourceCount({
            service: 'twitter',
            value: count,
          });
          o.count = count;
          this.props.dataRequest(o);
        };

        this.props.sourceReducer.sourcesTwitterData.map((source) => {
          if (!source.muted) {
            req(source.postsNumber, {
              endpoint: 'search%2Ftweets',
              sourceData: source,
              src: SOURCE_TWITTER,
              user: source.twitterUser,
              // Refinements/queries if necessary: q: 'zelda since:2019-07-11',
            });
          }
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
        <div className="col-12 m-0 p-0 mb-2 row">
          <div style={{ width: '100%' }}>
            <CarouselJumbotron
              usersReducer={this.props.usersReducer}
              items={[
                {
                  align: 'center',
                  category: 'Comics',
                  mediaSubtype: labels.ui.home.welcomeSubtitle,
                  mediaType: 'article',
                  src:
                    'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                  title: labels.ui.home.welcomeTitle,
                },
              ]}
            />
          </div>
        </div>
        <div className="col-md-12 m-0 p-0 pt-4 pl-1 pb-4 row rounded">
          <div className="col-lg-7 m-0 p-0 mb-4 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Newsfeed"
            />

            <SectionTitlePostsTitle text="Mixed Content" />

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
          <div className="col-lg-5 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Trending"
            />
            <SectionTitlePostsTitle text="Popular Posts (5)" />
            <div style={{ opacity: 0.1 }}>
              <TrendingList />
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
