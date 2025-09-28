import type { FC, ReactNode } from 'react'
import { Box, Breadcrumbs, Link as MUILink, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export type Crumb = {
  label: ReactNode
  href?: string
}

interface PageHeaderProps {
  title: ReactNode
  breadcrumbs?: Crumb[]
  sx?: any
}

const PageHeader: FC<PageHeaderProps> = ({ title, breadcrumbs = [], sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        mb: 3,
        ...sx
      }}
    >
      <Typography variant='h6' component='h1'>
        {title}
      </Typography>

      {breadcrumbs.length > 0 && (
        <Breadcrumbs aria-label='breadcrumb' sx={{ '& .MuiBreadcrumbs-separator': { mx: 1 } }}>
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1
            if (!isLast && crumb.href) {
              return (
                <MUILink key={idx} component={RouterLink} color='inherit' underline='hover' to={crumb.href}>
                  {crumb.label}
                </MUILink>
              )
            }
            return (
              <Typography key={idx} color='text.primary'>
                {crumb.label}
              </Typography>
            )
          })}
        </Breadcrumbs>
      )}
    </Box>
  )
}

export default PageHeader
