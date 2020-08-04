// Imports:
import React, { Component } from 'react';
import labels from '../../config/labels';
import settings from '../../config/settings';
import CheckIsOfficial from './AddSource/CheckIsOfficial';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SelectCategory from './AddSource/SelectCategory';
import SelectGamingCategory from './AddSource/SelectGamingCategory';
import SelectNumberOfPosts from './AddSource/SelectNumberOfPosts';
import SelectService from './AddSource/SelectService';
import SelectSubreddit from './AddSource/SelectSubreddit';
import SelectSubredditFilter from './AddSource/SelectSubredditFilter';
import SelectSubredditPeriod from './AddSource/SelectSubredditPeriod';
import SelectNumberOfTweets from './AddSource/SelectNumberOfTweets';
import SelectTwitterUser from './AddSource/SelectTwitterUser';
import SelectTweetQuery from './AddSource/SelectTweetQuery';
import SelectTweetFilter from './AddSource/SelectTweetFilter';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../constants';
import { fetchConstructor } from '../../actions';

class AddApiSource extends Component {
  componentDidMount() {
    // Load fresh form by resetting state:
    this.props.sourcesReset();
  }

  render() {
    // Make sources match model schemas before posting to database:
    const source = {
      reddit: {
        getFormatted(elements) {
          return {
            category: elements['category'].value,
            categoryGaming: elements['category-gaming']
              ? elements['category-gaming'].value
              : null,
            subreddit: elements['subreddit']
              ? elements['subreddit'].value
              : null,
            postsNumber: elements['posts'] ? elements['posts'].value : null,
            filter: elements['subreddit-filter']
              ? elements['subreddit-filter'].value
              : null,
            service: SOURCE_REDDIT,
            period: elements['subreddit-period']
              ? elements['subreddit-period'].value
              : null,
            createdBy: localStorage.getItem('aon_user_id'),
            isOfficial: elements['is-official-source']
              ? elements['is-official-source'].checked
              : false,
          };
        },
      },
      twitter: {
        getFormatted(elements) {
          return {
            category: elements['category'].value,
            categoryGaming: elements['category-gaming']
              ? elements['category-gaming'].value
              : null,
            twitterUser: elements['twitter-user']
              ? elements['twitter-user'].value
              : null,
            postsNumber: elements['posts'] ? elements['posts'].value : null,
            filter: elements['tweet-filter']
              ? elements['tweet-filter'].value
              : null,
            service: SOURCE_TWITTER,
            queryKeyword: elements['query-keyword']
              ? elements['query-keyword'].value
              : null,
            queryDate: elements['query-date']
              ? elements['query-date'].value
              : null,
            createdBy: localStorage.getItem('aon_user_id'),
            isOfficial: elements['is-official-source']
              ? elements['is-official-source'].checked
              : false,
          };
        },
      },
    };

    // Change placeholder according to selected category:
    const getPlaceholder = (form) => {
      if (form) {
        if (form.category === 'tv/film') {
          return 'IMDB';
        } else if (form.category === 'comics') {
          return 'Marvel';
        } else if (form.category === 'gaming') {
          if (form.categoryGaming === 'boardgames') {
            return 'Hasbro';
          } else {
            return 'Nintendo';
          }
        }
      }
    };

    // Get formatted data and URL by service:
    const getFormSubmission = (elements) => {
      let formData;
      if (elements['service'].value === 'reddit') {
        formData = {
          src: source.reddit.getFormatted(elements),
          url: '/source/reddit/add',
        };
      } else if (elements['service'].value === 'twitter') {
        formData = {
          src: source.twitter.getFormatted(elements),
          url: '/source/twitter/add',
        };
      }
      return formData;
    };

    // Display or hide fields by service:
    const fieldsByService = {
      get: (form) => {
        // If we've a source & that source is Reddit, display Reddit form fields:
        if (form.source) {
          if (form.source === SOURCE_REDDIT) {
            return fieldsByService.reddit();
          } else if (form.source === SOURCE_TWITTER) {
            return fieldsByService.twitter();
          }
        }
      },
      reddit: () => {
        const { sourceAddFormFilter, sourceReducer } = this.props;
        return (
          <React.Fragment>
            <SelectSubreddit
              getPlaceholder={getPlaceholder}
              sourceReducer={this.props.sourceReducer}
            />
            <SelectNumberOfPosts />
            <SelectSubredditFilter sourceAddFormFilter={sourceAddFormFilter} />
            {(sourceReducer && sourceReducer.filter === 'controversial') ||
            sourceReducer.filter === 'top' ? (
              <SelectSubredditPeriod />
            ) : (
              ''
            )}
          </React.Fragment>
        );
      },
      twitter: () => {
        return (
          <React.Fragment>
            <SelectTwitterUser
              getPlaceholder={getPlaceholder}
              sourceReducer={this.props.sourceReducer}
            />
            <SelectNumberOfTweets />
            <SelectTweetFilter />
            <SelectTweetQuery />
          </React.Fragment>
        );
      },
    };
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Add Source"
        />
        <div className="col-12 row p-0 m-0">
          <div className="col-md-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const { elements } = e.target;
                const { props } = this;
                if (!elements['service'] || !elements['source']) {
                  return false;
                }
                let formData = getFormSubmission(elements);
                fetchConstructor(
                  {
                    url: formData.url,
                    body: JSON.stringify(formData.src),
                    method: 'POST',
                    func: {
                      checkDuplicate: (res) => {
                        if (res.name === 'MongoError' && res.code === 11000) {
                          props.flashMsgUpdate({
                            msg: `${labels.response.error}: duplicate — this source already exists.`,
                            style: 'danger',
                          });
                          props.flashMsgFlash();
                          return false;
                        }
                      },
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
                            msg: `${labels.response.success}: this source was successfully added.`,
                            style: 'success',
                          });
                          props.flashMsgFlash();
                          props.sourcesReset();
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
              }}
            >
              <SelectCategory
                sourceAddFormCategory={this.props.sourceAddFormCategory}
              />
              {this.props.sourceReducer.category === 'gaming' ? (
                <SelectGamingCategory
                  sourceAddFormCategoryGaming={
                    this.props.sourceAddFormCategoryGaming
                  }
                />
              ) : (
                ''
              )}
              {this.props.sourceReducer.category ? (
                <SelectService
                  sourceAddFormSelect={this.props.sourceAddFormSelect}
                />
              ) : (
                ''
              )}

              {fieldsByService.get(this.props.sourceReducer)}
              <br />
              <CheckIsOfficial />
              <br />
              <button className="btn btn-primary form-control mb-4">
                Add source
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddApiSource;
