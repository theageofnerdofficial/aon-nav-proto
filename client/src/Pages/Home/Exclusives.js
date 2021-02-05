// Imports:
import React, { Component } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

class Exclusives extends Component {
  render() {
    return (
      <div className="col-md-4 m-0 p-0 section-responsive-pr">
        <SectionTitle
          tabColour={this.props.settings.ui.style.sectionTab.featured}
          title="AON Exclusives"
        />
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          perferendis, fugit, hic eos animi doloribus.
        </div>
      </div>
    );
  }
}

export default Exclusives;
