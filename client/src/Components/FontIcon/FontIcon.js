// Imports:
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid SVG icons:
import {
  faArchway,
  faCog,
  faEllipsisV,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

// Brand SVG icons:
import {
  faFacebook,
  faInstagramSquare,
  faRedditAlien,
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
    case 'faEllipsisV':
      faIcon = faEllipsisV;
      break;
    case 'faFacebook':
      faIcon = faFacebook;
      break;
    case 'faInstagramSquare':
      faIcon = faInstagramSquare;
      break;
    case 'faMoon':
      faIcon = faMoon;
      break;
    case 'faRedditAlien':
      faIcon = faRedditAlien;
      break;
    case 'faSun':
      faIcon = faSun;
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
