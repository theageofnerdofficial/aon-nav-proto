import React, { Component } from 'react';
import FontIcon from '../Components/FontIcon/FontIcon';

class Selector extends Component {
  render() {
    const { category, level } = this.props;

    /* Enumerate descendants in order to count or 
       to see which ones are enabled:
     **********************************************/
    const enumDescendants = (actionType) => {
      let enabled = 0;
      if (this.props.descendants) {
        this.props.descendants.forEach((descendant) => {
          if (descendant.isEnabled) enabled += 1;
        });
      }
      if (actionType === 'count') {
        return this.props.descendants
          ? `(${enabled}/${this.props.descendants.length})`
          : null;
      } else if (actionType === 'hasEnabled') {
        if (enabled >= 1) return true;
      }
    };

    /* The icon will either be an expanding button
       or a - (depending on descendants):
     **********************************************/
    const getIcon = () => {
      if (!this.props.descendants || !this.props.descendants.length >= 1) {
        return '-';
      }
      return (
        <button
          className="form-control mr-1"
          onClick={() => {
            this.props.nerdUpdateCheck({
              actionType: 'expansion',
              category,
              level,
            });
          }}
          style={{ height: '100%' }}
        >
          {this.props.expanded
            ? FontIcon('faChevronDown')
            : FontIcon('faChevronRight')}
        </button>
      );
    };
    return (
      <div className="col-12 row m-0 p-0">
        <div className="col-2 m-0 p-0 pr-2 my-1 text-right">{getIcon()}</div>
        <div className="col-7 m-0 p-0 nerd-label pl-1">
          <div
            className={` ${
              enumDescendants('hasEnabled') ? 'text-success' : null
            } vertical-center`}
            style={{ float: 'left', height: '100%', lineHeight: '22px' }}
          >
            <span
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              title="Brief description will go here"
            >
              {this.props.label}&nbsp;
              {enumDescendants('count')}{' '}
            </span>
          </div>
        </div>
        <div className="col-3 m-0 p-0 row">
          <div className="col-12 m-0 p-0 row">
            <div className="col-6 m-0 p-0 my-1">
              <input
                checked={this.props.enabled}
                className="form-control mr-1"
                onChange={() => {
                  this.props.nerdUpdateCheck({
                    actionType: 'checked',
                    category,
                    level,
                  });
                }}
                id={`checkbox-${category}`}
                style={{ height: '100%' }}
                type="checkbox"
              />
            </div>
            <div className="col-6 m-0 p-0 my-1">
              <button className="btn btn-sm form-control btn-light font-weight-light text-uppercase nav-add-btn">
                nav+
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selector;
