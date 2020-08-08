import React, { Component } from 'react';

class CategoryAdd extends Component {
  render() {
    return (
      <select
        className="form-control font-weight-light my-3"
        name="category"
        onChange={(e) => {
          this.props.sourceAddFormCategory(e.target.value);
        }}
        required
        value={
          this.props.sourceReducer && this.props.sourceReducer.category
            ? this.props.sourceReducer.category
            : null
        }
      >
        <option disabled selected value>
          -- Select category --
        </option>
        {this.props.settings
          ? this.props.settings.categories.arr.map((category) => (
              <option value={category.toLowerCase()}>{category}</option>
            ))
          : null}
      </select>
    );
  }
}

export default CategoryAdd;
