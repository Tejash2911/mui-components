import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CreatableAutoComplete from './CreateAbleAutoComplete'
import type { CreateAbleAutoCompleteProps } from './type'

const CreateAbleAutoCompleteControl: FC<CreateAbleAutoCompleteProps> = ({
  name,
  options = [],
  disableClearable,
  helperText,
  label,
  placeholder,
  size = 'medium',
  sx = {},
  variant = 'outlined'
}) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CreatableAutoComplete
          name={name}
          options={options}
          value={field.value}
          onChange={(_, nValue) => field.onChange(nValue)}
          error={error}
          disableClearable={disableClearable}
          helperText={helperText}
          label={label}
          placeholder={placeholder}
          size={size}
          sx={sx}
          variant={variant}
        />
      )}
    />
  )
}

export default CreateAbleAutoCompleteControl
