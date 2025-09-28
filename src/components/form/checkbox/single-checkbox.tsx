import type { FC } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import type { CheckboxPropsI } from './type'

const SingleCheckBoxControl: FC<CheckboxPropsI> = ({
  name,
  label = '',
  helperText = '',
  required = false,
  sx,
  onChange,
  checked,
  disabled = false
}) => {
  const { control, setValue, trigger } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl required={required} error={!!error} fullWidth sx={sx}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                disabled={disabled}
                checked={checked ?? field.value ?? false}
                onChange={(_, newCheck) => {
                  if (disabled) return

                  if (onChange) {
                    onChange(name, newCheck)
                  } else {
                    setValue(name, newCheck)
                    trigger(name)
                  }
                }}
                name={name}
              />
            }
          />
          {(error?.message || helperText) && (
            <FormHelperText>{error?.message ? error?.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default SingleCheckBoxControl
