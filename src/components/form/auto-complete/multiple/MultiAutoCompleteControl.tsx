import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import MultiAutoComplete from './MultiAutoComplete'
import type { MultiAutoCompleteProps } from './type'

const MultiAutoCompleteControl: FC<MultiAutoCompleteProps> = ({
  name,
  options = [],
  disableClearable,
  helperText,
  label,
  placeholder,
  size = 'medium',
  sx = {},
  variant = 'outlined',
  required = false,
  disableCloseOnSelect = true,
  disabled,
  showFilter
}) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MultiAutoComplete
          name={name}
          value={field.value}
          options={options}
          onChange={(_, nValue) => field.onChange(nValue)}
          error={error}
          disableClearable={disableClearable}
          helperText={helperText}
          label={label}
          placeholder={placeholder}
          size={size}
          sx={sx}
          variant={variant}
          required={required}
          disableCloseOnSelect={disableCloseOnSelect}
          disabled={disabled}
          showFilter={showFilter}
        />
      )}
    />
  )
}

export default MultiAutoCompleteControl
