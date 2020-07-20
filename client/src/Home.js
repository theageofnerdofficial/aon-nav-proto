import React, { Component } from 'react';
import Loader from './Components/Loader/Loader';
import Post from './Components/Post/Post';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import formatTweet from './Components/Tweet/utils/formatTweet';
import settings from './config/settings';

let formattedTweets = false;

class Home extends Component {
  componentDidMount() {
    this.requestDataTwitter();
    // this.requestDataReddit();
  }

  componentDidUpdate() {
    let formattedTweetData = [];
    const { tweetDataRaw } = this.props.dataReducer;
    if (tweetDataRaw && tweetDataRaw.statuses && !formattedTweets) {
      formattedTweets = true;
      tweetDataRaw.statuses.forEach((t) => {
        formattedTweetData.push(this.formatTweetData(t));
      });
      this.props.dataTweetsFormat(formattedTweetData);
    }
  }

  formatTweetData(tweet) {
    return formatTweet.formatTweetData(tweet);
  }

  requestDataReddit() {
    this.props.dataRequest({
      count: 100,
      endpoint: '',
      src: 'reddit',
      user: '',
    });
  }

  requestDataTwitter() {
    this.props.dataRequest({
      count: 100,
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
                created_at={d.created_at}
                entities_media={d.entities_media}
                extended_entities_media={d.extended_entities_media}
                id={d.id}
                source={d.source}
                text={d.text}
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
