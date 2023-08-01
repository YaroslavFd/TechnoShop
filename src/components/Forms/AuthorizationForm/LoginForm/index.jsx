import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import loginSchemaValidation from 'schemas/loginSchemaValidation';
import { Button } from 'UI/Button';
import Input from 'UI/Input';

import AuthorizationForm from '..';

import './styles.css';

const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchemaValidation),
    mode: 'onBlur',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <AuthorizationForm
      title="Log in to Exclusive"
      subtitle="Enter your details below"
      handleSubmit={(e) => handleSubmit(onSubmit(e))}
    >
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
      <div className="login__buttons">
        <Button type="submit" appearance="red" disabled={!isValid}>
          Log in
        </Button>
        <a href="/#" className="forget-password text-red">
          Forgot Password?
        </a>
      </div>
    </AuthorizationForm>
  );
};

export default LoginForm;
