import type { ChangeEventHandler } from 'react'
import type { TextFieldProps } from '@mui/material'

export type InputPropsI = TextFieldProps & {
  name: string
  helperText?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  upperCase?: boolean
}
