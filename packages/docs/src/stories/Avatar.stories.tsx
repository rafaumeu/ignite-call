import { Avatar, AvatarProps } from '@rafaumeu-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tags: ['autodocs'],
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rafaumeu.png',
    alt: 'Rafael Dias Zendron',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
