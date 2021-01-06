import React, { Component } from 'react';
import FontIcon from '../Components/FontIcon/FontIcon';

class Selector extends Component {
  render() {
    const {
      category,
      descendants,
      enabled,
      expanded,
      label,
      level,
      nerdUpdateCheck,
      tabColour,
      tooltip,
    } = this.props;

    /* Enumerate descendants in order to count or 
       to see which ones are enabled:
     **********************************************/
    const enumDescendants = (actionType) => {
      let enabled = 0;
      if (descendants) {
        descendants.forEach((descendant) => {
          if (descendant.isEnabled) enabled += 1;
        });
      }
      if (actionType === 'count') {
        return descendants ? `(${enabled}/${descendants.length})` : null;
      } else if (actionType === 'hasEnabled') {
        if (enabled >= 1) return true;
      }
    };

    /* The icon will either be an expanding button
       or a - (depending on descendants):
     **********************************************/
    const getIcon = () => {
      if (!descendants || !descendants.length >= 1) {
        return '-';
      }
      return (
        <button
          className="form-control mr-1"
          onClick={() => {
            nerdUpdateCheck({
              actionType: 'expansion',
              category,
              level,
            });
          }}
          style={{
            borderBottomColor: tabColour,
            borderBottomWidth: '2px',
            cursor: 'pointer',
            height: '100%',
          }}
        >
          {expanded ? FontIcon('faChevronDown') : FontIcon('faChevronRight')}
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
            style={{
              cursor: 'help',
              float: 'left',
              height: '100%',
              lineHeight: '22px',
            }}
          >
            <span
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              style={{
                fontSize: 20,
                letterSpacing: 0,
              }}
              title={
                tooltip
                  ? tooltip
                  : 'Sorry, no description is available for this item'
              }
            >
              {label}&nbsp;
              {enumDescendants('count')}{' '}
            </span>
          </div>
        </div>
        <div className="col-3 m-0 p-0 row">
          <div className="col-12 m-0 p-0 row">
            <div className="col-6 m-0 p-0 my-1">
              <input
                checked={enabled}
                className="form-control mr-1"
                onChange={() => {
                  nerdUpdateCheck({
                    actionType: 'checked',
                    category,
                    level,
                  });
                }}
                id={`checkbox-${category}`}
                style={{ cursor: 'pointer', height: '100%' }}
                type="checkbox"
              />
            </div>
            <div className="col-6 m-0 p-0 my-1">
              <button className="btn btn-light btn-sm form-control font-weight-light nav-add-btn text-uppercase">
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
