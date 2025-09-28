import type { SxProps, TextFieldPropsSizeOverrides, TextFieldVariants } from '@mui/material'
import type { OverridableStringUnion } from '@mui/types'

export interface OptionI {
  label: string
  value: string
}

export interface MultiAutoCompleteProps extends TextFieldPropsSizeOverrides {
  name: string
  options: OptionI[]
  variant?: TextFieldVariants
  label?: string
  placeholder?: string
  sx?: SxProps
  disableClearable?: boolean
  helperText?: string
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides>
  required?: boolean
  disableCloseOnSelect?: boolean
  disabled?: boolean
  showFilter?: boolean
}
