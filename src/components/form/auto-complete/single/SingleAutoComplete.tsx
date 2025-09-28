import type { FC } from 'react'
import { useMemo } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import type { SimpleAutoCompleteProps } from './type'

interface PropsI extends SimpleAutoCompleteProps {
  value: string | undefined | null
  onChange?: (name: string, value: string | null | undefined) => void
  error?: any
  disabled?: boolean
}

const SingleAutoComplete: FC<PropsI> = ({
  name,
  options = [],
  value,
  variant = 'outlined',
  label,
  placeholder,
  onChange = () => {},
  disableClearable = false,
  error,
  helperText,
  sx = {},
  size = 'medium',
  required = false,
  disabled,
  disableOptionIds = []
}) => {
  const selectedValue = useMemo(
    () => (Array.isArray(options) && options.find(op => op.value === value)) || null,
    [options, value]
  )

  if (!name) return null

  return (
    <Autocomplete
      disableClearable={disableClearable}
      options={options}
      getOptionDisabled={dOpt => disableOptionIds.includes(dOpt.value)}
      value={selectedValue}
      disabled={disabled}
      onChange={(_, newValue) => {
        if (disabled) return

        onChange(name, newValue ? newValue.value : undefined)
      }}
      size={size}
      sx={sx}
      renderInput={params => (
        <TextField
          {...params}
          variant={variant}
          label={label}
          size={size}
          placeholder={placeholder}
          error={!!error}
          required={required}
          helperText={error?.message ? error?.message : helperText}
          disabled={disabled}
        />
      )}
    />
  )
}

export default SingleAutoComplete
