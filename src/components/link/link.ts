import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { themeCSS } from '../../styles/theme'

import NorthEastArrowIcon from '../../assets/north-east-arrow.svg'
import { Mode } from '../../_types'
@customElement('radix-link')
export class RadixLink extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  mode: Mode = Mode.light

  @property({
    type: String,
  })
  href: string = ''

  render() {
    return html`<a target="_blank" href=${this.href} class="link"
      ><slot></slot>
      <i class="icon-north-east-arrow"></i>
    </a>`
  }

  static styles = [
    themeCSS,
    css`
      .link {
        color: var(--radix-link-color);
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .icon-north-east-arrow::before {
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
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'radix-link': RadixLink
  }
}
