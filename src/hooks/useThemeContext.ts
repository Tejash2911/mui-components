import { useContext } from 'react'
import { ThemeContext } from '@/contexts/themeContext/ThemeContext'
import type { ThemeContextType } from '@/contexts/themeContext/theme.types'

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }
  return context
}
