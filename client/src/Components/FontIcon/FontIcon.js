// Imports:
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid SVG icons:
import {
  faAd,
  faArchway,
  faArrowUp,
  faAt,
  faBan,
  faBug,
  faCircle,
  faCalendar,
  faCaretDown,
  faCaretUp,
  faCog,
  faCheckCircle,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortNumericDown,
  faSortNumericUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faDownload,
  faVolumeMute,
  faVolumeUp,
  faEdit,
  faEllipsisV,
  faExclamationTriangle,
  faFileAlt,
  faMoon,
  faPlus,
  faTrashAlt,
  faSun,
  faTasks,
  faTimes,
  faWrench,
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
    case 'faAd':
      faIcon = faAd;
      break;
    case 'faArchway':
      faIcon = faArchway;
      break;
    case 'faArrowUp':
      faIcon = faArrowUp;
      break;
    case 'faAt':
      faIcon = faAt;
      break;
    case 'faBan':
      faIcon = faBan;
      break;
    case 'faBug':
      faIcon = faBug;
      break;
    case 'faCalendar':
      faIcon = faCalendar;
      break;
    case 'faCaretDown':
      faIcon = faCaretDown;
      break;
    case 'faCaretUp':
      faIcon = faCaretUp;
      break;
    case 'faCheckCircle':
      faIcon = faCheckCircle;
      break;
    case 'faChevronDown':
      faIcon = faChevronDown;
      break;
    case 'faChevronLeft':
      faIcon = faChevronLeft;
      break;
    case 'faChevronRight':
      faIcon = faChevronRight;
      break;
    case 'faChevronUp':
      faIcon = faChevronUp;
      break;
    case 'faCircle':
      faIcon = faCircle;
      break;
    case 'faCog':
      faIcon = faCog;
      break;
    case 'faExclamationTriangle':
      faIcon = faExclamationTriangle;
      break;
    case 'faEllipsisV':
      faIcon = faEllipsisV;
      break;
    case 'faDownload':
      faIcon = faDownload;
      break;
    case 'faEdit':
      faIcon = faEdit;
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
    case 'faSortNumericDown':
      faIcon = faSortNumericDown;
      break;
    case 'faSortNumericUp':
      faIcon = faSortNumericUp;
      break;
    case 'faSortAlphaDown':
      faIcon = faSortAlphaDown;
      break;
    case 'faSortAlphaUp':
      faIcon = faSortAlphaUp;
      break;
    case 'faSun':
      faIcon = faSun;
      break;
    case 'faTasks':
      faIcon = faTasks;
      break;
    case 'faTimes':
      faIcon = faTimes;
      break;
    case 'faTrashAlt':
      faIcon = faTrashAlt;
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
    case 'faVolumeMute':
      faIcon = faVolumeMute;
      break;
    case 'faVolumeUp':
      faIcon = faVolumeUp;
      break;
    default:
      faIcon = faArchway;
  }
  return <FontAwesomeIcon icon={faIcon} />;
};

export default FontIcon;
