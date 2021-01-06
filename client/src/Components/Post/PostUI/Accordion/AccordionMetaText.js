/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class AccordionMetaText extends Component {
  render() {
    const { FontIcon, labels, settings, utils } = this.props;
    const { permalink, source, source_data, upvote_ratio } = this.props.data;
    return (
      <div className="float-left text-left">
        {utils.str.makeTitleCase(source_data.category)}
        {source_data.category === 'gaming'
          ? utils.str.makeTitleCase(
              source_data.categoryGaming === 'modernandretrogames'
                ? ` (${settings.categories.gaming[2].replaceAll(/And/gi, '&')})`
                : null
            )
          : null}
        <hr className="m-0" />
        <span className="text-muted">
          {labels.ui.posts.accordionContent.voteScore}: {upvote_ratio * 100} %
        </span>
        <br />
        <br />
        <a href={permalink.toString()} target="_blank">
          {FontIcon('faExternalLinkAlt')}&nbsp;Original {source} Post
        </a>
      </div>
    );
  }
}

export default AccordionMetaText;
