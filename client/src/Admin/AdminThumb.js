import React, { Component } from 'react';
import CategoryThumb from '../Components/CategoryThumb/CategoryThumb';

class AdminThumb extends Component {
  componentDidMount() {
    console.log(this.props.Link);
  }
  render() {
    return (
      <div className="col-4 col-md-3 p-0 m-0">
        <this.props.Link to={this.props.link}>
          <CategoryThumb
            fontIcon={this.props.fontIcon}
            label={this.props.label}
          />
        </this.props.Link>
      </div>
    );
  }
}

export default AdminThumb;
