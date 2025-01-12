import { BoxComponent, MultiStep, MultiStepProps } from '@rafaumeu-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tags: ['autodocs'],
  title: 'Form/Multi step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <BoxComponent
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </BoxComponent>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
