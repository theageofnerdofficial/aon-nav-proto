import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text};
  }
  
  .bg-custom-2 {
    background-color: ${({ theme }) => theme.heroBgCol};
  }

  .btn-modal-close {
    font-weight: 300;
  }

  .btn-light {
    background-color: ${({ theme }) => theme.navBtnBg} !important;
    color: ${({ theme }) => theme.navBtnCol};
  }

  .btn-login {
    border: 0 !important;
  }

  button.close {
    text-shadow: 0;
    color: ${({ theme }) => theme.text};
  }

  .footer {
    background-color: ${({ theme }) => theme.body};
  }

  .hero-bg-img {
    opacity: ${({ theme }) => theme.heroBgImgOpacity};
  }

  input {
    background-color: ${({ theme }) => theme.modalBody} !important;
    color: ${({ theme }) => theme.text} !important;
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
  
  .nav-btn-active {
    color: ${({ theme }) => theme.navBtnColActive} !important;
  }

  .navbar-btn {
    background: ${({ theme }) => theme.navBtnBg};
    border-color: ${({ theme }) => theme.navBtnBorder};
  }
  `;
