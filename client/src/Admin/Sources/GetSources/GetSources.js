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
        <div>
          <table className="table table-striped">
            <tr>
              <th>Category</th>
              <th>Service</th>
              <th>Source</th>
              <th>Posts</th>
              <th>Filter</th>
              <th>Period</th>
            </tr>

            {this.props.sourceReducer.sourcesCombined
              ? this.props.sourceReducer.sourcesCombined.map((s) => {
                  return <Source src={s} />;
                })
              : ''}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default GetSources;
