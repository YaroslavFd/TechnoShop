import accounts from 'data/accounts';

import './styles.css';

const AuthorizationForm = ({ children, title, subtitle }) => {
  //TODO const navigate = useNavigate();

  // useEffect(() => {
  //   const storedIsLogin = localStorage.getItem('isLogin');
  //   if (storedIsLogin === 'true') {
  //     setIsLogin(true);
  //     navigate('/');
  //   }
  // }, [navigate]);

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
  return (
    <section className="login">
      <div className="container login__container">
        <div className="login__block">
          <h3 className="login__title">{title}</h3>
          <p className="login__subtitle text">{subtitle}</p>
          <form
            // onSubmit={formSubmitHandle}
            className="form form__signup"
            id="form__login"
            action="POST"
          >
            {children}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthorizationForm;
