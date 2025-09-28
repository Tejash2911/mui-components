import { TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export default function TextareaControl({ name, rows = 4, ...props }: TextFieldProps) {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          multiline
          rows={rows}
          fullWidth
          variant='outlined'
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString() || props.helperText}
          sx={props.sx}
        />
      )}
    />
  )
}
