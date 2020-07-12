import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Home extends Component {
  componentDidMount() {
    fetch('/api/quizzes/list')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.featured}
          title="Featured"
        />
        {Array(200)
          .fill()
          .map((e, index) => (
            <p
              key={'test-' + index + 1}
              style={{ fontSize: 18, fontWeight: 300 }}
            >
              Scroll-Testing Content {index + 1}
            </p>
          ))}
      </div>
    );
  }
}

export default Home;
