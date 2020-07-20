import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Gaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditData: [],
    };
  }
  componentDidMount() {
    // Server fetch test:
    fetch('/api/getreddit')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState({ redditData: data });
      });
  }
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.gaming.modern}
          title="Gaming"
        />
        {this.state.redditData[0]}
      </div>
    );
  }
}

export default Gaming;
