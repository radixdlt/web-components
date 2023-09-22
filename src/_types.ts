export const Mode = {
  light: 'light',
  dark: 'dark',
} as const

export type Mode = keyof typeof Mode
