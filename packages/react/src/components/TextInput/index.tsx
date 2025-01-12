import { ComponentProps, forwardRef, Ref } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ prefix, ...props }: TextInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'
