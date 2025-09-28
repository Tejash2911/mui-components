import type { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import MainLayout from '@/layouts'
import { ROUTES, TOKEN } from '@/utils/constant'

interface ProtectedRouteProps {
  element: ReactElement
  visible?: boolean
}
const ProtectedRoute = ({ element, visible }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem(TOKEN)

  if (!isAuthenticated || !visible) {
    return <Navigate to={ROUTES.SIGN_IN} replace />
  }

  return <MainLayout>{element}</MainLayout>
}

export default ProtectedRoute
