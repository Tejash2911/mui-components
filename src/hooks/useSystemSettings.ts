import { useEffect } from 'react'
import i18next from 'i18next'
import moment from 'moment'
import 'moment-timezone'
import { useAppDispatch, useAppSelector } from '@/redux/redux-hooks'
import { setDateFormat, setLanguage, setTimeFormat, setTimezone } from '@/redux/slices/systemSettingsSlice'

export const useSystemSettings = () => {
  const { dateFormat, timeFormat, timezone, language } = useAppSelector(({ systemSettings }) => systemSettings)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (timezone) {
      moment.tz.setDefault(timezone)
    }
  }, [timezone])

  const handleDateFormatChange = (name: string, value: string | null | undefined) => {
    dispatch(setDateFormat(value))
  }

  const handleTimeFormatChange = (name: string, value: string | null | undefined) => {
    dispatch(setTimeFormat(value))
  }

  const handleTimezoneChange = (name: string, value: any) => {
    dispatch(setTimezone(value))
    moment.tz.setDefault(value)
  }

  const handleLanguageChange = (name: string, value: any) => {
    dispatch(setLanguage(value))
    i18next.changeLanguage(value)
  }

  return {
    dateFormat,
    timeFormat,
    timezone,
    language,
    handleDateFormatChange,
    handleTimeFormatChange,
    handleTimezoneChange,
    handleLanguageChange
  }
}
