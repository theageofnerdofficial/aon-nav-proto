// Imports:
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid SVG icons:
import { faArchway, faCog } from '@fortawesome/free-solid-svg-icons';

// Brand SVG icons:
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const FontIcon = (icon) => {
  let faIcon;
  switch (icon) {
    case 'faArchway':
      faIcon = faArchway;
      break;
    case 'faCog':
      faIcon = faCog;
      break;
    case 'faFacebook':
      faIcon = faFacebook;
      break;
    case 'faInstagramSquare':
      faIcon = faInstagramSquare;
      break;
    case 'faTwitter':
      faIcon = faTwitter;
      break;
    default:
      faIcon = faArchway;
  }
  return <FontAwesomeIcon icon={faIcon} />;
};

export default FontIcon;