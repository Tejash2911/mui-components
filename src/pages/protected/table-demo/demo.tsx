import { Add } from '@mui/icons-material'
import { Box, Chip, IconButton, Tooltip } from '@mui/material'
import type { ColumnDef } from '@tanstack/react-table'
import { Icon } from '@iconify/react'
import { DataTable, PageHeader } from '@/components'
import { ROUTES } from '@/utils/constant'

type User = {
  id: number
  name: string
  email: string
  age: number
  role: 'Admin' | 'Editor' | 'Viewer'
}

const demoData: User[] = Array.from({ length: 57 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: 18 + ((i * 7) % 40),
  role: (['Admin', 'Editor', 'Viewer'] as const)[i % 3]
}))

const demoColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: {
      align: 'left',
      width: '100px'
    },
    cell: ({ row }) => row.getValue('id')
  },
  {
    accessorKey: 'name',
    header: 'Name',
    meta: {
      align: 'left',
      width: '200px'
    },
    cell: ({ row }) => row.getValue('name')
  },
  {
    accessorKey: 'email',
    header: 'Email',
    meta: {
      align: 'left',
      width: '200px'
    }
  },
  {
    accessorKey: 'age',
    header: 'Age',
    meta: {
      align: 'left',
      width: '100px'
    },
    cell: ({ row }) => row.getValue('age')
  },
  {
    accessorKey: 'role',
    header: 'Role',
    meta: {
      align: 'center',
      width: '100px'
    },
    cell: ({ row }) => {
      const value = row.getValue<string>('role')
      return (
        <Box display='flex' justifyContent='center'>
          <Chip
            label={value}
            size='small'
            variant='filled'
            color={value === 'Admin' ? 'error' : value === 'Editor' ? 'info' : 'success'}
          />
        </Box>
      )
    }
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    meta: {
      align: 'right',
      width: '100px'
    },
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-0.5'>
          <Tooltip title='View'>
            <IconButton size='small' color='info' onClick={() => console.log(row.getValue('name'))}>
              <Icon icon='ri:eye-line' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Edit'>
            <IconButton size='small' color='warning' onClick={() => console.log(row.getValue('name'))}>
              <Icon icon='ri:edit-box-line' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Delete'>
            <IconButton size='small' color='error' onClick={() => console.log(row.getValue('name'))}>
              <Icon icon='ri:delete-bin-7-line' />
            </IconButton>
          </Tooltip>
        </div>
      )
    }
  }
]

const handleAddUser = () => {
  console.log('Adding user...')
  // TODO: Implement add user logic
}

export default function DemoTable() {
  return (
    <Box>
      <PageHeader
        title='Table Demo'
        breadcrumbs={[{ label: 'Dashboard', href: ROUTES.DASHBOARD }, { label: 'Table' }]}
      />
      <DataTable<User, unknown>
        columns={demoColumns}
        data={demoData}
        pageSize={5}
        downloadCSV
        enableRowSelection
        // onRowClick={row => alert(JSON.stringify(row, null, 2))}
        actions={[
          {
            key: 'add',
            label: 'Add User',
            variant: 'contained',
            color: 'primary',
            startIcon: <Add />,
            onClick: handleAddUser,
            loading: false
          }
        ]}
      />
    </Box>
  )
}
