import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import SingleAutoComplete from './SingleAutoComplete'
import type { SimpleAutoCompleteProps } from './type'

const SingleAutoCompleteControl: FC<SimpleAutoCompleteProps> = ({ name, onChange, ...restProps }) => {
  const { control } = useFormContext()

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <SingleAutoComplete
          value={field.value}
          onChange={(_, nValue) => {
            if (onChange) {
              onChange(name, nValue)
            } else {
              field.onChange(nValue)
            }
          }}
          name={name}
          error={error}
          {...restProps}
        />
      )}
    />
  )
}

export default SingleAutoCompleteControl
