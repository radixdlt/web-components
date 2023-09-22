import { css } from 'lit'
import { html } from 'lit-html'

export type ModalProps = { show: boolean; children: ReturnType<typeof html> }
export const Modal = {
  html: ({ show, children }: ModalProps) =>
    show ? html`<div class="modal">${children}</div>` : '',
  css: css`
    :host(:not([show])) {
      display: none;
    }

    :host([show]) {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }

    .modal {
      position: relative;
      display: flex;
      flex-direction: column;
      opacity: 0;
      -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      margin-top: 20vh;
      background-color: var(--radix-card-background);
      padding: 1.5rem;
      border-radius: 12px;
      max-width: 778px;
      width: 100%;
    }

    @-webkit-keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }
  `,
}
