import { matchPath, useLocation } from 'react-router-dom'

const useActiveLink = (path: string, deep = true): boolean => {
  const { pathname } = useLocation()

  const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false

  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false

  return deep ? deepActive : normalActive
}

export default useActiveLink
