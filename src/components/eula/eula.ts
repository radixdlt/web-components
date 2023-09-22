import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { themeCSS, variablesCSS } from '../../styles/theme'
import { Mode } from '../../_types'
import Cookies from 'js-cookie'
import '../modal/modal'
import '../modal/modal-button'
import '../modal/modal-close-button'
import '../link/link'
import '../checkbox/checkbox'

export const hasAcceptedEula = (cookieName = 'eulaAccepted') =>
  !!Cookies.get(cookieName)
export const acceptEula = (cookieName = 'eulaAccepted') => {
  Cookies.set(cookieName, 'true')
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
  show = true

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
      })
    )
  }

  onAccept() {
    acceptEula()
    this.show = false
    this.dispatchEvent(
      new CustomEvent('onAccept', {
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    if (this.show)
      return html`<radix-modal ?show=${this.show}>
        <radix-modal-close-button
          @onClick=${() => this.onClose()}
          style="position: absolute; right: 1rem;"
        >
          ></radix-modal-close-button
        >
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 1rem;">
          EULA License
        </div>
        <div style="font-size: 16px; margin-bottom: 1rem;">
          You must accept the terms of the End-User Licence Agreement (EULA)
        </div>
        <radix-checkbox
          id="eula-agreement"
          style="display: flex;"
          @onChange=${(ev: CustomEvent) => {
            this.checked = ev.detail
          }}
          >I agree with
          <radix-link
            href=${this.url}
            style="align-self: flex-end; margin-left: 0.2rem;"
            >EULA agreement</radix-link
          ></radix-checkbox
        >
        <div style="width: 180px; align-self: flex-end;">
          <radix-modal-button
            ?disabled=${!this.checked}
            @onClick=${() => this.onAccept()}
            >I agree</radix-modal-button
          >
        </div>
      </radix-modal>`

    return null
  }

  static styles = [variablesCSS, themeCSS]
}

declare global {
  interface HTMLElementTagNameMap {
    'radix-eula': RadixEula
  }
}
