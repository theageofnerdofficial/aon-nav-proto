// Imports:
import React, { Component } from 'react';
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
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../constants';
import SelectTweetQuery from './AddSource/SelectTweetQuery';

class AddApiSource extends Component {
  render() {
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
        return 'Nintendo';
      }
    };

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
          <div className="col-md-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const { elements } = e.target;
                if (elements['service'].value === SOURCE_TWITTER) {
                  window.alert('no twitter yet...');
                  return;
                }
                const addSourceForm = {
                  category: elements['category'].value,
                  categoryGaming: elements['category-gaming'].value,
                  service: elements['service'].value,
                  subreddit: elements['subreddit']
                    ? elements['subreddit'].value
                    : null,
                  postsNumber: elements['posts']
                    ? elements['posts'].value
                    : null,
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
                this.props.sourceAdd(addSourceForm);
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
