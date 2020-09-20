// Imports:
import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from './constants';
import Carousel from './Components/Carousel/Carousel';
import FontIcon from './Components/FontIcon/FontIcon';
// import Posts from './Components/Post/Posts';
import PostsDummy from './Components/Post/PostsDummy';
import Quiz from './Components/Quiz/Quiz';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import formatReddit from './Components/Utils/utils/formatReddit';
import formatTweet from './Components/Utils/utils/formatTweet';
import settings from './config/settings';

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
    // const sectionTitle = `Mix (${allData ? allData.length : 0})`;
    return (
      <div>
        <div className="col-12 m-0 p-0 row">
          <div
            className="jumbotron jumbotron-sm shadow-sm"
            style={{ padding: '1.5rem 2rem', width: '100%' }}
          >
            <h1 className="font-weight-light">Welcome to AON</h1>
            <p className="mb-0 pb-0">
              AON means "Age of Nerd" & this site/app hopes to meet your nerdy
              needs blah blah
              <br /> <br />
              <button className="btn btn-light">Get Started</button>&nbsp;
              <button className="btn btn-light">
                More {FontIcon('faChevronDown')}
              </button>
            </p>
          </div>
        </div>
        <br />
        <div className="col-md-12 m-0 p-0 row">
          <div className="col-md-6 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Newsfeed"
            />
            <SectionTitlePostsTitle text="Mix (30)" />
            <PostsDummy />

            {/* <Posts allData={allData} />*/}
          </div>

          <div className="col-md-6 m-0 p-0 section-responsive-pr">
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
        </div>
        <br />
        {/* row 2
         *********************/}
        <div className="col-md-12 m-0 mt-4 p-0 row">
          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Featured"
            />
            <div>
              <Carousel
                items={[
                  {
                    author: 'J. Bloggs',
                    align: 'center',
                    category: 'Comics',
                    mediaSubtype: 'opinion piece',
                    mediaType: 'article',
                    src: '/img/carousel/carousel-1.jpg',
                    title: 'Goodbye Spidey?',
                  },
                  {
                    author: 'P. Furlong',
                    align: 'right',
                    category: 'Gaming',
                    mediaSubtype: 'Report',
                    mediaType: 'article',
                    src: '/img/carousel/carousel-2.jpg',
                    title: 'More Speccy Ports',
                  },
                ]}
              />
            </div>
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Video of the Week"
            />
            <div
              className="bg-light rounded shadow-sm"
              style={{ height: 300, width: '100%' }}
            >
              <iframe
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="rounded"
                frameborder="0"
                height="60%"
                src="https://www.youtube.com/embed/Vdvtssb10Q8"
                width="100%"
              ></iframe>
              <p className="p-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim possimus distinctio temporibus perferendis tempore
                incidunt facilis aperiam.
              </p>
            </div>
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle title={FontIcon('faAd')} isAd={true} />
            <div
              className="bg-light rounded shadow-sm"
              style={{ width: '100%' }}
            >
              <img
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
