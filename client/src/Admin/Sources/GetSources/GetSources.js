// Imports:
import React, { Component } from 'react';
import FontIcon from '../../../Components/FontIcon/FontIcon';
import LoaderCentered from '../../../Components/Loader/LoaderCentered';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../../../Components/SectionTitle/SectionTitlePostsTitle';
import Source from './Source';
import settings from '../../../config/settings';

// Stop update loop:
let combined = false;

class GetSources extends Component {
  componentDidMount() {
    combined = false;
    this.props.sourcesReset();
    this.props.sourcesGetReddit();
    this.props.sourcesGetTwitter();
    this.props.sourcesGetInstagram();
  }

  componentDidUpdate() {
    const {
      sourceInstagramGetPending,
      sourceRedditGetPending,
      sourceReducer,
      sourceTwitterGetPending,
    } = this.props;

    // Conditions that must be met before combining sources:
    const gotRedditData =
      !sourceRedditGetPending && sourceReducer.sourcesRedditData;
    const gotTwitterData =
      !sourceTwitterGetPending && sourceReducer.sourcesTwitterData;

    //
    const gotInstagramData =
      !sourceInstagramGetPending && sourceReducer.sourcesInstagramData;

    if (gotRedditData && gotTwitterData && gotInstagramData && !combined) {
      this.props.sourcesCombine();
      combined = true;
    }
  }

  render() {
    /* Count sources shows number of sources as feedback:
     *****************************************************/
    const countSources = () =>
      this.props.sourceReducer.sourcesCombined
        ? this.props.sourceReducer.sourcesCombined.length
        : '0';

    /* No sources: a fallback for no sources (spinner):
     *****************************************************/
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
              alt="Source thumbnail"
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

    /* Sets sort direction icon:
     *****************************************************/
    const setSortDirectionIcon = (o) => {
      const icon = o.numeric ? 'faSortNumeric' : 'faSortAlpha';
      return FontIcon(
        this.props.sourceReducer.sortUI[o.name].sortDirection
          ? icon + 'Down'
          : icon + 'Up'
      );
    };

    /* Button for determining sort direction of sources:
     *****************************************************/
    const sortByBtn = (o) => {
      return (
        <button
          className="btn btn-sm btn-light text-muted"
          data-direction={
            this.props.sourceReducer.sortUI[o.name]
              ? this.props.sourceReducer.sortUI[o.name].sortDirection
              : 0
          }
          onClick={(e) => {
            this.props.sourcesToggleSortUI({ name: o.name });
            this.props.sourcesCombinedArrangeBy({
              name: o.name,
              nameSubtype: o.nameSubtype,
            });
          }}
        >
          {setSortDirectionIcon(o)}
        </button>
      );
    };

    return (
      <React.Fragment>
        <SectionTitle title="Sources" />
        <SectionTitlePostsTitle text={`Sources (${countSources()})`} />
        <div className="m-0 p-0 col-12 row">
          <div className="m-0 p-0 col-6">
            <select
              className="form-control col-12 col-md-4 col-lg-4 mb-3"
              onChange={(e) => {
                this.props.sourcesFilterByCategory(e.target.value);
              }}
            >
              <option>All</option>
              {settings.categories.arr.map((category) => {
                return <option>{category}</option>;
              })}
            </select>
          </div>
          <div className="m-0 p-0 col-6 text-right">
            <this.props.Link to="/admin/addsource">
              <button className="btn btn-light">Add source +</button>
            </this.props.Link>
          </div>
        </div>
        <div style={{ overflow: 'scroll' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>
                  Source{' '}
                  {sortByBtn({ name: 'source', nameSubtype: 'subreddit' })}
                </th>
                <th>Category {sortByBtn({ name: 'category' })}</th>
                <th>Service {sortByBtn({ name: 'service' })}</th>
                <th>
                  Posts{' '}
                  {sortByBtn({
                    name: 'posts',
                    nameSubtype: 'postsNumber',
                    numeric: true,
                  })}
                </th>
                <th>Filter {sortByBtn({ name: 'filter' })}</th>
                <th>Period {sortByBtn({ name: 'period', numeric: true })}</th>
                <th>Added By {sortByBtn({ name: 'addedBy' })}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {noSources()}
              {this.props.sourceReducer &&
              this.props.sourceReducer.sourcesCombined ? (
                this.props.sourceReducer.sourcesCombined.map((s, index) => {
                  //return true;
                  return (
                    <Source
                      flashMsgFlash={this.props.flashMsgFlash}
                      flashMsgUpdate={this.props.flashMsgUpdate}
                      Link={this.props.Link}
                      key={'source-' + index}
                      sourceDelete={this.props.sourceDelete}
                      sourceRemove={this.props.sourceRemove}
                      sourceCategoryFilter={
                        this.props.sourceReducer.sourceCategoryFilter
                      }
                      sourcesToggleSourceMute={
                        this.props.sourcesToggleSourceMute
                      }
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
