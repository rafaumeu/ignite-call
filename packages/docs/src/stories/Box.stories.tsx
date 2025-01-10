// Box.stories.tsx
import { Box, BoxProps, TextComponent } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <TextComponent>Testing Box Element</TextComponent>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
