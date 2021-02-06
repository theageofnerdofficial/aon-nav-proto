// Imports:
import React, { Component } from 'react';
import Ad from './Ad';
import Exclusives from './Exclusives';
import FontIcon from '../../Components/FontIcon/FontIcon';
import Newsfeed from './Newsfeed';
import Quiz from './Quiz';
import settings from '../../config/settings';
import sources from '../../helpers/sources';
import utils from '../../config/utils';

class Home extends Component {
  componentDidMount() {
    sources.data.getFresh(this.props, settings.content.newsfeed);
  }

  componentDidUpdate() {
    sources.data.schemify(this.props, settings);
  }

  render() {
    const { allData } = this.props.dataReducer;

    return (
      <div>
        <Newsfeed
          allData={allData}
          dotsMenuToggle={this.props.dotsMenuToggle}
          FontIcon={FontIcon}
          labels={this.props.labels}
          labelsBySource={this.props.labelsBySource}
          modalReducer={this.props.modalReducer}
          modalUpdateMode={this.props.modalUpdateMode}
          newsfeedReducer={this.props.newsfeedReducer}
          settings={settings}
          utils={utils}
        />

        <div className="col-md-12 m-0 mt-4 p-0 row">
          <Exclusives settings={settings} />

          <Quiz
            quizAddAnswer={this.props.quizAddAnswer}
            quizCalculateScore={this.props.quizCalculateScore}
            quizReducer={this.props.quizReducer}
            quizRequestData={this.props.quizRequestData}
            quizReset={this.props.quizReset}
            quizUpdateQNumber={this.props.quizUpdateQNumber}
            quizUpdateScreen={this.props.quizUpdateScreen}
            settings={settings}
          />

          <Ad FontIcon={FontIcon} />
        </div>
      </div>
    );
  }
}

export default Home;
