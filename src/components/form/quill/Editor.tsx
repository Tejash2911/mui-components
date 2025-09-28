import React from 'react'
import { styled } from '@mui/material/styles'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

const StyledEditor = styled('div')(({ theme }) => ({
  '& .quill': {
    '& .ql-toolbar': {
      borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      color: theme.palette.text.primary
    },
    '& .ql-container': {
      borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      color: theme.palette.text.primary,
      '&.ql-snow': {
        borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }
    },
    '&:hover .ql-toolbar, &:hover .ql-container': {
      borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)'
    }
  },
  '&.Mui-error .quill': {
    '& .ql-toolbar, & .ql-container': {
      borderColor: theme.palette.error.main
    },
    '&:hover .ql-toolbar, &:hover .ql-container': {
      borderColor: theme.palette.error.main
    }
  }
}))

export interface EditorProps {
  value: string
  onChange: (value: string) => void
  theme?: 'snow' | 'bubble'
  error?: boolean
  height?: number | string
}

const Editor: React.FC<EditorProps> = ({ value, onChange, theme = 'snow', error = false, height, ...props }) => {
  const editorStyles = {
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'flex',
    flexDirection: 'column' as const
  }

  return (
    <StyledEditor className={error ? 'Mui-error' : ''}>
      <ReactQuill id='minimal-quill' theme={theme} value={value} onChange={onChange} style={editorStyles} {...props} />
    </StyledEditor>
  )
}

export default Editor
