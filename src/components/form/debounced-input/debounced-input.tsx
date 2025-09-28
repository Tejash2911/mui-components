import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { TextFieldProps } from '@mui/material'
import { TextField } from '@mui/material'

type DebouncedInputProps = TextFieldProps & {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
}

const DebouncedInput: FC<DebouncedInputProps> = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

export default DebouncedInput
