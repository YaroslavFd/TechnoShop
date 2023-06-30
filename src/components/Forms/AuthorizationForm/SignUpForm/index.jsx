import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signUpSchemaValidation from 'schemas/signUpSchemaValidation';
import { Button } from 'UI/Button';
import Input from 'UI/Input';

import AuthorizationForm from '..';

import './styles.css';

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchemaValidation),
    mode: 'onBlur',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <AuthorizationForm
      title="Create an account"
      subtitle="Enter your details below"
      handleSubmit={(e) => handleSubmit(onSubmit(e))}
    >
      <Input
        type="text"
        placeholder="Name"
        name="userName"
        required
        validation={{ ...register('userName') }}
      />
      {errors?.userName && (
        <div className="error">{errors?.userName.message || 'Error!'}</div>
      )}
      <Input
        type="text"
        placeholder="Email or Phone Number"
        name="userLogin"
        required
        validation={{ ...register('userLogin') }}
      />
      {errors?.userLogin && (
        <div className="error">{errors?.userLogin.message || 'Error!'}</div>
      )}
      <Input
        type="password"
        placeholder="Password"
        name="password"
        required
        validation={{ ...register('password') }}
      />
      {errors?.password && (
        <div className="error">{errors?.password.message || 'Error!'}</div>
      )}
      <div className="signup__buttons">
        <Button type="submit" appearance="red" disabled={!isValid}>
          Create Account
        </Button>
        <a className="text button__google" href="/#">
          <img src="/img/icons/form-Google.svg" alt="google" /> Sign up with
          Google
        </a>
        <div className="login__box">
          <p className="login__box-text">Already have account?</p>
          <Link to="/login" className="login__box-link">
            Log in
          </Link>
        </div>
      </div>
    </AuthorizationForm>
  );
};

export default SignUpForm;
