import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import schemaValidation from 'schemas/schemaValidation';
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
    resolver: yupResolver(schemaValidation),
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
        name="firstName"
        required
        validation={{ ...register('firstName') }}
      />
      {errors?.firstName && (
        <div className="error">{errors?.firstName.message || 'Error!'}</div>
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
        name="newPassword"
        required
        validation={{ ...register('newPassword') }}
      />
      {errors?.newPassword && (
        <div className="error">{errors?.newPassword.message || 'Error!'}</div>
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
