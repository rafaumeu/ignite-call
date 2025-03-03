import {
  BoxComponent,
  TextArea,
  TextAreaProps,
  TextComponent,
} from '@rafaumeu-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tags: ['autodocs'],
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <BoxComponent
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <TextComponent size="sm">Observations</TextComponent>
          {Story()}
        </BoxComponent>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
