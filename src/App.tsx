import { ThemeContextProvider } from '@/contexts/themeContext/Provider'
import ReduxProvider from '@/redux/ReduxProvider'
import AppRoutes from '@/routes'

function App() {
  return (
    <ReduxProvider>
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
    </ReduxProvider>
  )
}

export default App
