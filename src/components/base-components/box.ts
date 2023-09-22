import { html } from 'lit'
import { StyleInfo, styleMap } from 'lit-html/directives/style-map.js'

export type BoxProps = {
  children: ReturnType<typeof html>
  style?: Readonly<StyleInfo>
  className?: string
}

export const Box = {
  html: ({ children, style = {}, className = '' }: BoxProps) => html`<div
    class=${className}
    style=${styleMap(style)}
  >
    ${children}
  </div>`,
}
