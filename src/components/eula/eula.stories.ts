import { Meta, StoryObj } from '@storybook/web-components'
import './eula'
import { html } from 'lit'

const meta: Meta = {
  title: 'Components / Eula',
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  render: (args) => html` <radix-eula ?show=${args.show}></radix-eula>`,
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
  args: {
    show: true,
    showCloseButton: true,
    buttonDisabled: true,
  },
}
