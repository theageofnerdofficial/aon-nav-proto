// Imports:
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid SVG icons:
import {
  faArchway,
  faAt,
  faBan,
  faCaretDown,
  faCaretUp,
  faCog,
  faDownload,
  faEllipsisV,
  faFileAlt,
  faMoon,
  faPlus,
  faWrench,
  faSun,
  faTasks,
  faUser,
  faUserAlt,
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
    case 'faAt':
      faIcon = faAt;
      break;
    case 'faBan':
      faIcon = faBan;
      break;
    case 'faCaretDown':
      faIcon = faCaretDown;
      break;
    case 'faCaretUp':
      faIcon = faCaretUp;
      break;
    case 'faCog':
      faIcon = faCog;
      break;
    case 'faEllipsisV':
      faIcon = faEllipsisV;
      break;
    case 'faDownload':
      faIcon = faDownload;
      break;
    case 'faFacebook':
      faIcon = faFacebook;
      break;
    case 'faFileAlt':
      faIcon = faFileAlt;
      break;
    case 'faInstagramSquare':
      faIcon = faInstagramSquare;
      break;
    case 'faMoon':
      faIcon = faMoon;
      break;
    case 'faPlus':
      faIcon = faPlus;
      break;
    case 'faRedditAlien':
      faIcon = faRedditAlien;
      break;
    case 'faSun':
      faIcon = faSun;
      break;
    case 'faTasks':
      faIcon = faTasks;
      break;
    case 'faTwitter':
      faIcon = faTwitter;
      break;
    case 'faWrench':
      faIcon = faWrench;
      break;
    case 'faUserAlt':
      faIcon = faUserAlt;
      break;
    case 'faUser':
      faIcon = faUser;
      break;
    default:
      faIcon = faArchway;
  }
  return <FontAwesomeIcon icon={faIcon} />;
};

export default FontIcon;
