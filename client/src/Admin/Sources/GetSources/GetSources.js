// Imports:
import React, { Component } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Source from './Source';
import SectionTitlePostsTitle from '../../../Components/SectionTitle/SectionTitlePostsTitle';

class GetSources extends Component {
  componentDidMount() {
    this.props.sourcesGetReddit();
    if (this.props.sourceReducer) {
      console.log(this.props.sourceReducer.sourcesRedditData);
    }
  }
  render() {
    const countSources = () =>
      this.props.sourceReducer
        ? this.props.sourceReducer.sourcesRedditData.length
        : '0';

    return (
      <React.Fragment>
        <SectionTitle title="Sources" />
        <SectionTitlePostsTitle text={`Sources (${countSources()})`} />
        {this.props.sourceReducer.sourcesRedditData
          ? this.props.sourceReducer.sourcesRedditData.map((s) => {
              return <Source src={s} />;
            })
          : ''}
      </React.Fragment>
    );
  }
}

export default GetSources;
