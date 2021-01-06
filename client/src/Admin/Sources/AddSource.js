// Imports:
import React, { Component } from 'react';
import CategoryAdd from './AddSource/1/CategoryAdd';
import CategoryGamingAdd from './AddSource/1.5/CategoryGamingAdd';
import FormatSource from './FormatSource';
import InstagramPostFilterAdd from './AddSource/5/InstagramPostFilterAdd';
import InstagramUserAdd from './AddSource/3/InstagramUserAdd';
import IsOfficialCheckAdd from './AddSource/7/IsOfficialCheckAdd';
import NumberOfInstagramPostsAdd from './AddSource/4/NumberOfInstagramPostsAdd';
import NumberOfPostsAdd from './AddSource/4/NumberOfPostsAdd';
import NumberOfTweetsAdd from './AddSource/4/NumberOfTweetsAdd';
import NumberOfYoutubeVidsAdd from './AddSource/4/NumberOfYoutubeVidsAdd';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SelectService from './AddSource/2/ServiceAdd';
import SubredditAdd from './AddSource/3/SubredditAdd';
import SubredditFilterAdd from './AddSource/5/SubredditFilterAdd';
import SubredditPeriodAdd from './AddSource/6/SubredditPeriodAdd';
import TweetFilterAdd from './AddSource/5/TweetFilterAdd';
import TweetQueryAdd from './AddSource/6/TweetQueryAdd';
import TwitterUserAdd from './AddSource/3/TwitterUserAdd';
import YoutubeUserAdd from './AddSource/3/YoutubeUserAdd';
import {
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_INSTAGRAM,
  SOURCE_YOUTUBE,
} from '../../constants';
import labels from '../../config/labels';
import settings from '../../config/settings';
import { fetchConstructor } from '../../actions';

class AddSource extends Component {
  componentDidMount() {
    this.props.sourcesReset();
  }
  render() {
    const {
      sourceAddFormCategory,
      sourceAddFormCategoryGaming,
      sourceAddFormFilter,
      sourceAddService,
      sourceReducer,
    } = this.props;

    // Display or hide fields by service:
    const fieldsByService = {
      get: (form) => {
        if (form.service) {
          if (form.service === SOURCE_REDDIT) {
            return fieldsByService.reddit();
          } else if (form.service === SOURCE_TWITTER) {
            return fieldsByService.twitter();
          } else if (form.service === SOURCE_INSTAGRAM) {
            return fieldsByService.instagram();
          } else if (form.service === SOURCE_YOUTUBE) {
            return fieldsByService.youtube();
          }
        }
      },
      reddit: () => {
        return (
          <React.Fragment>
            <SubredditAdd
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={sourceReducer}
            />
            <NumberOfPostsAdd />
            <SubredditFilterAdd sourceAddFormFilter={sourceAddFormFilter} />
            {(sourceReducer && sourceReducer.filter === 'controversial') ||
            sourceReducer.filter === 'top' ? (
              <SubredditPeriodAdd />
            ) : null}
          </React.Fragment>
        );
      },
      twitter: () => {
        return (
          <React.Fragment>
            <TwitterUserAdd
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={sourceReducer}
            />
            <NumberOfTweetsAdd />
            <TweetFilterAdd sourceAddFormFilter={sourceAddFormFilter} />
            <TweetQueryAdd />
          </React.Fragment>
        );
      },
      instagram: () => {
        return (
          <React.Fragment>
            <InstagramUserAdd
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={sourceReducer}
            />
            <NumberOfInstagramPostsAdd />
            <InstagramPostFilterAdd sourceAddFormFilter={sourceAddFormFilter} />
          </React.Fragment>
        );
      },
      youtube: () => {
        return (
          <React.Fragment>
            <YoutubeUserAdd
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceGenerateYoutubeId={this.props.sourceGenerateYoutubeId}
              sourceReducer={sourceReducer}
            />
            <NumberOfYoutubeVidsAdd />
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
                if (!elements['service']) {
                  return false;
                }
                let formData = FormatSource.form.getSubmissionData(elements);
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
              <CategoryAdd
                settings={settings}
                sourceAddFormCategory={sourceAddFormCategory}
              />
              {sourceReducer.category === 'gaming' ? (
                <CategoryGamingAdd
                  labels={labels}
                  settings={settings}
                  sourceAddFormCategoryGaming={sourceAddFormCategoryGaming}
                />
              ) : null}
              {sourceReducer.category ? (
                <SelectService sourceAddService={sourceAddService} />
              ) : null}
              {fieldsByService.get(sourceReducer)}
              <br />
              <IsOfficialCheckAdd />
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

export default AddSource;
