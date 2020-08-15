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
            ? FontIcon('faChevronUp')
            : FontIcon('faChevronDown')}
        </button>
      );
    };
    return (
      <div className="col-8 row m-0 p-0">
        <div className="col-1 m-0 p-0 pr-2 my-1">{getIcon()}</div>
        <div className="col-9 m-0 p-0 nerd-label pl-1">
          <div
            className={enumDescendants('hasEnabled') ? 'text-success' : null}
            style={{ height: '100%' }}
          >
            {this.props.label} {enumDescendants('count')}
          </div>
        </div>
        <div className="col-2 m-0 p-0 row">
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
            <div className="col-6 border m-0 p-0 my-1">
              <button className="btn btn-sm form-control btn-light font-weight-light text-uppercase">
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
