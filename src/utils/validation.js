import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  phone: yup.string()
    .matches(/^[\d\s\-\+\(\)]*$/, 'Invalid phone number')
    .nullable(),
  subject: yup.string()
    .required('Subject is required'),
  message: yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
}).required();
