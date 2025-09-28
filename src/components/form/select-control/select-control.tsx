import type { FC } from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface OptionsI {
  value: string
  label: string
  [key: string]: string
}

interface SelectPropsI {
  name: string
  label?: string
  helperText?: string
  required?: boolean
  valueKey?: string
  labelKey?: string
  options: OptionsI[]
  disabled?: boolean
}

const SelectControl: FC<SelectPropsI> = ({
  name,
  label,
  helperText,
  options,
  required = false,
  valueKey = 'value',
  labelKey = 'label',
  disabled
}) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error} required={required}>
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...field} onChange={disabled ? undefined : field.onChange} size='medium'>
            {Array.isArray(options) &&
              options.map(i => {
                return (
                  <MenuItem key={i[valueKey]} value={i[valueKey]}>
                    {i[labelKey]}
                  </MenuItem>
                )
              })}
          </Select>
          <FormHelperText error={!!error}>{error?.message ? error?.message : helperText}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export default SelectControl
