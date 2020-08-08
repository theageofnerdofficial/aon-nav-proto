import React, { Component } from 'react';

class CategoryGamingAdd extends Component {
  render() {
    return (
      <select
        className="form-control font-weight-light my-3"
        name="category-gaming"
        onChange={(e) => {
          this.props.sourceAddFormCategoryGaming(e.target.value);
        }}
        required
        value={
          this.props.sourceReducer
            ? this.props.sourceReducer.categoryGaming
            : null
        }
      >
        <option disabled selected value>
          -- Select gaming category --
        </option>
        <option value="moderngames">Modern games</option>
        <option value="retrogames">Retro games</option>
        <option value="modernandretrogames">Modern and retro games</option>
        <option value="boardgames">Board games</option>
        <option value="miscgames">Misc games</option>
      </select>
    );
  }
}

export default CategoryGamingAdd;
