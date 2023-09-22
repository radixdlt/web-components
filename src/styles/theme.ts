import { css } from 'lit'
import './fonts.css'

export const variablesCSS = css`
  :host {
    /* Core colors */
    --color-radix-green-1: #00ab84;
    --color-radix-green-2: #00c389;
    --color-radix-green-3: #21ffbe;
    --color-radix-blue-1: #060f8f;
    --color-radix-blue-2: #052cc0;
    --color-radix-blue-3: #20e4ff;
    --color-light: #ffffff;
    --color-dark: #000000;

    /* Accent colors */
    --color-accent-red: #ef4136;
    --color-accent-blue: #00aeef;
    --color-accent-yellow: #fff200;
    --color-alert: #e59700;
    --color-radix-error-red-1: #c82020;
    --color-radix-error-red-2: #fcebeb;

    /* Neutral colors */
    --color-grey-1: #003057;
    --color-grey-2: #8a8fa4;
    --color-grey-3: #ced0d6;
    --color-grey-4: #e2e5ed;
    --color-grey-5: #f4f5f9;
  }
`

export const themeCSS = css`
  :host {
    font-family: 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  :host([mode='light']) {
    --radix-link-color: var(--color-radix-blue-2);
    --radix-card-background: var(--color-light);
    --radix-card-text-color: var(--color-grey-1);
    --radix-card-text-dimmed-color: var(--color-grey-2);
    --radix-card-inverted-background: var(--color-grey-1);
    --radix-card-inverted-text-color: var(--color-light);
    color: var(--color-grey-1);
  }

  :host([mode='dark']) {
    --radix-link-color: var(--color-white);
    --radix-card-background: #515151;
    --radix-card-text-color: var(--color-light);
    --radix-card-text-dimmed-color: var(--color-grey-3);
    --radix-card-inverted-background: var(--color-grey-5);
    --radix-card-inverted-text-color: var(--color-grey-1);
    color: var(--color-light);
  }

  button {
    font-weight: 500;
    transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);
    border-radius: 12px;
    border: none;
    background: var(--radix-button-background);
    color: var(--radix-button-text-color);
    font-size: 14px;
    font-weight: 600;
  }
`
