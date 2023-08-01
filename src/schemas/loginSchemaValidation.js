import * as yup from 'yup';

const loginSchemaValidation = yup.object({
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
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password should contain at least one letter')
    .matches(/[0-9]/, 'Password should contain at least one digit'),
});

export default loginSchemaValidation;
