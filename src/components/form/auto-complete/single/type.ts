import type { SxProps, TextFieldPropsSizeOverrides, TextFieldVariants } from '@mui/material'
import type { OverridableStringUnion } from '@mui/types'

export interface OptionI {
  label: string
  value: string
}

export interface SimpleAutoCompleteProps extends TextFieldPropsSizeOverrides {
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
  disabled?: boolean
  onChange?: (name: string, value: string | null | undefined) => void
  disableOptionIds?: (string | number)[]
}
