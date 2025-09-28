import { Bounce, toast } from 'react-toastify'

export const showToastError = (message: string) => {
  toast.dismiss()
  toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
    transition: Bounce
  })
}

export const showToastSuccess = (message: string) => {
  toast.dismiss()
  toast.success(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
    transition: Bounce
  })
}
