import { Link } from 'react-router-dom';

import { Button } from 'UI/Button';

import AuthorizationForm from '..';
import { useInput } from '../useInput';

import './styles.css';

const SignUpForm = () => {
  const name = useInput('', { isEmpty: true, minLength: 5, maxLength: 15 });
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 10 });

  return (
    <AuthorizationForm
      title="Create an account"
      subtitle="Enter your details below"
    >
      <input
        className={`form__input ${name.error && 'input__error'}`}
        type="text"
        placeholder="Name"
        required
        onChange={(e) => name.onChange(e)}
        onBlur={(e) => name.onBlur(e)}
        value={name.value}
      />
      {name.error}

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

      <div className="signup__buttons">
        <Button
          disabled={!email.inputValid || !password.inputValid}
          type="button"
          appearance="red"
        >
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
