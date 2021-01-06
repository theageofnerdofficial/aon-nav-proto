import React, { Component } from 'react';
import CategoryThumb from '../Components/CategoryThumb/CategoryThumb';

class AdminThumb extends Component {
  render() {
    const { fontIcon, label, Link, link } = this.props;
    return (
      <div className="col-4 col-md-3 m-0 p-0">
        <Link to={link}>
          <CategoryThumb fontIcon={fontIcon} label={label} />
        </Link>
      </div>
    );
  }
}

export default AdminThumb;
