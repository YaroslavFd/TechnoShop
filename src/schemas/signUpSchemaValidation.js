import * as yup from 'yup';

const signUpSchemaValidation = yup.object({
  userName: yup
    .string()
    .required('This field is required!')
    .min(2, 'Enter more characters')
    .max(10, 'Too many characters')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Name should only contain letters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password should contain at least one letter')
    .matches(/[0-9]/, 'Password should contain at least one digit'),
  userLogin: yup
    .string()
    .required('This field is required!')
    .test(
      'is-login-valid',
      'Invalid login. Please enter a valid phone number or email.',
      function (value) {
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        const emailRegex =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return phoneRegex.test(value) || emailRegex.test(value) ? true : false;
      }
    ),
});

export default signUpSchemaValidation;
