import type { SxProps, TextFieldPropsSizeOverrides, TextFieldVariants } from '@mui/material'
import type { OverridableStringUnion } from '@mui/types'

export interface CreateAbleAutoCompleteProps extends TextFieldPropsSizeOverrides {
  name: string
  options: string[]
  variant?: TextFieldVariants
  label?: string
  placeholder?: string
  sx?: SxProps
  disableClearable?: boolean
  helperText?: string
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides>
}
