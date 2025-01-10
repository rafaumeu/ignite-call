import { ComponentProps } from '@stitches/react'
import { ElementType, ReactNode } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray-600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
  children?: ReactNode
}

export const BoxComponent: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}
