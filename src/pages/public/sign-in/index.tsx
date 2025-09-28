import { useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CommonButton } from '@/components'
import { ROUTES } from '@/utils/constant'
import { showToastSuccess } from '@/utils/helper'
import sleep from '@/utils/sleep'

const SignIn = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const handleSignIn = async () => {
    setLoading(true)
    await sleep(500)
    localStorage.setItem('token', 'token')
    showToastSuccess('Signed in successfully')
    navigate(ROUTES.DASHBOARD)
    setLoading(false)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CommonButton variant='contained' color='primary' onClick={handleSignIn} loading={loading}>
        Sign In
      </CommonButton>
    </Box>
  )
}

export default SignIn
