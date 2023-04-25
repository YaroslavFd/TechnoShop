import { Button } from 'UI/Button';
import Input from 'UI/Input';

import AuthorizationForm from '..';
import { useInput } from '../useInput';

import './styles.css';

const LoginForm = () => {
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 10 });

  return (
    <AuthorizationForm
      title="Log in to Exclusive"
      subtitle="Enter your details below"
    >
      <Input
        name={email}
        type="text"
        placeholder="Email or Phone Number"
        required={true}
      />
      <Input
        name={password}
        type="password"
        placeholder="Password"
        required={true}
      />
      <div className="login__buttons">
        <Button
          type="button"
          appearance="red"
          disabled={!email.inputValid || !password.inputValid}
        >
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
