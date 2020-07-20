import React, { Component } from 'react';
import Loader from './Components/Loader/Loader';
import Post from './Components/Post/Post';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import formatTweet from './Components/Utils/utils/formatTweet';
import formatReddit from './Components/Utils/utils/formatReddit';
import settings from './config/settings';

let formattedTweets = false;
let formattedReddit = false;

class Home extends Component {
  componentDidMount() {
    // this.requestDataTwitter();
    this.requestDataReddit();
  }

  componentDidUpdate() {
    let formattedTweetData = [];
    let formattedRedditData = [];
    const { tweetDataRaw, redditDataRaw } = this.props.dataReducer;

    //
    if (tweetDataRaw && tweetDataRaw.statuses && !formattedTweets) {
      formattedTweets = true;
      tweetDataRaw.statuses.forEach((t) => {
        formattedTweetData.push(this.formatTweetData(t));
      });
      this.props.dataTweetsFormat(formattedTweetData);
    }

    //
    if (redditDataRaw && redditDataRaw.length > 0 && !formattedReddit) {
      formattedReddit = true;
      redditDataRaw.forEach((r) => {
        formattedRedditData.push(this.formatRedditData(r));
      });
      //console.log(formattedRedditData);
      this.props.dataRedditFormat(formattedRedditData);
    }
  }

  formatRedditData(reddit) {
    return formatReddit.formatRedditData(reddit);
  }

  formatTweetData(tweet) {
    return formatTweet.formatTweetData(tweet);
  }

  requestDataReddit() {
    this.props.dataRequest({
      count: 15,
      endpoint: 'hot',
      src: 'reddit',
      user: 'nintendo',
    });
  }

  requestDataTwitter() {
    this.props.dataRequest({
      count: 15,
      endpoint: 'search%2Ftweets',
      src: 'twitter',
      user: 'nintendouk',
      // Refinements/queries if necessary: q: 'zelda since:2019-07-11',
    });
  }

  render() {
    const { allData } = this.props.dataReducer;
    const dataGetLength = () => (allData ? allData.length : 0);
    const dataHasLength = () => allData && allData.length > 0;
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.featured}
          title="Featured"
        />
        <h4 className="font-weight-light my-3 text-muted">
          NintendoUK ({dataGetLength()})
        </h4>
        {dataHasLength() ? (
          allData.map((d) => {
            return (
              <Post
                id={d.id}
                preview_img_arr={d.preview_img_arr ? d.preview_img_arr : null}
                created_at={d.created_at}
                entities_media={d.entities_media ? d.entities_media : null}
                extended_entities_media={
                  d.extended_entities_media ? d.extended_entities_media : null
                }
                source={d.source}
                text={d.text}
                description={d.description ? d.description : null}
                userData={d.user}
              />
            );
          })
        ) : (
          <div
            className="border-0 form-control p-4 text-center"
            style={{ opacity: 0.7 }}
          >
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
