// Imports:
import React, { Component } from 'react';
import FontIcon from '../../../Components/FontIcon/FontIcon';
import LabelBtn from '../../../Components/UI/LabelBtn';
import format from '../../../config/format';
import isDarkColor from 'is-dark-color';
import labels from '../../../config/labels';
import utils from '../../../Components/Utils/utils/utils';
import { fetchConstructor } from '../../../actions';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
} from '../../../constants';

class Source extends Component {
  componentDidMount() {
    // console.log(this.props.src);
  }
  render() {
    const { props } = this;

    /* Delete a source using fetch constructor to connect to DB:
     ************************************************************/
    const deleteSource = (source) => {
      let url;
      switch (source.service) {
        case SOURCE_INSTAGRAM:
          url = '/source/instagram';
          break;
        case SOURCE_REDDIT:
          url = '/source/reddit';
          break;
        case SOURCE_TWITTER:
          url = '/source/twitter';
          break;
        default:
          url = '/source/delete';
      }
      fetchConstructor(
        {
          url: url,
          body: JSON.stringify(source),
          method: 'DELETE',
          func: {
            checkErrors: (res) => {
              if (res.errors) {
                const warnings = res.message;
                props.flashMsgUpdate({
                  msg: warnings.split(',')[0],
                  style: 'danger',
                });
                props.flashMsgFlash();
                return false;
              } else {
                props.flashMsgUpdate({
                  msg: `${labels.response.success}: this source was successfully deleted.`,
                  style: 'success',
                });
                props.flashMsgFlash();
                props.sourceRemove({
                  sourceId: this.props.src._id,
                  service: this.props.src.service,
                });
              }
            },
            checkCatch: (e) => {
              props.flashMsgUpdate({
                msg: e.message,
                style: 'danger',
              });
              props.flashMsgFlash();
            },
          },
        },
        this.props
      );
    };

    /* Get user by name — change if more admins/mods come along::
     ************************************************************/
    const getCreatedByUser = (id) => {
      if (id === '5f1f2de55581752c7424b86a') {
        return 'gilfoylethegreat';
      } else if (id === '5f1f487451a464001745bae4') {
        return 'Age of Nerd';
      } else {
        return '?';
      }
    };

    // Get official determines if source is official & displays "Official" flair:
    const getOfficial = (src) => {
      const label = src.isOfficial ? 'Official source' : '';
      const formattedLabel = (
        <React.Fragment>
          <br />
          <small className="badge badge-light font-weight-light">{label}</small>
        </React.Fragment>
      );
      return formattedLabel;
    };

    // Get source gets a more readible version of services, i.e. 'Reddit' from 'SOURCE_REDDIT'
    const getSource = (src) => {
      if (src.service === SOURCE_REDDIT) {
        return 'Reddit';
      } else if (src.service === SOURCE_TWITTER) {
        return 'Twitter';
      } else if (src.service === SOURCE_INSTAGRAM) {
        return 'Instagram';
      }
    };

    const getLogo = (src) => {
      if (src.service === SOURCE_INSTAGRAM) {
        return format.instagram.source.thumbnail(src.username);
      } else if (src.service === SOURCE_REDDIT) {
        return format.reddit.source.thumbnail(src.subreddit);
      } else if (src.service === SOURCE_TWITTER) {
        return format.twitter.source.thumbnail(src.twitterUser);
      }
    };

    // Get table cells by service — different services have differently formatted URLs, for example:
    const getTableCellsByService = (src) => {
      if (src.service === SOURCE_REDDIT) {
        return (
          <a
            href={`https://www.reddit.com/r/${src.subreddit}`}
            rel="noopener noreferrer"
            style={{ color: isDarkColor(src.brandColor) ? '#fff' : '#000' }}
            target="_blank"
          >
            {utils.str.makeTitleCase(src.subreddit)}
          </a>
        );
      } else if (src.service === SOURCE_TWITTER) {
        return (
          <a
            href={`https://www.twitter.com/${src.twitterUser}`}
            rel="noopener noreferrer"
            style={{ color: isDarkColor(src.brandColor) ? '#fff' : '#000' }}
            target="_blank"
          >
            {utils.str.makeTitleCase(src.twitterUser)}
          </a>
        );
      } else if (src.service === SOURCE_INSTAGRAM) {
        return (
          <a
            href={`https://www.instagram.com/${src.username}`}
            rel="noopener noreferrer"
            style={{
              color: src.brandColor
                ? isDarkColor(src.brandColor)
                  ? '#fff'
                  : '#000'
                : '#000',
            }}
            target="_blank"
          >
            {utils.str.makeTitleCase(src.username)}
          </a>
        );
      }
    };

    // Determine if source has filter category (so we can hide those that don't):
    const hasFilterCategory = () => {
      const { sourceCategoryFilter } = this.props;
      return (
        sourceCategoryFilter.toLowerCase() === 'all' ||
        sourceCategoryFilter.toLowerCase() ===
          this.props.src.category.toLowerCase()
      );
    };
    return (
      <React.Fragment>
        {hasFilterCategory() ? (
          <tr>
            <td>
              <img
                alt="Source logo"
                className="rounded"
                src={getLogo(this.props.src)}
                style={{ width: '65px' }}
              />
              <button
                className="btn btn-sm btn-light shadow-sm text-muted"
                style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
              >
                {FontIcon('faVolumeUp')}
              </button>
            </td>
            <td>
              <LabelBtn
                brandColor={this.props.src.brandColor}
                source={getTableCellsByService(this.props.src)}
              />
              {getOfficial(this.props.src)}
            </td>
            <td>
              {utils.str.makeTitleCase(this.props.src.category)}
              <br />
              <small className="font-weight-light">
                {this.props.src.categoryGaming
                  ? `(${utils.str.makeTitleCase(
                      this.props.src.categoryGaming
                    )})`
                  : ''}
              </small>
            </td>
            <td>{getSource(this.props.src)}</td>
            <td>{this.props.src.postsNumber}</td>
            <td>
              {this.props.src.filter
                ? utils.str.makeTitleCase(this.props.src.filter)
                : 'N/A'}
            </td>
            <td>{this.props.src.period ? this.props.src.period : 'N/A'}</td>
            <td>{getCreatedByUser(this.props.src.createdBy)}</td>
            <td style={{ width: 60 }}>
              <this.props.Link
                to={`/admin/editsource/${this.props.src._id}/${getSource(
                  this.props.src
                ).toLowerCase()}`}
              >
                <button className="btn btn-sm btn-secondary form-control mb-1">
                  {FontIcon('faEdit')}
                </button>
              </this.props.Link>
              <br />
              <button
                className="btn btn-sm btn-danger form-control"
                onClick={() => {
                  const hasConfirmed = window.confirm(
                    'Are you bloody sure you want to do that, mate?'
                  );
                  if (hasConfirmed) {
                    deleteSource({
                      sourceId: this.props.src._id,
                      service: this.props.src.service,
                    });
                  }
                }}
              >
                {FontIcon('faTrashAlt')}
              </button>
            </td>
          </tr>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

export default Source;
