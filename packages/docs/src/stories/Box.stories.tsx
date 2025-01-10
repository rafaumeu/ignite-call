import { Box, BoxComponent, BoxProps, TextComponent } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tags: ['autodocs'],
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Testing Box Element', // Texto inicial como string
  },
  argTypes: {
    children: {
      control: {
        type: 'text', // Permite editar como texto no painel do Storybook
      },
    },
  },
  render: (args) => (
    <BoxComponent>
      <TextComponent>{args.children}</TextComponent>{' '}
      {/* Mantém a estilização */}
    </BoxComponent>
  ),
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
