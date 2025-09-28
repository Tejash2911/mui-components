import { Avatar, Chip, Stack, Tooltip, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import type { AutoCompleteAvatarProps } from './type'

interface PropsI extends AutoCompleteAvatarProps {
  selectedIds: string[]
  onChange?: (name: string, ids: string[]) => void
  error?: any
}

export default function AutoCompleteAvatar({
  name = '',
  label,
  placeholder,
  helperText,
  size = 'medium',
  options = [],
  selectedIds = [],
  sx = {},
  onChange = () => {},
  error,
  limitTags = -1,
  showName = true
}: PropsI) {
  const getSelectedValues = () => {
    if (Array.isArray(options) && Array.isArray(selectedIds)) {
      return options.filter(item => selectedIds.includes(item.value))
    }

    return []
  }

  if (!name) return null

  return (
    <Autocomplete
      options={options}
      limitTags={limitTags}
      size={size}
      sx={sx}
      multiple
      onChange={(_, newValue) => {
        const nValues = Array.isArray(newValue) ? newValue : []

        onChange(
          name,
          nValues.map(item => item.value)
        )
      }}
      value={getSelectedValues()}
      renderOption={(props, option) => (
        <li {...props} key={option?.value}>
          <Stack direction='row' columnGap={1} alignItems='center'>
            <Avatar alt={option.label} src={option.url} />
            <Typography>{option.label}</Typography>
          </Stack>
        </li>
      )}
      renderTags={(value, getTagProps) => {
        const selectedTags = value.length
        const newTagLimit = limitTags === -1 ? options.length : limitTags

        return (
          <>
            {value.slice(0, newTagLimit).map((item, index) => {
              return (
                <Chip
                  label={showName ? item.label : ''}
                  {...getTagProps({ index })}
                  avatar={
                    <Tooltip title={item.label}>
                      <Avatar alt={item.label} src={item.url} />
                    </Tooltip>
                  }
                />
              )
            })}
            {limitTags !== -1 && selectedTags > limitTags && `  +${selectedTags - limitTags}`}
          </>
        )
      }}
      renderInput={params => (
        <TextField
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...params}
        />
      )}
    />
  )
}
