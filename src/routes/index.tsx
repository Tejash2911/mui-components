import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/utils/constant'
import ProtectedRoute from './protectedRoute'
import PublicRoute from './publicRoute'
import { protectedRoutes, publicRoutes } from './routesConfig'

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PublicRoute element={element} />} />
      ))}
      {protectedRoutes.map(({ path, element, visible }) => (
        <Route key={path} path={path} element={<ProtectedRoute element={element} visible={visible} />} />
      ))}
      <Route path='*' element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  )
}

export default AppRoutes
