import { Meta, StoryObj } from '@storybook/web-components'
import './modal'
import { html } from 'lit'

const meta: Meta = {
  title: 'Components / Modal',
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  render: (args) =>
    html` <radix-modal ?show=${args.show}> A modal</radix-modal> `,
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
  args: {
    show: true,
  },
}
