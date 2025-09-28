import { FormControl, FormHelperText, Typography } from '@mui/material'
import type { FieldValues, Path } from 'react-hook-form'
import { Controller, useFormContext } from 'react-hook-form'
import Editor, { type EditorProps } from './Editor'

interface EditorControlProps<T extends FieldValues> extends Omit<EditorProps, 'value' | 'onChange'> {
  name: Path<T>
  label?: string
  helperText?: string
  required?: boolean
}

const EditorControl = <T extends FieldValues>({
  name,
  label,
  helperText,
  required = false,
  ...props
}: EditorControlProps<T>) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          {label && (
            <Typography variant='body2' gutterBottom>
              {label}
              {required && <span style={{ color: '#d32f2f', marginLeft: '4px' }}>*</span>}
            </Typography>
          )}
          <Editor value={field.value || ''} onChange={field.onChange} error={!!error} {...props} />
          {(error?.message || helperText) && <FormHelperText>{error?.message || helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default EditorControl
