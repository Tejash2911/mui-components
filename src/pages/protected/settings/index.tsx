import { Alert, Box, Grid, Typography } from '@mui/material'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { CommonCard, PageHeader, SingleAutoComplete } from '@/components'
import { useSystemSettings } from '@/hooks/useSystemSettings'
import {
  DATE_FORMAT_OPTIONS,
  LANGUAGE_OPTIONS,
  TIMEZONE_OPTIONS,
  TIME_FORMAT_OPTIONS
} from '@/redux/slices/systemSettingsSlice'
import { ROUTES } from '@/utils/constant'

const SettingsPage = () => {
  const { t } = useTranslation()
  const {
    dateFormat,
    timeFormat,
    timezone,
    language,
    handleDateFormatChange,
    handleTimeFormatChange,
    handleTimezoneChange,
    handleLanguageChange
  } = useSystemSettings()

  // Get current date and time for preview with timezone
  const currentDate = moment()
  const timezoneDate = moment.tz(currentDate, timezone)
  const previewDate = timezoneDate.format(dateFormat)
  const previewTime = timeFormat === '12' ? timezoneDate.format('hh:mm A') : timezoneDate.format('HH:mm')

  return (
    <Box>
      <PageHeader
        title={t('systemConfigurations.title')}
        breadcrumbs={[{ label: 'Dashboard', href: ROUTES.DASHBOARD }, { label: 'Settings' }]}
      />
      <Box sx={{ mb: 3 }}>
        <Alert severity='info' sx={{ p: 2 }}>
          <Typography variant='body2'>
            <strong>{t('systemConfigurations.note')}</strong> {t('systemConfigurations.settingsNote')}
          </Typography>
        </Alert>
      </Box>
      <Grid container spacing={3}>
        {/* Date Format */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CommonCard>
            <Typography variant='h6' gutterBottom>
              {t('systemConfigurations.dateFormat')}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {t('systemConfigurations.dateFormatDescription')}
            </Typography>

            <SingleAutoComplete
              name='date_format'
              //   label={t('systemConfigurations.dateFormat')}
              options={DATE_FORMAT_OPTIONS}
              value={dateFormat}
              onChange={handleDateFormatChange}
              disableClearable
            />
          </CommonCard>
        </Grid>

        {/* Time Format */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CommonCard>
            <Typography variant='h6' gutterBottom>
              {t('systemConfigurations.timeFormat')}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {t('systemConfigurations.timeFormatDescription')}
            </Typography>

            <SingleAutoComplete
              name='time_format'
              //   label={t('systemConfigurations.timeFormat')}
              options={TIME_FORMAT_OPTIONS}
              value={timeFormat}
              onChange={handleTimeFormatChange}
              disableClearable
            />
          </CommonCard>
        </Grid>

        {/* Timezone */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CommonCard>
            <Typography variant='h6' gutterBottom>
              {t('systemConfigurations.timezone')}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {t('systemConfigurations.timezoneDescription')}
            </Typography>

            <SingleAutoComplete
              name='timezone'
              //   label={t('systemConfigurations.timezone')}
              options={TIMEZONE_OPTIONS}
              value={timezone}
              onChange={handleTimezoneChange}
              disableClearable
            />
          </CommonCard>
        </Grid>

        {/* Language */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CommonCard>
            <Typography variant='h6' gutterBottom>
              {t('systemConfigurations.language')}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {t('systemConfigurations.languageDescription')}
            </Typography>

            <SingleAutoComplete
              name='language'
              //   label={t('systemConfigurations.language')}
              options={LANGUAGE_OPTIONS}
              value={language}
              onChange={handleLanguageChange}
              disableClearable
            />
          </CommonCard>
        </Grid>

        {/* Preview */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CommonCard>
            <Typography variant='h6' gutterBottom>
              {t('systemConfigurations.preview')}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {t('systemConfigurations.previewDescription')}
            </Typography>

            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
              <Typography variant='body1' gutterBottom>
                <strong>{t('systemConfigurations.currentDate')}:</strong> {previewDate}
              </Typography>
              <Typography variant='body1' gutterBottom>
                <strong>{t('systemConfigurations.currentTime')}:</strong> {previewTime}
              </Typography>
              <Typography variant='body1' gutterBottom>
                <strong>{t('systemConfigurations.timezone')}:</strong> {timezone}
              </Typography>
              <Typography variant='body1'>
                <strong>{t('systemConfigurations.language')}:</strong>{' '}
                {LANGUAGE_OPTIONS.find(lang => lang.value === language)?.label || language}
              </Typography>
            </Box>
          </CommonCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsPage
