import type { FC } from 'react'
import type { TextFieldProps } from '@mui/material'
import { Rating } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type RatingPropsI = TextFieldProps & {
  name: string
  label?: string
}

const RatingControl: FC<RatingPropsI> = ({ name, disabled }) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Rating
          {...field}
          name='rating'
          value={field.value}
          onChange={(_, newValue) => {
            field.onChange(newValue)
          }}
          disabled={disabled}
        />
      )}
    />
  )
}

export default RatingControl
