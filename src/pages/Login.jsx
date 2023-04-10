import '../style/signup-login.css';
import '../style/form.css';
import '../style/button.css';
import { useState } from 'react';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const emailInputHandle = (event) => {
    setEmailInput(event.target.value);
  };
  const passwordInputHandle = (event) => {
    setPasswordInput(event.target.value);
  };

  const formSubmitHandle = (event) => {
    event.preventDefault();
    console.log(emailInput);
    console.log(passwordInput);
    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <div className="wrapper">
      <main className="main">
        <section className="login">
          <div className="container login__container">
            <div className="login__block">
              <h3 className="login__title">Log in to Exclusive</h3>
              <p className="login__subtitle text">Enter your details below</p>
              <form
                onSubmit={formSubmitHandle}
                className="form form__signup"
                id="form__login"
                action="POST"
              >
                <input
                  className="form__input"
                  type="text"
                  placeholder="Email or Phone Number"
                  required
                  onChange={emailInputHandle}
                  value={emailInput}
                />
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={passwordInputHandle}
                  value={passwordInput}
                />
              </form>
              <div className="form__buttons">
                <button className="button button__login" form="form__login">
                  Log In
                </button>
                <a href="#" className="forget-password text-red">
                  Forget Password?
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
