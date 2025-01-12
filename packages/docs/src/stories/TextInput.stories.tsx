import {
  BoxComponent,
  TextComponent,
  TextInput,
  TextInputProps,
} from '@rafaumeu-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tags: ['autodocs'],
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <BoxComponent
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <TextComponent size="sm">Email address</TextComponent>
          {Story()}
        </BoxComponent>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const withPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
