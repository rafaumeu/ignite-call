import { TextProps as OriginalTextProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

interface TextProps extends OriginalTextProps {
  children?: React.ReactNode
}

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aperiam libero a earum totam natus perferendis odio aspernatur, quaerat unde, in nostrum illo saepe delectus. Aspernatur placeat obcaecati dolore sunt?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
