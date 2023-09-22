import { Meta, StoryObj } from '@storybook/web-components'
import './eula'
import { html } from 'lit'

const meta: Meta = {
  title: 'Components / Eula',
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  render: (args) =>
    html` <radix-eula
      ?show=${args.show}
      url="https://radixdlt.com"
      mode=${args.mode}
    ></radix-eula>`,
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
  args: {
    show: true,
    mode: 'light',
  },
}
