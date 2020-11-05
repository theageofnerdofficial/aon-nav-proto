// Imports:
import React, { Component } from 'react';
import { SOURCE_INSTAGRAM, SOURCE_REDDIT, SOURCE_TWITTER } from './constants';
import FontIcon from './Components/FontIcon/FontIcon';
import Posts from './Components/Post/Posts';
//import PostsDummy from './Components/Post/PostsDummy';
import Quiz from './Components/Quiz/Quiz';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import formatReddit from './Components/Utils/utils/formatReddit';
import formatTweet from './Components/Utils/utils/formatTweet';
import formatInstagram from './Components/Utils/utils/formatInstagram';
import settings from './config/settings';
import CarouselJumbotron from './Components/Carousel/CarouselJumbotron';
import TrendingList from './Components/Post/Trending/TrendingList';
import labels from './config/labels';

// Variables (to be moved to reducer as state eventually):
let dataPosts;
let formattedTweets = false;
let formattedRedditPosts = false;
let formattedInstagrams = false;
let gotTwitterData = false;
let gotRedditData = false;
let gotInstagramData = false;

class Home extends Component {
  componentDidMount() {
    this.props.newsfeedResetData();
    this.props.sourcesGetTwitter();
    this.props.sourcesGetReddit();
    this.props.sourcesGetInstagram();
    // this.props.sourcesGetYoutube();
  }

  componentDidUpdate() {
    const {
      sourcesTwitterData,
      sourcesRedditData,
      sourcesInstagramData,
    } = this.props.sourceReducer;

    if (sourcesTwitterData && !gotTwitterData) {
      gotTwitterData = true;
      this.data.request.getTwitterRaw();
    }
    if (sourcesRedditData && !gotRedditData) {
      gotRedditData = true;
      this.data.request.getRedditRaw();
    }
    if (sourcesInstagramData && !gotInstagramData) {
      gotInstagramData = true;
      this.data.request.getInstagramRaw();
    }

    this.data.format.setTwitterFormatted();
    this.data.format.setRedditFormatted();
    this.data.format.setInstagramFormatted();
    //
    //
    //

    this.data.combine();
  }

  data = {
    combine: () => {
      const {
        redditDataFormatted,
        tweetDataFormatted,
        instagramDataFormatted,
      } = this.props.dataReducer;
      // Ensure we've at least one formatted post from each source:
      const hasRedditFormatted =
        redditDataFormatted && redditDataFormatted.length > 0;
      const hasTweetFormatted =
        tweetDataFormatted && tweetDataFormatted.length > 0;
      const hasInstagramFormatted =
        instagramDataFormatted && instagramDataFormatted.length > 0;
      // Combine formatted post/data:
      if (
        hasTweetFormatted &&
        hasRedditFormatted &&
        hasInstagramFormatted &&
        !this.props.newsfeedReducer.dataPosts.hasCombined
      ) {
        this.props.newsfeedPostsHaveCombined(true);
        this.props.dataCombine();
      }
    },
    format: {
      setRedditFormatted: () => {
        const { dataPosts } = this.props.newsfeedReducer;
        let gotAllRedditPosts;
        const { redditDataRaw } = this.props.dataReducer;
        //
        let formattedRedditData = [];
        let gotAllRedditData;
        let unformattedRedditData = [];

        redditDataRaw.forEach((r, index) => {
          r.data.children.forEach((c) => {
            // Do not push stickied posts (announcements, etc.)
            if (c.data && !c.data.stickied) {
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
        tweetDataRaw.forEach((t) => {
          if (t.statuses) unformattedTweetData.push(t.statuses);
        });

        // Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
        unformattedTweetData
          .flat(1)
          .forEach((t) =>
            formattedTweetData.push(formatTweet.formatTweetData(t))
          );

        gotAllTweets =
          tweetDataRaw.length &&
          formattedTweetData.length === dataPosts.count.twitter;

        //
        if (gotAllTweets && !formattedTweets) {
          formattedTweets = true;
          this.props.dataFormatTweets(formattedTweetData);
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
        console.log('insta raw:');
        console.log(instagramDataRaw);
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
              src: SOURCE_INSTAGRAM,
              user: source.username,
            });
          }
        });
      },
      getRedditRaw: () => {
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
              src: SOURCE_REDDIT,
              user: source.subreddit,
            });
          }
        });
      },

      getTwitterRaw: () => {
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
        <div className="col-md-12 m-0 p-0 pt-4 pl-1 pb-4 row border rounded">
          <div className="col-lg-7 m-0 p-0 mb-4 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Newsfeed"
            />

            <SectionTitlePostsTitle text="Mixed Content" />

            {/*  <PostsDummy /> */}

            <div style={{ height: 540, overflow: 'scroll' }}>
              <Posts allData={allData} />
            </div>
          </div>
          <div className="col-lg-5 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Trending"
            />
            <SectionTitlePostsTitle text="Popular Posts (5)" />
            <TrendingList />
          </div>
        </div>
        <br />
        {/* row 2
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
            <Quiz
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
