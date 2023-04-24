import { Button } from 'UI/Button';

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
      <input
        className={`form__input ${email.error && 'input__error'}`}
        type="text"
        placeholder="Email or Phone Number"
        required
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
      />
      {email.error}
      <input
        className={`form__input ${password.error && 'input__error'}`}
        type="password"
        placeholder="Password"
        required
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        value={password.value}
      />
      {password.error}
      <div className="form__buttons">
        <Button
          disabled={!email.inputValid || !password.inputValid}
          type="button"
          appearance="red"
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
