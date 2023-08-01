import * as yup from 'yup';

const accountSchemaValidation = yup.object({
  firstName: yup
    .string()
    .required('This field is required!')
    .min(2, 'Enter more characters')
    .max(10, 'Too many characters')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Name should only contain letters'),
  lastName: yup
    .string()
    .required('This field is required!')
    .min(2, 'Enter more characters')
    .max(10, 'Too many characters')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Name should only contain letters'),
  email: yup
    .string()
    .required('Email Address is required')
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
      'This email does not exist'
    ),
  address: yup
    .string()
    .required('This field is required!')
    .min(3, 'Enter more characters')
    .max(10, 'Too many characters'),
  password: yup.string().required('Password is required'),
  newPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password should contain at least one letter')
    .matches(/[0-9]/, 'Password should contain at least one digit'),
  confirmNewPassword: yup
    .string()
    .required('Confirm New Password is required')
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

export default accountSchemaValidation;
