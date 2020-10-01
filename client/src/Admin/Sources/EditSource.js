// Imports:
import React, { Component } from 'react';
import labels from '../../config/labels';
import settings from '../../config/settings';
import FormatSource from './FormatSource';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import CategoryEdit from './EditSource/1/CategoryEdit';
import CategoryGamingEdit from './EditSource/1.5/CategoryGamingEdit';
import ServiceEdit from './EditSource/2/ServiceEdit';
import SubredditEdit from './EditSource/3/SubredditEdit';
import TwitterUserEdit from './EditSource/3/TwitterUserEdit';
import NumberOfPostsEdit from './EditSource/4/NumberOfPostsEdit';
import NumberOfTweetsEdit from './EditSource/4/NumberOfTweetsEdit';
import SubredditFilterEdit from './EditSource/5/SubredditFilterEdit';
import TweetFilterEdit from './EditSource/5/TweetFilterEdit';
import SubredditPeriodAdd from './EditSource/6/SubredditPeriodAdd';
import TweetQueryAdd from './EditSource/6/TweetQueryAdd';
import IsOfficialCheckAdd from './EditSource/7/IsOfficialCheckAdd';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
} from '../../constants';
import { fetchConstructor } from '../../actions';

import LoaderCentered from '../../Components/Loader/LoaderCentered';
import InstagramUserEdit from './EditSource/3/InstagramUserEdit';
import NumberOfInstagramPostsEdit from './EditSource/4/NumberOfInstagramPostsEdit';
import InstagramFilterEdit from './EditSource/5/InstagramFilterEdit';

// Stop update loop:
let gotUpdatedSource = false;

class EditSource extends Component {
  componentDidMount() {
    gotUpdatedSource = false;
    this.props.sourcesReset();
    const path = window.location.href.split('editsource/')[1];
    this.props.sourceGetById({
      id: path.split('/')[0],
      service: path.split('/')[1],
    });
  }
  componentDidUpdate() {
    if (this.props.sourceReducer.sourceById.category && !gotUpdatedSource) {
      const { sourceReducer } = this.props;
      this.props.sourceAddFormCategory(sourceReducer.sourceById.category);
      this.props.sourceAddFormCategoryGaming(
        sourceReducer.sourceById.categoryGaming
      );
      this.props.sourceAddService(sourceReducer.sourceById.service);
      gotUpdatedSource = true;
    }
  }
  render() {
    // Display or hide fields by service:
    const fieldsByService = {
      get: (form) => {
        if (form.service) {
          if (form.service === SOURCE_INSTAGRAM) {
            return fieldsByService.instagram();
          } else if (form.service === SOURCE_REDDIT) {
            return fieldsByService.reddit();
          } else if (form.service === SOURCE_TWITTER) {
            return fieldsByService.twitter();
          }
        }
      },
      instagram: () => {
        const { sourceAddFormFilter, sourceReducer } = this.props;
        return (
          <React.Fragment>
            <InstagramUserEdit
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={this.props.sourceReducer}
            />
            <NumberOfInstagramPostsEdit
              sourceById={this.props.sourceReducer.sourceById}
            />
            <InstagramFilterEdit
              sourceAddFormFilter={sourceAddFormFilter}
              sourceReducer={this.props.sourceReducer}
            />
            {(sourceReducer && sourceReducer.filter === 'controversial') ||
            sourceReducer.filter === 'top' ? (
              <SubredditPeriodAdd sourceReducer={this.props.sourceReducer} />
            ) : null}
          </React.Fragment>
        );
      },
      reddit: () => {
        const { sourceAddFormFilter, sourceReducer } = this.props;
        return (
          <React.Fragment>
            <SubredditEdit
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={this.props.sourceReducer}
            />
            <NumberOfPostsEdit
              sourceById={this.props.sourceReducer.sourceById}
            />
            <SubredditFilterEdit
              sourceAddFormFilter={sourceAddFormFilter}
              sourceReducer={this.props.sourceReducer}
            />
          </React.Fragment>
        );
      },
      twitter: () => {
        return (
          <React.Fragment>
            <TwitterUserEdit
              getPlaceholder={FormatSource.form.getPlaceholder}
              sourceReducer={this.props.sourceReducer}
            />
            <NumberOfTweetsEdit
              sourceById={this.props.sourceReducer.sourceById}
            />
            <TweetFilterEdit
              sourceAddFormFilter={this.props.sourceAddFormFilter}
              sourceReducer={this.props.sourceReducer}
            />
            <TweetQueryAdd sourceReducer={this.props.sourceReducer} />
          </React.Fragment>
        );
      },
    };
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Edit Source"
        />
        <div className="col-12 row p-0 m-0">
          <div className="col-md-5">
            {this.props.sourceReducer.sourceById ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { elements } = e.target;
                  const { props } = this;
                  if (!elements['service']) {
                    return false;
                  }
                  let formData = FormatSource.form.getSubmissionData(elements);
                  formData.src._id = this.props.sourceReducer.sourceById._id;
                  fetchConstructor(
                    {
                      url: formData.url,
                      body: JSON.stringify(formData.src),
                      method: 'PUT',
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
                              msg: `${labels.response.success}: this source was successfully edited.`,
                              style: 'success',
                            });
                            props.flashMsgFlash();
                            props.sourcesReset();
                            setTimeout(() => {
                              window.history.back();
                            }, 1000);
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
                <CategoryEdit
                  settings={settings}
                  sourceAddFormCategory={this.props.sourceAddFormCategory}
                  sourceReducer={this.props.sourceReducer}
                />
                {this.props.sourceReducer.category === 'gaming' ? (
                  <CategoryGamingEdit
                    sourceAddFormCategoryGaming={
                      this.props.sourceAddFormCategoryGaming
                    }
                    sourceReducer={this.props.sourceReducer}
                  />
                ) : null}
                {this.props.sourceReducer.category ? (
                  <ServiceEdit
                    FormatSource={FormatSource}
                    sourceAddService={this.props.sourceAddService}
                    sourceReducer={this.props.sourceReducer}
                  />
                ) : null}
                {fieldsByService.get(this.props.sourceReducer)}
                <br />
                <IsOfficialCheckAdd sourceReducer={this.props.sourceReducer} />
                <br />
                <button className="btn btn-primary form-control mb-4">
                  Update source
                </button>
              </form>
            ) : (
              <LoaderCentered />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EditSource;
