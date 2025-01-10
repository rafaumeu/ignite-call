import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckboxContainer> {}
export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
CheckBox.displayName = 'CheckBox'
