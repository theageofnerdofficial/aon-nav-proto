import { createGlobalStyle } from 'styled-components';
import settings from '../config/settings';

const { ui } = settings;

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body, html {
    background: ${({ theme }) => theme['body']['background-color']};
    color: ${({ theme }) => theme['body']['color']};
  }

  .btn-modal-close {
    font-weight: 300;
  }

  .bg-custom {
    background-color: ${({ theme }) => theme['navbar-btn']['background-color']};
  }

  .btn-login {
    border: 0 !important;
    background: ${({ theme }) => theme.loginBtn};
    z-index: 999;
  }

  .trending-list-wrapper {
    background: ${({ theme }) => theme.loginBtn};
  }

  .post-newspost-wrapper {
    background: ${({ theme }) => 'theme.body'};
  }

  .post-newspost-content-wrapper {
    background: ${({ theme }) => theme.loginBtn} !important;
  }
  
  .navbar-bg-custom-panel {
    background: ${({ theme }) => theme.loginBtn} !important;
  }
  button.close {
    text-shadow: 0;
    color: ${({ theme }) => theme.text};
  }

  .footer {
    background-color: ${({ theme }) => theme.body};
  }

  // This is a gradient by default. For solid, make start & end values the same:
  .feed-title {
    background: -moz-linear-gradient(left, rgba(${({ theme }) =>
      theme['feed-title']['start-gradient-rgb']},1) 0%, rgba(${({ theme }) =>
  theme['feed-title']['end-gradient-rgb']},0) 100%);
    background: -webkit-linear-gradient(left, rgba(${({ theme }) =>
      theme['feed-title']['start-gradient-rgb']},1) 0%,rgba(${({ theme }) =>
  theme['feed-title']['end-gradient-rgb']},0) 100%);
    background: linear-gradient(to right, rgba(${({ theme }) =>
      theme['feed-title']['start-gradient-rgb']},1) 0%,rgba(${({ theme }) =>
  theme['feed-title']['end-gradient-rgb']}5,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${({
      theme,
    }) => theme['feed-title']['start-gradient']}', endColorstr='${({ theme }) =>
  theme['feed-title']['end-gradient']}',GradientType=1 );
  }
 
  .modal-content {
    background-color: ${({ theme }) => theme.modalBody} !important;
    border: 0;
  }

  .modal-dialog {
    color: ${({ theme }) => theme.text};
  }

  .modal-body, .modal-footer, .modal-header {
    background-color: ${({ theme }) => theme.modalBody} !important;
    border-color: ${({ theme }) => theme.modalBody};
    color: ${({ theme }) => theme.text};
  }
  
  .post-wrapper {
    background: ${({ theme }) => theme.navBtnBg};
    color: ${({ theme }) => theme.text};
  }

  a, .btn-link {
    cursor: pointer;
  }

  a.nav-link {
    font-weight: 600;
    text-transform: uppercase !important;
  }
  
  .nav-btn-link {
    background: ${({ theme }) => theme['nav-btn-link']['background']};
    color: ${({ theme }) => theme['nav-btn-link']['color']};
    cursor: ${({ theme }) => theme['nav-btn-link']['cursor']};
    font-weight: ${({ theme }) => theme['nav-btn-link']['font-weight']};
    transition: ${({ theme }) => theme['nav-btn-link']['transition']};
  }
  
  .nav-btn-link:active,
  .nav-btn-link:hover {
    color: var(--cyan);
  }
  
  .nav-btn-link-settings-ico {
  }
  
  .nav-btn-link-settings-txt {
  }
  
  .nav-btn-link-light-toggle-ico {
  }
  
  .nav-btn-link-light-toggle-txt {
  }
  
  .nav-btn-link-fb-ico {
  }
  
  .nav-btn-link-fb-txt {
  }
  
  .nav-btn-link-twitter-ico {
  }
  
  .nav-btn-link-twitter-txt {
  }
  
  .nav-btn-link-insta-ico {
  }
  
  .nav-btn-link-insta-txt {
  }
  
  .hero-bg-2 {
    background-color: ${({ theme }) => theme['hero-bg-2']['background-color']};
  }
  
  .hero-bg-img {
    filter: ${({ theme }) => theme['hero-bg-img']['filter']};
    height: ${({ theme }) => theme['hero-bg-img']['height']};
    opacity: ${({ theme }) => theme['hero-bg-img']['opacity']};
    transform: ${({ theme }) => theme['hero-bg-img']['transform']};
    -webkit-filter: ${({ theme }) => theme['hero-bg-img']['-webkit-filter']};
    width: ${({ theme }) => theme['hero-bg-img']['width']};
    z-index: ${({ theme }) => theme['hero-bg-img']['z-index']};
  }
  
  .hero-links-general-wrapper {
    height: ${({ theme }) => theme['hero-links-general-wrapper']['height']};
    left: ${({ theme }) => theme['hero-links-general-wrapper']['left']};
    position: ${({ theme }) => theme['hero-links-general-wrapper']['position']};
    width: ${({ theme }) => theme['hero-links-general-wrapper']['width']};
  }
  
  .hero-links-social-wrapper {
    height: ${({ theme }) => theme['hero-links-social-wrapper']['height']};
    position: ${({ theme }) => theme['hero-links-social-wrapper']['position']};
    right: ${({ theme }) => theme['hero-links-social-wrapper']['right']};
    width: ${({ theme }) => theme['hero-links-social-wrapper']['width']};
  }
  
  .hero-links-wrapper {
    margin-top: ${({ theme }) => theme['hero-links-wrapper']['margin-top']};
    z-index: ${({ theme }) => theme['hero-links-wrapper']['z-index']};
  }
  
  .header-sub-wrapper {
    height: ${({ theme }) => theme['header-sub-wrapper']['height']};
    left: ${({ theme }) => theme['header-sub-wrapper']['left']};
    position: ${({ theme }) => theme['header-sub-wrapper']['position']};
    right: ${({ theme }) => theme['header-sub-wrapper']['right']};
    top: ${({ theme }) => theme['header-sub-wrapper']['top']};
    width: ${({ theme }) => theme['header-sub-wrapper']['width']};
    z-index: ${({ theme }) => theme['header-sub-wrapper']['z-index']};
  }
  
  .nav-btn-active {
    color: ${({ theme }) => theme['nav-btn-active']['color']};
    text-decoration: ${({ theme }) =>
      theme['nav-btn-active']['text-decoration']};
  }
  
  .navbar-bg-custom {
    background-color: ${({ theme }) =>
      theme['navbar-bg-custom']['background-color']};
  }
  
  .navbar-brand {
    font-weight: ${({ theme }) => theme['navbar-brand']['font-weight']};
    text-transform: ${({ theme }) => theme['navbar-brand']['text-transform']};
  }
  
  .navbar-btn {
    background-color: ${({ theme }) => theme['navbar-btn']['background-color']};
    border: ${({ theme }) => theme['navbar-btn']['border']};
    color: ${({ theme }) => theme['navbar-btn']['color']};
    font-size: ${({ theme }) => theme['navbar-btn']['font-size']};
    font-weight: ${({ theme }) => theme['navbar-btn']['font-weight']};
    letter-spacing: ${({ theme }) => theme['navbar-btn']['letter-spacing']};
  }
  
  .nav-btn-home,
  .nav-btn-mynerd,
  .nav-btn-tvfilm,
  .nav-btn-comics,
  .nav-btn-gaming {
    border-bottom: ${({ theme }) =>
      '2px solid ' + theme['navbar-btn']['background-color']};
    transition: border 0.8s;
  }
  
  .nav-btn-home:hover,
  .nav-btn-mynerd:hover,
  .nav-btn-tvfilm:hover,
  .nav-btn-comics:hover,
  .nav-btn-gaming:hover {
    background-color: ${({ theme }) =>
      theme['navbar-btn-active']['background-color']} !important;
    text-decoration: underline;
    transition: background 1.8s;
  }
  
  .nav-btn-home:active,
  .nav-btn-home:focus,
  .nav-btn-mynerd:active,
  .nav-btn-mynerd:focus,
  .nav-btn-tvfilm:active,
  .nav-btn-tvfilm:focus,
  .nav-btn-comics:active,
  .nav-btn-comics:focus,
  .nav-btn-gaming:active,
  .nav-btn-gaming:focus {
    background-color: ${({ theme }) =>
      theme['navbar-btn-active']['background-color']} !important;
  }

  .nav-btn-home:hover,
  .nav-btn-home-active {
    border-bottom: 2px solid ${ui.style.sectionTab.featured} !important;
  }
  
  .nav-btn-mynerd:hover,
  .nav-btn-mynerd-active {
    border-bottom: 2px solid ${ui.style.sectionTab.mynerd} !important;
  }
  
  .nav-btn-tvfilm:hover,
  .nav-btn-tvfilm-active {
    border-bottom: 2px solid ${ui.style.sectionTab.tvfilm} !important;
  }
  
  .nav-btn-comics:hover,
  .nav-btn-comics-active {
    border-bottom: 2px solid ${ui.style.sectionTab.comics} !important;
  }
  
  .nav-btn-gaming:hover,
  .nav-btn-gaming-active {
    border-bottom: 2px solid ${ui.style.sectionTab.gaming.modern} !important;
  }
  
  .navbar-logo-wrapper {
    height: ${({ theme }) => theme['navbar-logo-wrapper']['height']};
    left: ${({ theme }) => theme['navbar-logo-wrapper']['left']};
    margin-left: ${({ theme }) => theme['navbar-logo-wrapper']['margin-left']};
    margin-right: ${({ theme }) =>
      theme['navbar-logo-wrapper']['margin-right']};
    margin-top: ${({ theme }) => theme['navbar-logo-wrapper']['margin-top']};
    position: ${({ theme }) => theme['navbar-logo-wrapper']['position']};
    right: ${({ theme }) => theme['navbar-logo-wrapper']['right']};
    text-align: ${({ theme }) => theme['navbar-logo-wrapper']['text-align']};
    width: ${({ theme }) => theme['navbar-logo-wrapper']['width']};
    z-index: ${({ theme }) => theme['navbar-logo-wrapper']['z-index']};
  }
  
  .navbar-custom {
    box-shadow: ${({ theme }) => theme['navbar-custom']['box-shadow']};
  }
  
  .navbar-logo-wrapper > img {
    width: ${({ theme }) => theme['navbar-logo-wrapper > img']['width']};
  }
  
  .vertical-center {
    align-items: ${({ theme }) => theme['vertical-center']['align-items']};
    display: ${({ theme }) => theme['vertical-center']['display']};
    justify-content: ${({ theme }) =>
      theme['vertical-center']['justify-content']};
  }

  @media only screen and (max-width: 768px) {
    .navbar-btn {
      font-size: 1em;
      height: 55px;
    }
    .navbar-custom {
      padding: 0 !important;
    }
    .navbar-logo-wrapper {
      width: 160px !important;
    }
    .navbar-logo-wrapper > img {
      width: 165px;
    }
  }
  `;
