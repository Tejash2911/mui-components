import type { FC } from 'react'
import { useMemo } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import type { MultiAutoCompleteProps, OptionI } from './type'

interface PropsI extends MultiAutoCompleteProps {
  value: string[]
  onChange?: (name: string, value: string[]) => void
  error?: any
}

const MultiAutoComplete: FC<PropsI> = ({
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
  disableCloseOnSelect = true,
  disabled,
  showFilter = false
}) => {
  const selectedValue = useMemo(() => {
    if (Array.isArray(options) && Array.isArray(value)) {
      return options.filter(op => value.includes(op.value))
    }

    return []
  }, [options, value])

  const nOptions = useMemo(() => {
    if (showFilter) {
      return [...options].splice(0, 100)
    }

    return options
  }, [showFilter, options])

  if (!name) return null

  const filterOptions = (_: OptionI[], state: any) => {
    const filtered = options.filter(option => option.label.toLowerCase().includes(state.inputValue.toLowerCase()))

    if (showFilter) {
      return filtered.slice(0, 100)
    }

    return options
  }

  return (
    <Autocomplete
      multiple
      disableClearable={disableClearable}
      disabled={disabled}
      options={nOptions}
      value={selectedValue}
      onChange={(_, newValue) => {
        if (disabled) return
        const nValue = Array.isArray(newValue) ? newValue.map(i => i.value) : []

        onChange(name, nValue)
      }}
      size={size}
      sx={sx}
      disableCloseOnSelect={disableCloseOnSelect}
      {...(showFilter ? { filterOptions } : {})}
      renderInput={params => (
        <TextField
          {...params}
          variant={variant}
          label={label}
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

export default MultiAutoComplete
