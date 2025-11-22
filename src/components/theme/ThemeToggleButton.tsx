import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import { CommonTooltip } from '@/components'
import { useThemeContext } from '@/hooks/useThemeContext'

const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useThemeContext()

  return (
    <CommonTooltip title={`${mode !== 'light' ? 'Light Mode' : 'Dark Mode'}`}>
      <IconButton onClick={toggleColorMode} sx={{ color: 'inherit' }}>
        {mode !== 'light' ? <Icon icon='ri:sun-line' fontSize={20} /> : <Icon icon='ri:moon-line' fontSize={20} />}
      </IconButton>
    </CommonTooltip>
  )
}

export default ThemeToggleButton
