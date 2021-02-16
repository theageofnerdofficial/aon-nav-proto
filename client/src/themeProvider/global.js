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

  .border {
    border-color: ${({ theme }) => theme['border']['color']} !important
  }

  `;
