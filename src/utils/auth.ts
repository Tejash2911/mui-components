import { APP_AUTH_ACCESS_KEY, APP_AUTH_REFRESH_KEY, APP_AUTH_USER } from '@/utils/constant'

export const getAuthUser = () => {
  try {
    const data = localStorage.getItem(APP_AUTH_USER)
    if (data) {
      return JSON.parse(data)
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getAuthAccess = () => {
  try {
    return localStorage.getItem(APP_AUTH_ACCESS_KEY)
  } catch (error) {
    console.log(error)
    return null
  }
}
export const getAuthRefresh = () => {
  try {
    return localStorage.getItem(APP_AUTH_REFRESH_KEY)
  } catch (error) {
    console.log(error)
    return null
  }
}

export const appLogout = async () => {
  setTimeout(() => {
    localStorage.removeItem(APP_AUTH_ACCESS_KEY)
    localStorage.removeItem(APP_AUTH_REFRESH_KEY)
    localStorage.removeItem(APP_AUTH_USER)
  }, 10)
}
