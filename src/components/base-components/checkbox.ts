import { css, html, unsafeCSS } from 'lit'
import UncheckedIcon from '../../assets/checkbox-unchecked.svg'
import CheckedIcon from '../../assets/checkbox-checked.svg'
import { classMap } from 'lit-html/directives/class-map.js'

export type CheckboxProps = {
  children: ReturnType<typeof html>
  checked: boolean
  onChange: (nextValue: boolean) => void
}

export const Checkbox = {
  html: ({ children, checked, onChange }: CheckboxProps) => html`
    <label class="checkbox">
      <span class=${classMap({ checked })}></span>
      ${children}
      <input
        type="checkbox"
        ?checked=${checked}
        @change=${(ev: InputEvent) => {
          const nextValue = (ev.target as HTMLInputElement)!.checked
          onChange(nextValue)
        }}
      />
    </label>
  `,
  css: css`
    .checkbox {
      display: flex;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      align-self: self-start;
    }

    .checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkbox span {
      width: 1rem;
      height: 1rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(${unsafeCSS(UncheckedIcon)});
      align-self: center;
      margin-right: 0.5rem;
    }

    .checkbox span.checked {
      background-image: url(${unsafeCSS(CheckedIcon)});
    }
  `,
}
