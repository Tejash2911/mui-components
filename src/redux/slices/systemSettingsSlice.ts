import { createAppSlice } from '@/redux/createAppSlice'

export interface DateFormatOption {
  value: string
  label: string
  example: string
}

export interface SystemSettings {
  dateFormat: string
  timeFormat: string
  timezone: string
  language: string
}

const initialState: SystemSettings = {
  dateFormat: 'DD/MM/YYYY',
  timeFormat: '24',
  timezone: 'Asia/Kolkata',
  language: 'en'
}

// Available date format options
export const DATE_FORMAT_OPTIONS: DateFormatOption[] = [
  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY', example: '25/12/2024' },
  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY', example: '12/25/2024' },
  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD', example: '2024-12-25' },
  { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY', example: '25-12-2024' },
  { value: 'MM-DD-YYYY', label: 'MM-DD-YYYY', example: '12-25-2024' },
  { value: 'DD MMM YYYY', label: 'DD MMM YYYY', example: '25 Dec 2024' },
  { value: 'DD MMMM YYYY', label: 'DD MMMM YYYY', example: '25 December 2024' },
  { value: 'Do MMM YYYY', label: 'Do MMM YYYY', example: '25th Dec 2024' },
  { value: 'Do MMMM YYYY', label: 'Do MMMM YYYY', example: '25th December 2024' }
]

// Available time format options
export const TIME_FORMAT_OPTIONS = [
  { value: '12', label: '12-hour (AM/PM)' },
  { value: '24', label: '24-hour' }
]

// Available timezone options
export const TIMEZONE_OPTIONS = [
  { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
  { value: 'Asia/Kolkata', label: 'IST (Indian Standard Time)' },
  { value: 'America/New_York', label: 'EST (Eastern Standard Time)' },
  { value: 'America/Los_Angeles', label: 'PST (Pacific Standard Time)' },
  { value: 'Europe/London', label: 'GMT (Greenwich Mean Time)' },
  { value: 'Asia/Dubai', label: 'GST (Gulf Standard Time)' },
  { value: 'Asia/Shanghai', label: 'CST (China Standard Time)' },
  { value: 'Asia/Tokyo', label: 'JST (Japan Standard Time)' }
]

// Available language options
export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'gu', label: 'ગુજરાતી' }
]

const systemSettingsSlice = createAppSlice({
  name: 'systemSettings',
  initialState,
  reducers: {
    setDateFormat: (state, action) => {
      state.dateFormat = action.payload
    },
    setTimeFormat: (state, action) => {
      state.timeFormat = action.payload
    },
    setTimezone: (state, action) => {
      state.timezone = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    updateSystemSettings: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetSystemSettings: () => {
      return initialState
    }
  }
})

export const { setDateFormat, setTimeFormat, setTimezone, setLanguage, updateSystemSettings, resetSystemSettings } =
  systemSettingsSlice.actions

export default systemSettingsSlice.reducer
