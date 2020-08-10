import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';
import RedditPost from './Components/Post/RedditPost';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import utils from './Components/Utils/utils/utils';

let gotRedditSources = false;
class Gaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditData: [],
    };
  }

  componentDidMount() {
    gotRedditSources = false;
    this.props.sourcesReset();
    this.props.sourcesGetReddit('gaming');

    // get posts from sources
    //
    //
    // this.props.sourceGetRedditPosts();
    //
    //
    //
    //
  }
  componentDidUpdate() {
    //sourcesRedditData
    if (
      this.props.sourceReducer.sourcesRedditData &&
      this.props.sourceReducer.sourcesRedditData.length >= 1 &&
      !gotRedditSources
    ) {
      gotRedditSources = true;

      this.props.sourceReducer.sourcesRedditData.forEach((source) => {
        this.props.sourceGetRedditPosts(source);
      });
    }
    //
  }
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.gaming.modern}
          title="Gaming"
        />
        <SectionTitlePostsTitle
          tabColour={settings.ui.style.sectionTab.gaming.modern}
          text="Sources"
        />
        <p>
          {this.props.sourceReducer &&
          this.props.sourceReducer.sourcesRedditData
            ? this.props.sourceReducer.sourcesRedditData.map((redditSource) => {
                return (
                  <span className="badge badge-primary">
                    {utils.str.makeTitleCase(redditSource.subreddit)}
                  </span>
                );
              })
            : null}
        </p>

        <p>
          {this.props.sourceReducer &&
          this.props.sourceReducer.sourcesRedditPosts
            ? this.props.sourceReducer.sourcesRedditPosts.map(
                (redditPost, index) => {
                  return <RedditPost data={redditPost.data} index={index} />;
                }
              )
            : null}
        </p>
      </div>
    );
  }
}

export default Gaming;
