import type { FC } from 'react'
import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import type { InputPropsI } from './type'

const InputControl: FC<InputPropsI> = ({
  name,
  type = 'text',
  required = false,
  helperText = '',
  size = 'medium',
  label = '',
  upperCase = false,
  ...restInputProps
}) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          onChange={evt => {
            if (restInputProps.disabled) return
            if (!evt.isTrusted) return
            let value = evt.target.value

            if (upperCase) {
              value = value.toUpperCase()
            }

            field.onChange(value)
          }}
          type={type}
          fullWidth
          error={!!error}
          required={required}
          helperText={error?.message ? error?.message : helperText}
          size={size}
          label={label}
          {...restInputProps}
        />
      )}
    />
  )
}

export default InputControl
