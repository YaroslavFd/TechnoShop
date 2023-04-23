import accounts from 'data/accounts';
import { useEffect, useState } from 'react';
import { Button } from 'UI/Button';

import { useInput } from '../useInput';
// import { useNavigate } from 'react-router-dom';

import './styles.css';

const LoginForm = () => {
  //TODO const navigate = useNavigate();

  // // useEffect(() => {
  // //   const storedIsLogin = localStorage.getItem('isLogin');
  // //   if (storedIsLogin === 'true') {
  // //     setIsLogin(true);
  // //     navigate('/');
  // //   }
  // // }, [navigate]);

  // const formSubmitHandle = (event) => {
  //   event.preventDefault();

  //   if (
  //     accounts.some(
  //       (el) => el.userName === emailInput && +el.password === +passwordInput
  //     )
  //   ) {
  //     setIsLogin(true);
  //     localStorage.setItem('isLogin', true);
  //     navigate('/');
  //   }
  // };
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 10 });

  return (
    <section className="login">
      <div className="container login__container">
        <div className="login__block">
          <h3 className="login__title">Log in to Exclusive</h3>
          <p className="login__subtitle text">Enter your details below</p>
          <form
            // onSubmit={formSubmitHandle}
            className="form form__signup"
            id="form__login"
            action="POST"
          >
            <input
              className="form__input"
              type="text"
              placeholder="Email or Phone Number"
              required
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
            />
            {email.isDirty && email.isEmpty && (
              <div style={{ color: 'red' }}>Поле не может быть пустым</div>
            )}
            {email.isDirty && email.minLengthError && (
              <div style={{ color: 'red' }}>Некоректная длина</div>
            )}
            {email.isDirty && email.emailError && (
              <div style={{ color: 'red' }}>Некоректный емейл</div>
            )}
            {password.isDirty && password.isEmpty && (
              <div style={{ color: 'red' }}>Поле не может быть пустым</div>
            )}
            {password.isDirty && password.minLengthError && (
              <div style={{ color: 'red' }}>Некоректная длина</div>
            )}
            {password.isDirty && password.maxLengthError && (
              <div style={{ color: 'red' }}>Слишком длиный пароль</div>
            )}
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
              value={password.value}
            />
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
