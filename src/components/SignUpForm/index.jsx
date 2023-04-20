import { Link } from 'react-router-dom';

import { Button } from 'UI/Button';

import './style.css';

const SignUpForm = () => {
  return (
    <section className="login">
      <div className="container login__container">
        <div className="login__block">
          <h3 className="login__title">Create an account</h3>
          <p className="login__subtitle text">Enter your details below</p>
          <form className="form form__signup" action="POST">
            <input
              className="form__input"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="form__input"
              type="text"
              placeholder="Email or Phone Number"
              required
            />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              required
            />
            <Button type="button" appearance="red">
              Create Account
            </Button>
          </form>
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
      </div>
    </section>
  );
};

export default SignUpForm;
