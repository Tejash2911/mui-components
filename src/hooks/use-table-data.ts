import { useEffect, useState } from 'react'

interface PaginationI {
  pageSize: number
  page: number
}

interface SortI {
  field?: string
  sort?: string | number
}

interface ParamsI extends PaginationI, SortI {
  searchText?: string
}

interface UseTableDataProps extends SortI {
  rows?: any[]
  rowsCount?: number
}

function useTableData({ rows, rowsCount: intiRowCount, field: initField, sort: initSort }: UseTableDataProps) {
  const [data, setData] = useState<any[]>(Array.isArray(rows) ? rows : [])

  useEffect(() => {
    setData(Array.isArray(rows) ? rows : [])
  }, [rows])

  const [isLoading, setIsLoading] = useState(true)
  const [rowCount, setRowCount] = useState<number>(intiRowCount ?? 10)

  useEffect(() => {
    setRowCount(intiRowCount ?? 10)
  }, [intiRowCount])

  const [params, setParams] = useState<ParamsI>({
    pageSize: 10,
    page: 1,
    searchText: '',
    field: initField ?? '',
    sort: initSort ?? ''
  })

  const handleSort = ({ field, sort }: SortI) => {
    setParams({ ...params, field, sort })
  }

  const handleSearch = (searchValue: string) => {
    setParams({ ...params, searchText: searchValue, page: 1 })
  }

  const handlePagination = ({ page, pageSize }: PaginationI) => {
    setParams({ ...params, page, pageSize })
  }

  return {
    data,
    setData,
    rowCount,
    setRowCount,
    isLoading,
    setIsLoading,
    handleSort,
    searchText: params.searchText,
    handleSearch,
    params,
    handlePagination
  }
}

export default useTableData
