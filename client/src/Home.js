// Imports:
import React, { Component } from 'react';
import FontIcon from './Components/FontIcon/FontIcon';
import Posts from './Components/Post/Posts';
import QuizPage from './Components/Quiz/QuizPage';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import settings from './config/settings';
import sources from './helpers/sources';
import utils from './Components/Utils/utils/utils';

class Home extends Component {
  componentDidMount() {
    sources.data.getFresh(this.props, settings.content.newsfeed);
  }

  componentDidUpdate() {
    sources.data.schemify(this.props, settings);
  }

  render() {
    const { allData } = this.props.dataReducer;
    const {
      labels,
      labelsBySource,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    return (
      <div>
        <div className="col-md-12 m-0 p-0 pt-4 pl-1 pb-4 row rounded">
          <div className="col-lg-12 m-0 p-0 mb-4 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Newsfeed"
            />
            <SectionTitlePostsTitle
              text={`${allData ? allData.length : null} Posts`}
            />
            <div style={{ height: 540, overflow: 'scroll' }}>
              <Posts
                allData={allData}
                FontIcon={FontIcon}
                labels={labels}
                labelsBySource={labelsBySource}
                modalReducer={modalReducer}
                modalUpdateMode={modalUpdateMode}
                utils={utils}
              />
            </div>
          </div>
        </div>
        <br />

        {/* Row 2
         *********************/}
        <div className="col-md-12 m-0 mt-4 p-0 row">
          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="AON Exclusives"
            />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              perferendis, fugit, hic eos animi doloribus.
            </div>
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle
              tabColour={settings.ui.style.sectionTab.featured}
              title="Today's Quiz"
            />
            <QuizPage
              quizAddAnswer={this.props.quizAddAnswer}
              quizCalculateScore={this.props.quizCalculateScore}
              quizId="5f58f9790a27010acad1d82e"
              quizReducer={this.props.quizReducer}
              quizRequestData={this.props.quizRequestData}
              quizReset={this.props.quizReset}
              quizUpdateQNumber={this.props.quizUpdateQNumber}
              quizUpdateScreen={this.props.quizUpdateScreen}
            />
          </div>

          <div className="col-md-4 m-0 p-0 section-responsive-pr">
            <SectionTitle title={FontIcon('faAd')} isAd={true} />
            <div
              className="bg-light rounded shadow-sm"
              style={{ width: '100%' }}
            >
              <img
                alt="Placeholder ad"
                className="rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW5__jf83H2uCndvgpC-A_J-FtbyiKxsxS5w&usqp=CAU"
                style={{
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
