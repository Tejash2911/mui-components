import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import {
  AutoCompleteAvatarControl,
  CommonButton,
  CreateAbleAutoCompleteControl,
  EditorControl,
  InputControl,
  MultiAutoCompleteControl,
  PageHeader,
  SingleAutoCompleteControl,
  SingleCheckBoxControl,
  TextareaControl
} from '@/components'
import { ROUTES } from '@/utils/constant'
import { componentFormSchema } from '@/utils/validation'

interface FormData {
  textInput: string
  textarea: string
  checkbox: boolean
  singleSelect: string
  multiSelect: string[]
  avatarSelect: string[]
  creatableSelect: string[]
  richText: string
}

const FormComponents = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      textInput: '',
      textarea: '',
      checkbox: false,
      singleSelect: '',
      multiSelect: [],
      avatarSelect: [],
      creatableSelect: [],
      richText: ''
    },
    resolver: yupResolver(componentFormSchema)
  })

  const { handleSubmit, watch } = methods

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const avatarOptions = [
    { value: 'option1', label: 'Option 1', url: 'https://via.placeholder.com/40' },
    { value: 'option2', label: 'Option 2', url: 'https://via.placeholder.com/40' },
    { value: 'option3', label: 'Option 3', url: 'https://via.placeholder.com/40' }
  ]

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Handle form submission
  }

  return (
    <FormProvider {...methods}>
      <PageHeader
        title='Form Components'
        breadcrumbs={[{ label: 'Dashboard', href: ROUTES.DASHBOARD }, { label: 'Form' }]}
      />
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  Input Control
                </Typography>
                <InputControl name='textInput' label='Text Input' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  AutoComplete (Single)
                </Typography>
                <SingleAutoCompleteControl name='singleSelect' options={options} label='Select Single Option' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  AutoComplete (Multiple)
                </Typography>
                <MultiAutoCompleteControl name='multiSelect' options={options} label='Select Multiple Options' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  AutoComplete with Avatar
                </Typography>
                <AutoCompleteAvatarControl name='avatarSelect' options={avatarOptions} label='Select with Avatar' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  AutoComplete (Creatable)
                </Typography>
                <CreateAbleAutoCompleteControl
                  name='creatableSelect'
                  options={options.map(option => option.value)}
                  label='Create or Select Option'
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  Checkbox
                </Typography>
                <SingleCheckBoxControl name='checkbox' label='Checkbox Label' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  Textarea Control
                </Typography>
                <TextareaControl name='textarea' rows={4} label='Textarea' />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant='body1' gutterBottom>
                  Rich Text Editor
                </Typography>
                <EditorControl name='richText' />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <CommonButton type='button' variant='outlined' color='info' onClick={() => methods.reset()}>
              Reset Form
            </CommonButton>
            <CommonButton type='submit' variant='contained' color='primary'>
              Submit Form
            </CommonButton>
          </Box>
        </Stack>
      </Box>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </CardContent>
      </Card>
    </FormProvider>
  )
}

export default FormComponents
