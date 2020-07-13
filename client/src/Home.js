import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';
import Loader from './Components/Loader/Loader';

class Home extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.featured}
          title="Featured"
        />
        {this.props.statuses.statuses ? (
          this.props.statuses.statuses.map((e, index) => {
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
        ) : (
          <div className="text-center" style={{ width: '100%' }}>
            <div style={{ marginTop: 50 }}>{Loader()}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
