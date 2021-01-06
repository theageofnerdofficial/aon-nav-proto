import React, { Component } from 'react';
import CategoryGamingSelect from '../../FormElements/CategoryGamingSelect';

class CategoryGamingEdit extends Component {
  render() {
    const {
      labels,
      settings,
      sourceAddFormCategoryGaming,
      sourceReducer,
    } = this.props;
    return (
      <CategoryGamingSelect
        labels={labels}
        settings={settings}
        sourceAddFormCategoryGaming={sourceAddFormCategoryGaming}
        sourceReducer={sourceReducer}
      />
    );
  }
}

export default CategoryGamingEdit;
