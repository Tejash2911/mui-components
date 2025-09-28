import type { AutocompletePropsSizeOverrides } from '@mui/material/Autocomplete'
import type { SxProps } from '@mui/material/styles'
import type { OverridableStringUnion } from '@mui/types'

export interface AvatarOptionI {
  label: string
  value: string
  url: string
}

export interface AutoCompleteAvatarProps {
  name: string
  label?: string
  placeholder?: string
  helperText?: string
  size?: OverridableStringUnion<'small' | 'medium', AutocompletePropsSizeOverrides>
  sx?: SxProps
  options: AvatarOptionI[]
  limitTags?: number
  showName?: boolean
}
