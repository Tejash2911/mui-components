import { useState } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { CommonTooltip } from '@/components'
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
    { icon: <Icon icon='ri:function-line' />, tooltip: 'Workspace 1' },
    { icon: <Icon icon='ri:function-line' />, tooltip: 'Workspace 2' },
    { icon: <Icon icon='ri:function-line' />, tooltip: 'Workspace 3' },
    { icon: <Icon icon='ri:function-line' />, tooltip: 'Workspace 4' }
  ]

  const bottomIcons = [
    { icon: <Icon icon='ri:settings-3-line' fontSize={18} onClick={handleSettings} />, tooltip: 'Settings' },
    { icon: <Icon icon='ri:account-circle-line' fontSize={18} />, tooltip: 'Profile' },
    { icon: <Icon icon='ri:shut-down-line' fontSize={16} onClick={handleLogout} />, tooltip: 'Logout' }
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
            <CommonTooltip key={index} title={item.tooltip} placement='right'>
              <IconButton
                size='small'
                onClick={() => setActiveWorkspace(index)}
                sx={{
                  width: 32,
                  height: 32,
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
            </CommonTooltip>
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
          <CommonTooltip key={index} title={item.tooltip} placement='right'>
            <IconButton
              size='small'
              sx={{
                width: 32,
                height: 32,
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
          </CommonTooltip>
        ))}
      </Box>
    </Box>
  )
}

export default WorkSpaceBar
