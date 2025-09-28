import { IconButton, Tooltip } from '@mui/material'
import { Icon } from '@iconify/react'
import { useThemeContext } from '@/hooks/useThemeContext'

const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useThemeContext()

  return (
    <Tooltip title={`${mode !== 'light' ? 'Light Mode' : 'Dark Mode'}`}>
      <IconButton onClick={toggleColorMode} sx={{ color: 'inherit' }}>
        {mode !== 'light' ? <Icon icon='ri:sun-line' fontSize={20} /> : <Icon icon='ri:moon-line' fontSize={20} />}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggleButton
