import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

function usePathname() {
  const { pathname } = useLocation()

  return useMemo(() => pathname, [pathname])
}

export default usePathname
