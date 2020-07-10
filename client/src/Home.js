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
      </div>
    );
  }
}

export default Home;
