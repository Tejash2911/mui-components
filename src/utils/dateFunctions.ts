import moment from 'moment'
import 'moment-timezone'

// Converts date string to Unix timestamp (seconds)
export const convertDateToTimestamp = (dateString: any) => {
  return moment(dateString).unix()
}

// Converts Unix timestamp (seconds) to formatted date string
export const convertTimestampToDate = (timestamp: any, format: string = 'DD MMMM YYYY') => {
  if (!timestamp) {
    return
  }
  return moment.unix(timestamp).format(format)
}

// Converts date string to system timestamp (seconds)
export const convertToSystemTimeZone = (dateString: string) => {
  return Math.floor(new Date(dateString).getTime() / 1000)
}

// Converts Unix timestamp (seconds) to Date object
export const setTimestampToDate = (timestamp: string | number | any) => {
  if (!timestamp) {
    return null
  }
  return new Date(Number(timestamp) * 1000)
}

// Returns relative time from now (e.g., "3 hours ago")
export const getRelativeTime = (timestamp: string | number | any) => {
  if (!timestamp) {
    return 'Unknown time'
  }

  const parsedDate = moment.unix(Number(timestamp)).utc()
  if (!parsedDate.isValid()) {
    return 'Invalid date'
  }

  return parsedDate.local().fromNow()
}

// Returns the minimum end date (1 day after given date)
export const getMinEndDate = (date: string | Date): Date => {
  return moment(date).add(1, 'day').toDate()
}

// Format date with timezone support
export const formatDateWithTimezone = (
  date: string | number | Date,
  format: string,
  timezone: string,
  includeTime: boolean = false
): string => {
  if (!date) return ''

  let momentDate: moment.Moment

  if (typeof date === 'number') {
    // Unix timestamp
    momentDate = moment.unix(date)
  } else if (typeof date === 'string') {
    momentDate = moment(date)
  } else {
    momentDate = moment(date)
  }

  if (!momentDate.isValid()) return ''

  // Convert to specified timezone
  const timezoneDate = moment.tz(momentDate, timezone)

  if (includeTime) {
    // Add time to the format
    const timeFormat = 'HH:mm'
    return timezoneDate.format(`${format} ${timeFormat}`)
  }

  return timezoneDate.format(format)
}

// Get current time in specified timezone
export const getCurrentTimeInTimezone = (timezone: string, format: string = 'HH:mm'): string => {
  return moment.tz(moment(), timezone).format(format)
}

// Get current date in specified timezone
export const getCurrentDateInTimezone = (timezone: string, format: string = 'DD/MM/YYYY'): string => {
  return moment.tz(moment(), timezone).format(format)
}
