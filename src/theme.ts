import { type ThemeOptions, createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: { danger: string }
  }
  interface ThemeOptions {
    status?: { danger?: string }
  }
}

const baseTypography = {
  htmlFontSize: 14,
  fontSize: 12,
  fontFamily: `'Public Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01562em' },
  h2: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.00833em' },
  h3: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.3 },
  h4: { fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.4 },
  h5: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4 },
  h6: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.4 },

  subtitle1: { fontSize: '0.9375rem', fontWeight: 400, lineHeight: 1.5 },
  subtitle2: { fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.5 },

  body1: { fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.5 },

  button: { fontSize: '0.8125rem', fontWeight: 500, textTransform: 'none', lineHeight: 1.75, letterSpacing: '0.03em' },

  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.4, color: 'rgba(0, 0, 0, 0.6)' },
  overline: { fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08333em', textTransform: 'uppercase' },

  // Inherit variant for flexibility
  inherit: { font: 'inherit' }
} as const

const baseTheme: ThemeOptions = {
  typography: baseTypography,
  shape: { borderRadius: 4 },
  zIndex: { appBar: 1200, drawer: 1100, tooltip: 1300 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 0.25rem 0.875rem 0 rgba(38, 43, 67, 0.16)',
          borderColor: 'color-mix(in sRGB, #262b43 12%, #fff)',
          borderRadius: '0.625rem'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          boxShadow: '0 0.25rem 0.875rem 0 rgba(38, 43, 67, 0.16)',
          borderColor: 'color-mix(in sRGB, #262b43 12%, #fff)',
          borderRadius: '0.625rem'
        }
      }
    }
  }
}

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    divider: 'rgba(0, 0, 0, 0.12)'
    // text: { primary: 'rgb(28,27,31)', secondary: 'rgb(37,37,37)' }
  }
})

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
    divider: 'rgba(255, 255, 255, 0.12)'
  }
})
