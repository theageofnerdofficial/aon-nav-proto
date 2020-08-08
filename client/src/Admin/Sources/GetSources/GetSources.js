// Imports:
import React, { Component } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../../../Components/SectionTitle/SectionTitlePostsTitle';
import Source from './Source';
import LoaderCentered from '../../../Components/Loader/LoaderCentered';

// Stop update loop:
let combined = false;

class GetSources extends Component {
  componentDidMount() {
    combined = false;
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
    const noSources = () => {
      if (
        this.props.sourceReducer &&
        this.props.sourceReducer.sourcesCombined &&
        this.props.sourceReducer.sourcesCombined.length <= 0
      ) {
        return (
          <td colSpan="7" className="text-center py-4">
            <br />
            <img
              className="rounded"
              src="/img/nosources.gif"
              style={{ height: 150, width: 200 }}
            />
            <br />
            <h4>
              <span className="badge badge-secondary font-weight-light">
                No sources!
              </span>
            </h4>
          </td>
        );
      }
    };
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
                <th>Added By</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {noSources()}
              {this.props.sourceReducer &&
              this.props.sourceReducer.sourcesCombined ? (
                this.props.sourceReducer.sourcesCombined.map((s, index) => {
                  return (
                    <Source
                      flashMsgFlash={this.props.flashMsgFlash}
                      flashMsgUpdate={this.props.flashMsgUpdate}
                      Link={this.props.Link}
                      key={'source-' + index}
                      sourceDelete={this.props.sourceDelete}
                      sourceRemove={this.props.sourceRemove}
                      src={s}
                    />
                  );
                })
              ) : (
                <LoaderCentered />
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default GetSources;
