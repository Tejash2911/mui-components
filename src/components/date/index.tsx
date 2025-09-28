import type { FC } from 'react'
import moment from 'moment'
import 'moment-timezone'
import { useSystemSettings } from '@/hooks/useSystemSettings'

interface FormattedDateProps {
  date: string | number | Date | undefined
  includeTime?: boolean
  fallback?: string
}

const FormattedDate: FC<FormattedDateProps> = ({ date, includeTime = false, fallback = '--' }) => {
  const { dateFormat, timeFormat, timezone } = useSystemSettings()

  if (!date) {
    return <div>{fallback}</div>
  }

  try {
    const momentDate = moment.unix(Number(date))

    if (!momentDate.isValid()) {
      return <div>{fallback}</div>
    }

    // Convert to specified timezone
    const timezoneDate = moment.tz(momentDate, timezone)

    let format = dateFormat

    if (includeTime) {
      // Add time to the format
      const timeFormatStr = timeFormat === '12' ? 'hh:mm A' : 'HH:mm'
      format = `${dateFormat} ${timeFormatStr}`
    }

    const formattedDate = timezoneDate.format(format)

    return <div>{formattedDate}</div>
  } catch (error) {
    console.error('Error formatting date:', error)
    return <div>{fallback}</div>
  }
}

export default FormattedDate
