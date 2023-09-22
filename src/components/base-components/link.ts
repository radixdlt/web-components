import { css, html, unsafeCSS } from 'lit'
import NorthEastArrowIcon from '../../assets/north-east-arrow.svg'
import { StyleInfo, styleMap } from 'lit-html/directives/style-map.js'

export type LinkProps = {
  href: string
  children: ReturnType<typeof html>
  style?: Readonly<StyleInfo>
}
export const Link = {
  html: ({ href, children, style = {} }: LinkProps) => html`<a
    target="_blank"
    href=${href}
    class="link"
    style=${styleMap(style)}
    >${children}
    <i class="icon-north-east-arrow"></i>
  </a>`,
  css: css`
    .link {
      color: var(--radix-link-color);
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 14px;
    }

    .link .icon-north-east-arrow::before {
      content: '';
      display: block;
      -webkit-mask-size: cover;
      mask-size: cover;
      background-color: var(--radix-card-text-dimmed-color);
      -webkit-mask-image: url(${unsafeCSS(NorthEastArrowIcon)});
      mask-image: url(${unsafeCSS(NorthEastArrowIcon)});
      width: 16px;
      height: 16px;
    }
  `,
}
