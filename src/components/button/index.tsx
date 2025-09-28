import { Button, type ButtonProps } from '@mui/material'

interface CommonButtonProps extends ButtonProps {
  children: React.ReactNode
}

const CommonButton = ({ children, ...rest }: CommonButtonProps) => {
  return <Button {...rest}>{children}</Button>
}

export default CommonButton
