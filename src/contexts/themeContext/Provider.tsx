import { useEffect, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '@/theme'
import { ThemeContext } from './ThemeContext'
import type { ThemeMode, ThemeProviderProps } from './theme.types'

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null
    if (savedTheme) {
      setMode(savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
    }
  }, [])

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newMode)
          return newMode
        })
      }
    }),
    [mode]
  )

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
