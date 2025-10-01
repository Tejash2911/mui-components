import type { FC, ReactNode } from 'react'
import {
  ShoppingCart as CartIcon,
  Email as EmailIcon,
  Event as EventIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import { CommonCard } from '@/components'

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  color: string
}

const StatCard: FC<StatCardProps> = ({ title, value, icon, color }) => (
  <CommonCard>
    <Stack direction='row' alignItems='center' spacing={2}>
      <Avatar sx={{ bgcolor: `${color}20`, color: color }}>{icon}</Avatar>
      <Box>
        <Typography variant='h6' color='textSecondary'>
          {title}
        </Typography>
        <Typography variant='h5'>{value}</Typography>
      </Box>
    </Stack>
  </CommonCard>
)

interface ActivityItemProps {
  icon: ReactNode
  primary: string
  secondary: string
  time: string
}

const ActivityItem: FC<ActivityItemProps> = ({ icon, primary, secondary, time }) => {
  const theme = useTheme()
  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Avatar sx={{ bgcolor: theme.palette.primary.light, width: 32, height: 32 }}>{icon}</Avatar>
      </ListItemIcon>
      <ListItemText
        primary={primary}
        secondary={secondary}
        slotProps={{ primary: { variant: 'subtitle2' }, secondary: { variant: 'caption' } }}
      />
      <Typography variant='caption' color='textSecondary'>
        {time}
      </Typography>
    </ListItem>
  )
}

const Dashboard: FC = () => {
  const theme = useTheme()

  const stats = [
    { title: 'Total Revenue', value: '$24,780', icon: <MoneyIcon />, color: theme.palette.success.main },
    { title: 'New Users', value: '1,245', icon: <PeopleIcon />, color: theme.palette.info.main },
    { title: 'Sales', value: '1,234', icon: <CartIcon />, color: theme.palette.warning.main },
    { title: 'Pending Orders', value: '24', icon: <TrendingUpIcon />, color: theme.palette.error.main }
  ]

  const activities = [
    { icon: <PersonIcon />, primary: 'New user registered', secondary: '5 seconds ago', time: 'Just now' },
    { icon: <EmailIcon />, primary: 'New message received', secondary: 'From John Doe', time: '5 min ago' },
    { icon: <EventIcon />, primary: 'Server rebooted', secondary: 'System maintenance', time: '2 hours ago' },
    { icon: <CartIcon />, primary: 'New order placed', secondary: 'Order #1234', time: '3 hours ago' },
    { icon: <TrendingUpIcon />, primary: 'Sales target achieved', secondary: 'Monthly goal', time: '1 day ago' }
  ]

  const quickActions = [
    { icon: <EmailIcon />, label: 'Send Email', color: 'primary' },
    { icon: <PersonIcon />, label: 'Add User', color: 'success' },
    { icon: <CartIcon />, label: 'New Order', color: 'warning' },
    { icon: <EventIcon />, label: 'Schedule', color: 'info' }
  ]

  const systemStatus = [
    { label: 'Server Load', value: 65, color: 'primary' },
    { label: 'Database', value: 34, color: 'success' },
    { label: 'Storage', value: 78, color: 'warning' },
    { label: 'Bandwidth', value: 45, color: 'info' }
  ]

  return (
    <Box>
      <Grid container spacing={3} mb={3}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mb: 3 }}>
        {/* Main Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Revenue Card */}
          <CommonCard title='Revenue Overview'>
            <Box sx={{ height: 236, backgroundColor: theme.palette.grey[100], borderRadius: 1 }}>
              <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
                <Typography color='textSecondary'>Revenue chart will be displayed here</Typography>
              </Box>
            </Box>
          </CommonCard>
          {/* System Status */}
          <CommonCard title='System Status'>
            <Stack spacing={2}>
              {systemStatus.map((item, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant='body2'>{item.label}</Typography>
                    <Typography variant='body2'>{item.value}%</Typography>
                  </Box>
                  <Box sx={{ height: 8, bgcolor: 'divider', borderRadius: 4, overflow: 'hidden' }}>
                    <Box
                      sx={{ width: `${item.value}%`, height: '100%', bgcolor: `${item.color}.main`, borderRadius: 4 }}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </CommonCard>
        </Box>

        {/* Sidebar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Quick Actions */}
          <CommonCard title='Quick Actions'>
            <Grid container spacing={1}>
              {quickActions.map((action, index) => (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      borderRadius: 1,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${action.color}.light`,
                        color: `${action.color}.dark`,
                        width: 36,
                        height: 36,
                        mx: 'auto',
                        mb: 1
                      }}
                    >
                      {action.icon}
                    </Avatar>
                    <Typography variant='body2'>{action.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CommonCard>

          {/* Recent Activities */}
          <CommonCard title='Recent Activities'>
            <List disablePadding>
              {activities.map((activity, index) => (
                <Box key={index}>
                  <ActivityItem {...activity} />
                  {index < activities.length - 1 && <Divider variant='inset' component='li' />}
                </Box>
              ))}
            </List>
          </CommonCard>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
