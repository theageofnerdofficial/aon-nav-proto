// Imports:
import React, { Component } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../../../Components/SectionTitle/SectionTitlePostsTitle';
import Source from './Source';

let combined = false;

class GetSources extends Component {
  componentDidMount() {
    this.props.sourcesReset();
    this.props.sourcesGetReddit();
    this.props.sourcesGetTwitter();
  }

  componentDidUpdate() {
    const {
      sourceRedditGetPending,
      sourceReducer,
      sourceTwitterGetPending,
    } = this.props;

    // Conditions that must be met before combining sources:
    const gotRedditData =
      !sourceRedditGetPending && sourceReducer.sourcesRedditData;
    const gotTwitterData =
      !sourceTwitterGetPending && sourceReducer.sourcesTwitterData;

    if (gotRedditData && gotTwitterData && !combined) {
      this.props.sourcesCombine();
      combined = true;
    }
  }

  render() {
    const countSources = () =>
      this.props.sourceReducer.sourcesCombined
        ? this.props.sourceReducer.sourcesCombined.length
        : '0';
    return (
      <React.Fragment>
        <SectionTitle title="Sources" />
        <SectionTitlePostsTitle text={`Sources (${countSources()})`} />
        <div style={{ overflow: 'scroll' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Category</th>
                <th>Service</th>
                <th>Source</th>
                <th>Posts</th>
                <th>Filter</th>
                <th>Period</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.sourceReducer.sourcesCombined
                ? this.props.sourceReducer.sourcesCombined.map((s, index) => {
                    return <Source src={s} key={'source-' + index} />;
                  })
                : ''}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default GetSources;
