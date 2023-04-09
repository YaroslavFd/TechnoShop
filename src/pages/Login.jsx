import '../style/signup-login.css';
import '../style/form.css';
import '../style/button.css';

const Login = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <section className="login">
          <div className="container login__container">
            <div className="login__block">
              <h3 className="login__title">Log in to Exclusive</h3>
              <p className="login__subtitle text">Enter your details below</p>
              <form
                className="form form__signup"
                id="form__login"
                action="POST"
              >
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
