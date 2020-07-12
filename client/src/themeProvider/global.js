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
  
  .navbar-btn {
    background: ${({ theme }) => theme.navBtnBg};
    border-color: ${({ theme }) => theme.navBtnBorder};
    
  }
  .nav-btn-active {
    color: ${({ theme }) => theme.navBtnColActive} !important;
  }

  .bg-custom-2 {
    background-color: ${({ theme }) => theme.heroBgCol};
  }

  .hero-bg-img {
    opacity: ${({ theme }) => theme.heroBgImgOpacity}
  }

  .footer {
    background-color: ${({ theme }) => theme.body}
  }
  `;
