import { Avatar, AvatarProps as OriginalAvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

interface AvatarProps extends OriginalAvatarProps {
  children?: React.ReactNode
  src?: string
}

export default {
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
