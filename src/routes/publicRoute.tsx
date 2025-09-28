import type { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES, TOKEN } from '@/utils/constant'

interface PublicRouteProps {
  element: ReactElement
}

const PublicRoute = ({ element }: PublicRouteProps) => {
  const isAuthenticated = !!localStorage.getItem(TOKEN)

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }
  return element
}

export default PublicRoute
