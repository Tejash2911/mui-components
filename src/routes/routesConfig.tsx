import { TreeView } from '@/components'
import Dashboard from '@/pages/protected/dashboard'
import FormComponents from '@/pages/protected/form-components'
import SettingsPage from '@/pages/protected/settings'
import DemoTable from '@/pages/protected/table-demo/demo'
import SignIn from '@/pages/public/sign-in'
import { ROUTES } from '@/utils/constant'

export const publicRoutes = [
  { path: ROUTES.SIGN_IN, element: <SignIn /> },
  { path: ROUTES.SIGN_UP, element: <>Sign-up</> }
]

export const protectedRoutes = [
  { path: ROUTES.DASHBOARD, element: <Dashboard />, visible: true },
  { path: ROUTES.COMPONENTS.FORM, element: <FormComponents />, visible: true },
  { path: ROUTES.COMPONENTS.TABLE, element: <DemoTable />, visible: true },
  { path: ROUTES.COMPONENTS.OTHER, element: <TreeView />, visible: true },
  { path: ROUTES.SETTINGS, element: <SettingsPage />, visible: true }
]
