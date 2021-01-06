import React, { Component } from 'react';

class CategoryGamingSelect extends Component {
  render() {
    const {
      labels,
      settings,
      sourceAddFormCategoryGaming,
      sourceReducer,
    } = this.props;
    return (
      <select
        className="form-control font-weight-light my-3"
        name="category-gaming"
        onChange={(e) => {
          sourceAddFormCategoryGaming(e.target.value);
        }}
        required
        value={sourceReducer ? sourceReducer.categoryGaming : null}
      >
        <option disabled selected value>
          {labels.ui.sources.form.category.gaming.selectionLabel}
        </option>
        {settings.categories.gaming.map((cat) => (
          <option value={`${cat.toLowerCase().replace(/\s/g, '')}games`}>
            {cat} games
          </option>
        ))}
      </select>
    );
  }
}

export default CategoryGamingSelect;
