import { useState } from 'react'

const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName)

      if (value) {
        return JSON.parse(value)
      }
      const newValue = defaultValue ? JSON.stringify(defaultValue) : defaultValue
      window.localStorage.setItem(keyName, newValue)
      return defaultValue
    } catch (err) {
      console.log(err)
      return defaultValue
    }
  })

  const setValue = (newValue: any) => {
    try {
      const value = newValue ? JSON.stringify(newValue) : newValue
      window.localStorage.setItem(keyName, value)
    } catch (err) {
      console.log(err)
      //
    }
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
