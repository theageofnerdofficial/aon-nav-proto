import React, { Component } from 'react';

class SelectCategory extends Component {
  render() {
    return (
      <select
        className="form-control font-weight-light my-3"
        name="category"
        onChange={(e) => {
          this.props.sourceAddFormCategory(e.target.value);
        }}
        required
      >
        <option disabled selected value>
          -- Select category --
        </option>
        <option value="tv/film">TV/Film</option>
        <option value="comics">Comics</option>
        <option value="gaming">Gaming</option>
      </select>
    );
  }
}

export default SelectCategory;
