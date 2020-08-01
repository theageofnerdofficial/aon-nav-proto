import React, { Component } from 'react';

class SelectGamingCategory extends Component {
  render() {
    return (
      <select
        className="form-control font-weight-light my-3"
        name="category-gaming"
        onChange={(e) => {
          this.props.sourceAddFormCategoryGaming(e.target.value);
        }}
      >
        <option disabled selected value>
          -- Select gaming category --
        </option>
        <option value="moderngames">Modern games</option>
        <option value="retrogames">Retro games</option>
        <option value="boardgames">Board games</option>
      </select>
    );
  }
}

export default SelectGamingCategory;
