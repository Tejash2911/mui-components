import type { ReactNode } from 'react'
import type { SxProps } from '@mui/material'

export interface CheckboxPropsI {
  name: string
  helperText?: string
  label?: ReactNode
  required?: boolean
  sx?: SxProps
  onChange?: (name: string, value: boolean) => void
  disabled?: boolean
  checked?: boolean
}
