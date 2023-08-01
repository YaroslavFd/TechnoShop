import * as yup from 'yup';

const checkOutSchemaValidation = yup.object({
  firstName: yup
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
});

export default checkOutSchemaValidation;
