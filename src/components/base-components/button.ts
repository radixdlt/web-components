import { css, html } from 'lit'
import { StyleInfo, styleMap } from 'lit-html/directives/style-map.js'

export type ButtonProps = {
  disabled: boolean
  onClick: (event: MouseEvent) => void
  children: ReturnType<typeof html>
  style?: Readonly<StyleInfo>
}

export const Button = {
  html: ({
    disabled,
    onClick,
    children,
    style = {},
  }: ButtonProps) => html`<button
    class="button"
    ?disabled=${disabled}
    @click=${onClick}
    style=${styleMap(style)}
  >
    ${children}
  </button>`,
  css: css`
    .button {
      background-color: var(--color-radix-blue-2);
      color: var(--color-light);
      padding: 0.7rem 1rem;
      cursor: pointer;
      width: 100%;
      transition: opacity 0.1s ease-in-out;
    }

    .button[disabled] {
      opacity: 0.5;
      cursor: default;
    }

    .button[disabled]:hover {
      opacity: 0.5;
    }

    .button:hover {
      opacity: 0.8;
    }
  `,
}
