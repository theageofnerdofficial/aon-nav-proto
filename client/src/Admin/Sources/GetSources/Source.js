// Imports:
import React, { Component } from 'react';
import FontIcon from '../../../Components/FontIcon/FontIcon';
import LabelBtn from '../../../Components/UI/LabelBtn';
import format from '../../../config/format';
import isDarkColor from 'is-dark-color';
import labels from '../../../config/labels';
import utils from '../../../Components/Utils/utils/utils';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_YOUTUBE,
} from '../../../constants';

import { fetchConstructor } from '../../../actions';

class Source extends Component {
  render() {
    const { props } = this;
    const { sourceReducer, sourcesToggleSourceMute, src } = this.props;

    /* Get endpoint URL from source's service:
     ************************************************************/
    const getSourceUrl = (source) => {
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
        case SOURCE_YOUTUBE:
          url = '/source/youtube';
          break;
        default:
          url = '/source/';
      }
      return url;
    };

    /* Delete a source using fetch constructor to connect to DB:
     ************************************************************/
    const deleteSource = (source) => {
      let url = getSourceUrl(source);
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
                  sourceId: src._id,
                  service: src.service,
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
      const label = src.isOfficial ? 'Official source' : null;
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
      } else if (src.service === SOURCE_YOUTUBE) {
        return 'Youtube';
      }
    };

    const getLogo = (src) => {
      if (src.service === SOURCE_INSTAGRAM) {
        return format.instagram.source.thumbnail(src.username);
      } else if (src.service === SOURCE_REDDIT) {
        return format.reddit.source.thumbnail(src.subreddit);
      } else if (src.service === SOURCE_TWITTER) {
        return format.twitter.source.thumbnail(src.twitterUser);
      } else if (src.service === SOURCE_YOUTUBE) {
        return format.youtube.source.thumbnail(src.youtubeUser);
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
      } else if (src.service === SOURCE_YOUTUBE) {
        return (
          <a
            href={`https://www.youtube.com/${src.youtubeUser}`}
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
            {utils.str.makeTitleCase(src.youtubeUser)}
          </a>
        );
      }
    };

    // Determine if source has filter category (so we can hide those that don't):
    const hasFilterCategory = () => {
      const { sourceCategoryFilter } = this.props;
      return (
        sourceCategoryFilter.toLowerCase() === 'all' ||
        sourceCategoryFilter.toLowerCase() === src.category.toLowerCase()
      );
    };

    // Has source been refined through input checkbox?:
    const hasSourceCheck = () => sourceReducer.serviceShown[src.service];

    return (
      <React.Fragment>
        {hasFilterCategory() ? (
          <tr
            style={{
              display: hasSourceCheck() ? null : 'none',
              opacity: src.muted ? 0.3 : 1,
            }}
          >
            <td>
              <img
                alt="Source logo"
                className="rounded"
                src={getLogo(src)}
                style={{ width: '65px' }}
              />
              <form
                style={{ float: 'right', width: 30 }}
                onSubmit={(e) => {
                  sourcesToggleSourceMute({
                    id: src._id,
                  });
                  fetchConstructor(
                    {
                      url: getSourceUrl(src) + '/mute',
                      body: JSON.stringify({
                        _id: src._id,
                        muted: false,
                      }),
                      method: 'PUT',
                      func: {
                        checkErrors: () => {},
                        checkCatch: () => {},
                      },
                    },
                    this.props
                  );
                }}
              >
                <button
                  className="btn btn-sm btn-light shadow-sm text-muted"
                  name="source-toggle-mute"
                  style={{
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                  }}
                >
                  {src.muted
                    ? FontIcon('faVolumeMute')
                    : FontIcon('faVolumeUp')}
                </button>
              </form>
            </td>
            <td>
              <LabelBtn
                brandColor={src.brandColor}
                source={getTableCellsByService(src)}
              />
              {getOfficial(src)}
            </td>
            <td>
              {utils.str.makeTitleCase(src.category)}
              <br />
              <small className="font-weight-light">
                {src.categoryGaming
                  ? `(${utils.str.makeTitleCase(src.categoryGaming)})`
                  : ''}
              </small>
            </td>
            <td>{getSource(src)}</td>
            <td>{src.postsNumber ? src.postsNumber : src.videosNumber}</td>
            <td>{src.filter ? utils.str.makeTitleCase(src.filter) : 'N/A'}</td>
            <td>{src.period ? src.period : 'N/A'}</td>
            <td>
              <this.props.Link to="/">
                {getCreatedByUser(src.createdBy)}
              </this.props.Link>
            </td>
            <td style={{ width: 60 }}>
              <this.props.Link
                to={`/admin/editsource/${src._id}/${getSource(
                  src
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
                      sourceId: src._id,
                      service: src.service,
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
