// Imports:
import React, { Component } from 'react';
import Posts from '../../Components/Post/Posts';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../../Components/SectionTitle/SectionTitlePostsTitle';

class Newsfeed extends Component {
  render() {
    return (
      <div className="col-md-12 m-0 p-0 pt-4 pl-1 pb-4 row rounded">
        <div className="col-lg-12 m-0 p-0 mb-4 section-responsive-pr">
          <SectionTitle
            tabColour={this.props.settings.ui.style.sectionTab.featured}
            title="Newsfeed"
          />
          <SectionTitlePostsTitle
            text={`${
              this.props.allData ? this.props.allData.length : null
            } Posts`}
          />
          <div style={{ height: 540, overflow: 'scroll' }}>
            <Posts
              allData={this.props.allData}
              FontIcon={this.props.FontIcon}
              labels={this.props.labels}
              labelsBySource={this.props.labelsBySource}
              modalReducer={this.props.modalReducer}
              modalUpdateMode={this.props.modalUpdateMode}
              utils={this.props.utils}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Newsfeed;
