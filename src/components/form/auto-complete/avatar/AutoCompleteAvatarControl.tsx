import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import AutoCompleteAvatar from './AutoCompleteAvatar'
import type { AutoCompleteAvatarProps } from './type'

const AutoCompleteAvatarControl: FC<AutoCompleteAvatarProps> = ({
  name = '',
  label,
  placeholder,
  helperText,
  options = [],
  limitTags = -1,
  size = 'medium',
  sx = {},
  showName = true
}) => {
  const { control, setValue, watch } = useFormContext()
  const valueIds = watch(name) || []

  if (!name) return null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <AutoCompleteAvatar
            error={error}
            name={field.name}
            onChange={(_, ids) => {
              setValue(name, ids, {
                shouldValidate: true
              })
            }}
            options={options}
            selectedIds={valueIds}
            label={label}
            placeholder={placeholder}
            helperText={helperText}
            limitTags={limitTags}
            size={size}
            sx={sx}
            showName={showName}
          />
        </>
      )}
    />
  )
}

export default AutoCompleteAvatarControl
