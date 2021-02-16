import React, { Component } from 'react';

class AdminThumb extends Component {
  render() {
    const { Link, link } = this.props;
    return (
      <div className="col-4 col-md-3 m-0 p-0">
        <Link to={link}></Link>
      </div>
    );
  }
}

export default AdminThumb;
