import { type ReactNode, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Tooltip } from '@mui/material'
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { FormattedDate, ThemeToggleButton } from '@/components'
import { menuItems } from '@/layouts/updatedMenu'
import WorkSpaceBar from '@/layouts/workspace-bar'
import { convertDateToTimestamp } from '@/utils/dateFunctions'
import { useTranslation } from 'react-i18next'

const drawerWidth = 250

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop !== 'open' })<AppBarProps>(({ theme }) => ({
  width: '100%',
  left: 0,
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  top: 0,
  right: 0,
  '& .MuiToolbar-root': { minHeight: '52px', padding: theme.spacing(0, 2) }
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })<{ open: boolean }>(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: 'calc(100vh - 52px)',
    position: 'fixed',
    top: 52,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create(['width', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      height: '100%',
      position: 'absolute',
      overflow: 'hidden',
      borderRight: 'none',
      transition: theme.transitions.create(['width', 'transform'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard
      }),
      '& .MuiListItemText-root': {
        opacity: open ? 1 : 0,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(['opacity', 'transform'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard
        }),
        transform: open ? 'translateX(0)' : 'translateX(-10px)'
      },
      '& > div:last-child': { height: 'calc(100% - 52px)', overflowY: 'auto', overflowX: 'hidden' }
    }
  })
)

// Recursive component for nested menu items
const NestedMenuItem = ({ item, open }: { item: any; open: boolean }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const hasChildren = item.subItems && item.subItems.length > 0
  const isActive = location.pathname === item.path

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <ListItemButton
        component={item.path ? Link : 'div'}
        to={item.path}
        onClick={handleClick}
        sx={{
          // minHeight: '38px',
          transition: 'all 0.2s ease-in-out',
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          color: item.color,
          backgroundColor: isActive ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
          ...(isActive && {
            borderRight: '3px solid #1976d2',
            '& .MuiListItemIcon-root': { color: item.color ?? 'primary.main' },
            '& .MuiListItemText-primary': { color: item.color ?? 'primary.main', fontWeight: 500 }
          })
        }}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: 'inherit' }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.i18nKey ? t(item.i18nKey) : item.text}
          sx={{ opacity: open ? 1 : 0, '& .MuiTypography-root': { fontSize: '0.75rem', lineHeight: 1 } }}
        />
        {open && hasChildren && (isOpen ? <Icon icon='ri:arrow-up-s-line' /> : <Icon icon='ri:arrow-down-s-line' />)}
      </ListItemButton>
      {hasChildren && open && (
        <Collapse in={isOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding sx={{ pl: 2 }}>
            {item.subItems.map((subItem: any, index: number) => (
              <NestedMenuItem key={index} item={subItem} open={open} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme()
  const [open, setOpen] = useState(true)
  const handleToggle = () => setOpen(!open)

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', pt: '52px' }}>
      <AppBar
        position='fixed'
        open={open}
        // sx={{
        //   minHeight: 'unset',
        //   top: 0,
        //   color: 'text.primary',
        //   boxShadow: theme.palette.mode === 'light' ? 'unset' : '4px 3px 28px 0px rgba(var(--color-box-shadow))',
        //   backdropFilter: 'blur(8px)',
        //   background: theme.palette.mode === 'light' ? 'rgba(var(--nav-bg), 0.92)' : 'rgba(18, 24, 37)'
        // }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color='inherit' aria-label='open drawer' onClick={handleToggle} edge='start'>
              <MenuIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              MUI Components
            </Typography>
            <FormattedDate date={convertDateToTimestamp(new Date())} includeTime />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThemeToggleButton />
            <Tooltip title='Notifications'>
              <IconButton color='inherit'>
                <Icon icon='ri:notification-3-line' fontSize={20} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <WorkSpaceBar />
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          position: 'fixed',
          top: '52px',
          left: '58px',
          height: 'calc(100vh - 52px)',
          width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
            transform: open ? 'translateX(0)' : 'translateX(0)',
            transition: theme.transitions.create(['width', 'transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard
            })
          }
        }}
      >
        <List
          sx={{
            transition: theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard
            }),
            opacity: open ? 1 : 0.8
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: 'block',
                '&:hover': { '& .MuiListItemText-root': { transform: open ? 'translateX(4px)' : 'translateX(-6px)' } }
              }}
            >
              <NestedMenuItem item={item} open={open} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: 'calc(100vh - 52px)',
          overflow: 'auto',
          marginLeft: open ? `calc(58px + ${drawerWidth}px)` : `calc(58px + ${theme.spacing(7)} + 1px)`,
          transition: theme.transitions.create(['margin-left'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
        }}
      >
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}

export default MainLayout
