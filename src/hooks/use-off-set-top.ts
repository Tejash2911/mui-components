import type React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useScroll } from 'framer-motion'

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: React.RefObject<HTMLElement>
  target?: React.RefObject<HTMLElement>
}

export function useOffSetTop(top = 0, options?: UseScrollOptions): boolean {
  const { scrollY } = useScroll(options)

  const [value, setValue] = useState(false)

  const onOffSetTop = useCallback(() => {
    scrollY.on('change', (scrollHeight: any) => {
      if (scrollHeight > top) {
        setValue(true)
      } else {
        setValue(false)
      }
    })
  }, [scrollY, top])

  useEffect(() => {
    onOffSetTop()
  }, [onOffSetTop])

  const memoizedValue = useMemo(() => value, [value])

  return memoizedValue
}

export default useOffSetTop

// Usage
// const offset = useOffSetTop(100);

// Or
// const offset = useOffSetTop(100, {
//   container: ref,
// });
