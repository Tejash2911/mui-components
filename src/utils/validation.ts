import * as yup from 'yup'
import { cleanHtml } from './common'

export const componentFormSchema = yup.object({
  textInput: yup.string().required('Text input is required'),
  textarea: yup.string().required('Textarea is required'),
  singleSelect: yup.string().required('Single select is required'),
  multiSelect: yup.array().min(1, 'At least one option is required').required('Multi select is required'),
  avatarSelect: yup.array().min(1, 'At least one option is required').required('Avatar select is required'),
  creatableSelect: yup.array().min(1, 'At least one option is required').required('Creatable select is required'),
  richText: yup.string().required('Rich text is required').transform(cleanHtml),
  checkbox: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions')
})
