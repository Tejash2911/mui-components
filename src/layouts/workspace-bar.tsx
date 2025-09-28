import { useState } from 'react'
import { ExitToApp, GridOn, Settings } from '@mui/icons-material'
import { Avatar, Box, IconButton, Tooltip, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { ROUTES, TOKEN } from '@/utils/constant'

const WorkSpaceBar: React.FC = () => {
  const theme = useTheme()
  const [activeWorkspace, setActiveWorkspace] = useState<number>(0)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(TOKEN)
    navigate(ROUTES.SIGN_IN)
  }

  const handleSettings = () => {
    navigate(ROUTES.SETTINGS)
  }

  const organizationIcons = [
    { icon: <GridOn />, tooltip: 'Workspace 1' },
    { icon: <GridOn />, tooltip: 'Workspace 2' },
    { icon: <GridOn />, tooltip: 'Workspace 3' },
    { icon: <GridOn />, tooltip: 'Workspace 4' }
  ]

  const bottomIcons = [
    { icon: <Settings sx={{ width: 22, height: 22 }} onClick={handleSettings} />, tooltip: 'Settings' },
    { icon: <Avatar sx={{ width: 22, height: 22, fontSize: '0.75rem' }}>C</Avatar>, tooltip: 'Profile' },
    { icon: <ExitToApp onClick={handleLogout} />, tooltip: 'Logout' }
  ]

  return (
    <Box
      sx={{
        width: 58,
        backgroundColor: theme.palette.background.paper,
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        py: 1,
        gap: 1,
        position: 'fixed',
        left: 0,
        zIndex: theme.zIndex.drawer,
        boxShadow: 'none',
        top: 52,
        height: 'calc(100vh - 52px)',
        overflowY: 'auto'
        // background: 'rgb(var(--nav-bg))'
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'flex-start',
          width: '100%'
        }}
      >
        {organizationIcons.map((item, index) => {
          const isActive = index === activeWorkspace
          return (
            <Tooltip key={index} title={item.tooltip} placement='right'>
              <IconButton
                size='small'
                onClick={() => setActiveWorkspace(index)}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                  backgroundColor: isActive ? alpha(theme.palette.primary.main, 0.12) : 'transparent',
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& .MuiSvgIcon-root': { fontSize: 20 },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    color: theme.palette.primary.main
                  }
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          )
        })}
      </Box>

      {/* Bottom Icons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'flex-start',
          width: '100%'
        }}
      >
        {bottomIcons.map((item, index) => (
          <Tooltip key={index} title={item.tooltip} placement='right'>
            <IconButton
              size='small'
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                color: theme.palette.text.secondary,
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiSvgIcon-root': { fontSize: 20 },
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  color: theme.palette.primary.main
                }
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}

export default WorkSpaceBar
