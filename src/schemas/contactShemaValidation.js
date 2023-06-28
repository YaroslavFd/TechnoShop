import * as yup from 'yup';

const contactSchemaValidation = yup.object({
  name: yup
    .string()
    .required('This field is required!')
    .min(2, 'Enter more characters')
    .max(10, 'Too many characters')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Name should only contain letters'),
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

export default contactSchemaValidation;
