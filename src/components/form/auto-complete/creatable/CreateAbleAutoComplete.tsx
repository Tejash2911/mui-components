import type { FC } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import type { CreateAbleAutoCompleteProps } from './type'

interface PropsI extends CreateAbleAutoCompleteProps {
  value: string[]
  onChange?: (name: string, value: any) => void
  error?: any
}

const CreatableAutoComplete: FC<PropsI> = ({
  name,
  options = [],
  value = [],
  variant = 'outlined',
  label,
  placeholder,
  onChange = () => {},
  disableClearable = false,
  error,
  helperText,
  sx = {},
  size = 'medium'
}) => {
  if (!name) return null

  return (
    <Autocomplete
      fullWidth
      multiple
      freeSolo
      disableClearable={disableClearable}
      options={options}
      value={Array.isArray(value) ? value : []}
      onChange={(_, newValue) => {
        const nValue = Array.isArray(newValue) ? newValue : []

        onChange(name, nValue)
      }}
      size={size}
      sx={sx}
      renderInput={params => (
        <TextField
          {...params}
          variant={variant}
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message ? error?.message : helperText}
        />
      )}
    />
  )
}

export default CreatableAutoComplete
