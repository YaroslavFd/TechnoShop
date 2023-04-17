import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import accounts from '../../data/accounts';
import { Button } from '../../UI/Button';

import './styles.css';

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedIsLogin = localStorage.getItem('isLogin');
  //   if (storedIsLogin === 'true') {
  //     setIsLogin(true);
  //     navigate('/');
  //   }
  // }, [navigate]);

  const emailInputHandle = (event) => {
    setEmailInput(event.target.value);
  };
  const passwordInputHandle = (event) => {
    setPasswordInput(event.target.value);
  };

  const formSubmitHandle = (event) => {
    event.preventDefault();

    if (
      accounts.some(
        (el) => el.userName === emailInput && +el.password === +passwordInput
      )
    ) {
      setIsLogin(true);
      localStorage.setItem('isLogin', true);
      navigate('/');
    }
  };

  return (
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
            <div className="form__buttons">
              <Button type="button" appearance="red">
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
