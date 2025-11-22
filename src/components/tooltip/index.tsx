import { Tooltip, type TooltipProps } from '@mui/material'

interface CommonTooltipProps extends TooltipProps {
  children: React.ReactElement
}

const CommonTooltip = ({ children, ...rest }: CommonTooltipProps) => {
  return <Tooltip {...rest}>{children}</Tooltip>
}

export default CommonTooltip
