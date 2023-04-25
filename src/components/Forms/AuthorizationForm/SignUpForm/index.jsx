import { Link } from 'react-router-dom';

import { Button } from 'UI/Button';
import Input from 'UI/Input';

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
      <Input name={name} type="text" placeholder="Name" required={true} />
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
      <div className="signup__buttons">
        <Button
          type="button"
          appearance="red"
          disabled={
            !name.inputValid || !email.inputValid || !password.inputValid
          }
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
