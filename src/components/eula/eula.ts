import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { themeCSS, variablesCSS } from '../../styles/theme'
import { Mode } from '../../_types'
import Cookies from 'js-cookie'
import { Modal } from '../base-components/modal'
import { CloseButton } from '../base-components/close-button'
import { Box } from '../base-components/box'
import { Checkbox } from '../base-components/checkbox'
import { Link } from '../base-components/link'
import { Button } from '../base-components/button'

export const EulaCookieHelper = {
  hasAcceptedEula: (cookieName = 'eulaAccepted') => !!Cookies.get(cookieName),
  acceptEula: (cookieName = 'eulaAccepted') =>
    !!Cookies.set(cookieName, 'true'),
  Cookies,
}

@customElement('radix-eula')
export class RadixEula extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  mode: Mode = Mode.light

  @property({
    type: String,
  })
  cookieName = 'eulaAccepted'

  @property({
    type: String,
  })
  url: string = ''

  @property({
    type: Boolean,
    reflect: true,
  })
  show = false

  @property({
    type: Boolean,
  })
  checked = false

  onClose() {
    this.show = false
    this.dispatchEvent(
      new CustomEvent('onClose', {
        bubbles: true,
        composed: true,
        detail: {
          eulaAccepted: EulaCookieHelper.hasAcceptedEula(this.cookieName),
        },
      })
    )
  }

  onAccept() {
    EulaCookieHelper.acceptEula()
    this.show = false
    this.dispatchEvent(
      new CustomEvent('onClose', {
        bubbles: true,
        composed: true,
        detail: {
          eulaAccepted: EulaCookieHelper.hasAcceptedEula(this.cookieName),
        },
      })
    )
  }

  render() {
    return Modal.html({
      show: this.show,
      children: html`
        ${CloseButton.html({
          onClick: () => this.onClose(),
        })}
        ${Box.html({
          children: html`EULA License`,
          className: 'header',
        })}
        ${Box.html({
          children: html`You must accept the terms of the End-User License
          Agreement (EULA)`,
          className: 'text',
        })}
        ${Checkbox.html({
          checked: this.checked,
          onChange: (nextValue) => {
            this.checked = nextValue
          },
          children: html`I agree with
          ${Link.html({
            href: this.url,
            children: html`EULA agreement`,
            style: { alignSelf: 'flex-end', marginLeft: '0.2rem' },
          })}`,
        })}
        ${Button.html({
          disabled: !this.checked,
          onClick: () => {
            this.onAccept()
          },
          children: html`I agree`,
        })}
      `,
    })
  }

  static styles = [
    variablesCSS,
    themeCSS,
    Modal.css,
    Checkbox.css,
    Button.css,
    CloseButton.css,
    Link.css,
    css`
      .close-button {
        position: absolute;
      }

      .header {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .text {
        font-size: 16px;
        margin-bottom: 1rem;
      }

      .button {
        margin-top: 1rem;
        align-self: flex-end;
      }

      .modal {
        text-align: center;
      }

      .checkbox {
        align-self: center;
      }

      @media (min-width: 768px) {
        .close-button {
          right: 1rem;
        }
        .modal {
          text-align: left;
        }
        .button {
          width: 180px;
          margin-top: 0;
        }
        .checkbox {
          align-self: self-start;
        }
      }
    `,
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'radix-eula': RadixEula
  }
}
