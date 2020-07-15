import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';
import Loader from './Components/Loader/Loader';
import formatTweet from './Components/Tweet/utils/formatTweet';
import TwitterVideo from './Components/Tweet/utils/Media/TwitterVideo';
import Post from './Components/Post/Post';
import FontIcon from './Components/FontIcon/FontIcon';
var gotTweets = false;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterData: [],
      postData: [],
      // { status, profile pic, pics, videos }
    };
    this.sanitizeTwitter = this.sanitizeTwitter.bind(this);
  }

  sanitizeTwitter() {
    var postDatax = [];

    if (this.props.twitterData) {
      this.props.twitterData.forEach((status) => {
        var x = {
          id: status.id,
          source: 'twitter',
          user: status.user,
          text: status.full_text,
          created_at: status.created_at,
          lang: status.lang,
          retweet_count: status.retweet_count,
          favorite_count: status.favorite_count,
          entities_media: status.entities ? status.entities.media : null,
          extended_entities_media: status.extended_entities
            ? status.extended_entities.media
            : null,
        };
        postDatax.push(x);
      });
    }

    //console.log(postDatax);
    this.setState({ postData: [...postDatax] });
    console.log(this.state);
  }

  componentDidUpdate() {
    //
    if (this.props.twitterData && this.props.twitterData.length > 0) {
      //this.sanitizeTwitter();

      if (!gotTweets) {
        //console.log(this.props.twitterData);

        this.sanitizeTwitter();

        //this.setState({ postData: [...this.props.twitterData] });
        //console.log(this.state);
        gotTweets = true;
      }
    }
  }

  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.featured}
          title="Featured"
        />

        <br />
        <h4 className="text-muted" style={{ fontWeight: 300 }}>
          Nintendo UK ({this.props.twitterData.length})
        </h4>

        {this.state.postData.map((p) => {
          return (
            <Post
              created_at={p.created_at}
              entities_media={p.entities_media}
              extended_entities_media={p.extended_entities_media}
              id={1}
              source={p.source}
              text={p.text}
              userData={p.user}
            />
          );
        })}

        {/* <Post id={} user={} > */}
      </div>
    );
  }
}

export default Home;
