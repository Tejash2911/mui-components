import type { Theme } from '@mui/material/styles'

export type ThemeMode = 'light' | 'dark'

export interface ThemeContextType {
  mode: ThemeMode
  toggleColorMode: () => void
}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface ThemeWithStatus extends Theme {
  status: {
    danger: string
  }
}
