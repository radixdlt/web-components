import { css, html, unsafeCSS } from 'lit'
import CloseIcon from '../../assets/close.svg'
import { StyleInfo, styleMap } from 'lit-html/directives/style-map.js'

export type CloseButtonProps = {
  onClick: (event: MouseEvent) => void
  style?: Readonly<StyleInfo>
}
export const CloseButton = {
  html: ({ onClick, style = {} }: CloseButtonProps) =>
    html`<button
      class="close-button"
      style=${styleMap(style)}
      @click=${onClick}
    ></button>`,
  css: css`
    .close-button {
      mask-image: url(${unsafeCSS(CloseIcon)});
      -webkit-mask-image: url(${unsafeCSS(CloseIcon)});
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      background-color: var(--radix-card-text-color);
      width: 24px;
      height: 24px;
      align-self: flex-start;
      cursor: pointer;
      transition: opacity 0.1s ease-in-out;
    }

    .close-button:hover {
      opacity: 0.8;
    }
  `,
}
