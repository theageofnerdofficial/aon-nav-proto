import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Home extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.featured}
          title="Featured"
        />
        {this.props.statuses.statuses
          ? this.props.statuses.statuses.map((e, index) => {
              return (
                <p
                  key={'test-' + index + 1}
                  style={{ fontSize: 18, fontWeight: 300 }}
                >
                  <img className="rounded" src={e.user.profile_image_url} />
                  {e.text}
                </p>
              );
            })
          : ''}
      </div>
    );
  }
}

export default Home;
