import * as yup from 'yup';

const schemaValidation = yup.object().shape({
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
  companyName: yup.string().max(10, 'Too many characters'),
  address: yup
    .string()
    .required('This field is required!')
    .min(3, 'Enter more characters')
    .max(10, 'Too many characters'),
  apartment: yup.string().max(10, 'Too many characters'),
  city: yup
    .string()
    .required('This field is required!')
    .min(3, 'Enter more characters')
    .max(10, 'Too many characters'),
  tel: yup
    .string()
    .required('Phone Number is required')
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Phone Number is not valid'),
  email: yup
    .string()
    .required('Email Address is required')
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
      'This email does not exist'
    ),
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

export default schemaValidation;
