// src/styles/GlobalStyles.ts
'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-lato), sans-serif;
    font-weight: 400; /* Lato Regular como padrão */
    font-size: 16px !important; /* 16px */
    background-color: #f5f5f5;
    color: #133F20;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: var(--font-playfair), serif;
    font-size: 64px !important; /* 64px */
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-family: var(--font-lato), sans-serif;
    font-size: 1rem; /* 16px */
    font-weight: 400; /* Lato Regular */
    line-height: 1.5;
  }

  /* Classes auxiliares para textos específicos */
  .text-bold {
    font-weight: 700; /* Lato Bold */
  }

  .text-extrabold {
    font-weight: 900; /* Lato ExtraBold */
  }
`;