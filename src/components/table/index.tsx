import React from 'react'
import { Download, X } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material'
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { CommonButton, DebouncedInput } from '@/components'

/**
 * Reusable DataTable component powered by TanStack Table v8
 * - Sorting
 * - Global search
 * - Column filters (string)
 * - Column visibility toggle
 * - Pagination
 * - Optional row selection
 * - CSV export (client-side)
 */

export type TableAction = {
  /** Unique key for the action */
  key: string
  /** Button label */
  label: string
  /** Button variant */
  variant?: 'text' | 'outlined' | 'contained'
  /** Button color */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** Start icon */
  startIcon?: React.ReactNode
  /** End icon */
  endIcon?: React.ReactNode
  /** Tooltip text */
  tooltip?: string
  /** Disabled state */
  disabled?: boolean
  /** Loading state */
  loading?: boolean
  /** Click handler */
  onClick: () => void
}

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /** Array of action buttons to display in the toolbar */
  actions?: TableAction[]
  /** Enable checkbox selection column */
  enableRowSelection?: boolean
  /** Enable global search */
  enableGlobalSearch?: boolean
  /** Enable column filters */
  enableColumnFilters?: boolean
  /** Enable pagination */
  enablePagination?: boolean
  /** Enable download CSV */
  downloadCSV?: boolean
  /** Enable reset table */
  resetTable?: boolean
  /** Initial page size (default 10) */
  pageSize?: number
  /** Controlled external loading state */
  loading?: boolean
  /** Optional row click handler */
  onRowClick?: (row: TData) => void
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  actions = [],
  enableRowSelection = false,
  enableGlobalSearch = true,
  enableColumnFilters = false,
  enablePagination = true,
  downloadCSV = false,
  resetTable = false,
  pageSize = 10,
  loading,
  onRowClick
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [globalFilter, setGlobalFilter] = React.useState('')

  const table = useReactTable({
    data,
    columns: enableRowSelection
      ? ([
          {
            id: 'select',
            meta: {
              align: 'left',
              width: '100px'
            },
            header: ({ table }) => (
              <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  table.toggleAllPageRowsSelected(!!e.target.checked)
                }
                aria-label='Select all'
                sx={{ p: 0 }}
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => row.toggleSelected(!!e.target.checked)}
                aria-label='Select row'
                sx={{ p: 0 }}
              />
            ),
            enableSorting: false,
            enableHiding: false,
            size: 48
          },
          ...columns
        ] as ColumnDef<TData, TValue>[])
      : columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } }
  })

  function resetAll() {
    setSorting([])
    setColumnFilters([])
    setColumnVisibility({})
    setRowSelection({})
    setGlobalFilter('')
  }

  function exportCSV() {
    const visibleCols = table.getAllLeafColumns().filter(c => c.getIsVisible())
    const header = visibleCols.map(c => c.columnDef.header as string)
    const rows = table.getRowModel().rows.map(r =>
      visibleCols
        .map(c => {
          const v = r.getValue<any>(c.id)
          if (v == null) return ''
          if (typeof v === 'string') return '"' + v.replaceAll('"', '""') + '"'
          return JSON.stringify(v)
        })
        .join(',')
    )
    const csv = [header.join(','), ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `table_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Box>
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          {enableGlobalSearch && (
            <DebouncedInput
              placeholder='Search all columns...'
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              sx={{ minWidth: 250 }}
            />
          )}

          {downloadCSV && (
            <Tooltip title='Download CSV'>
              <IconButton onClick={exportCSV} size='small'>
                <Download />
              </IconButton>
            </Tooltip>
          )}

          {resetTable && (
            <Tooltip title='Reset Table'>
              <IconButton onClick={resetAll} size='small'>
                <X />
              </IconButton>
            </Tooltip>
          )}

          {enableRowSelection && (
            <Typography variant='body2' color='text.secondary' sx={{ px: 1 }}>
              {Object.keys(rowSelection).length} selected
            </Typography>
          )}
        </Box>

        {actions.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {actions.map(action => {
              const button = (
                <CommonButton
                  key={action.key}
                  variant={action.variant || 'outlined'}
                  color={action.color || 'primary'}
                  size={action.size || 'large'}
                  startIcon={action.startIcon}
                  endIcon={action.endIcon}
                  onClick={action.onClick}
                  disabled={action.disabled || action.loading}
                  loading={action.loading}
                >
                  {action.label}
                </CommonButton>
              )

              return action.tooltip ? (
                <Tooltip key={action.key} title={action.tooltip}>
                  {button}
                </Tooltip>
              ) : (
                button
              )
            })}
          </Box>
        )}
      </Box>

      {/* Table */}
      <TableContainer sx={{ maxHeight: 665 }}>
        <Table stickyHeader>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    align={(header.column.columnDef.meta as any)?.align || 'left'}
                    sx={{
                      cursor: header.column.getCanSort() ? 'pointer' : 'default',
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      width: (header.column.columnDef.meta as any)?.width || 'auto',
                      minWidth: (header.column.columnDef.meta as any)?.minWidth || 'unset',
                      maxWidth: (header.column.columnDef.meta as any)?.maxWidth || 'unset',
                      verticalAlign: 'middle',
                      '&:hover': header.column.getCanSort()
                        ? {
                            bgcolor: 'action.hover'
                          }
                        : {}
                    }}
                  >
                    <Box>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <Box component='span' sx={{ ml: 1 }}>
                          {header.column.getIsSorted() === 'desc'
                            ? '▼'
                            : header.column.getIsSorted() === 'asc'
                              ? '▲'
                              : '↕'}
                        </Box>
                      )}
                    </Box>
                    {enableColumnFilters && header.column.getCanFilter() ? (
                      <ColumnFilter column={header.column} />
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {loading ? (
              Array.from({ length: 1 }).map((_, rowIndex) => (
                <TableRow key={`skeleton-${rowIndex}`}>
                  {table.getAllLeafColumns().map((column, colIndex) => (
                    <TableCell key={`skeleton-${rowIndex}-${colIndex}`}>
                      <Skeleton
                        variant='text'
                        width={`${70 + Math.random() * 25}%`}
                        height={24}
                        animation='wave'
                        sx={{
                          animationDelay: `${rowIndex * 0.1}s`,
                          maxWidth: column.getSize()
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  hover={!!onRowClick}
                  onClick={() => onRowClick?.(row.original)}
                  selected={row.getIsSelected()}
                  sx={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      align={(cell.column.columnDef.meta as any)?.align || 'left'}
                      sx={{
                        width: (cell.column.columnDef.meta as any)?.width || 'auto',
                        minWidth: (cell.column.columnDef.meta as any)?.minWidth || 'unset',
                        maxWidth: (cell.column.columnDef.meta as any)?.maxWidth || 'unset',
                        verticalAlign: 'middle',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align='center' sx={{ py: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography variant='body1' color='text.secondary'>
                      No results found
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {enablePagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          component='div'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
          labelRowsPerPage='Rows per page:'
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`}
        />
      )}
    </Box>
  )
}

// Simple string filter UI (auto-applies onChange)
function ColumnFilter({ column }: { column: any }) {
  const firstValue = column.getFacetedRowModel()?.flatRows?.[0]?.getValue(column.id)
  const isNumber = typeof firstValue === 'number'

  if (isNumber) {
    return (
      <DebouncedInput
        type='number'
        placeholder='Filter...'
        value={(column.getFilterValue() as string) ?? ''}
        onChange={value => column.setFilterValue(value as string)}
        sx={{ mt: 1, width: '100%' }}
      />
    )
  }

  return (
    <DebouncedInput
      placeholder='Filter...'
      value={(column.getFilterValue() as string) ?? ''}
      onChange={value => column.setFilterValue(value as string)}
      sx={{ mt: 1, width: '100%' }}
    />
  )
}
