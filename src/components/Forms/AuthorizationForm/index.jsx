import './styles.css';

const AuthorizationForm = ({ children, title, subtitle }) => {
  return (
    <section className="auth">
      <div className="container auth__container">
        <div className="auth__block">
          <h3 className="auth__title">{title}</h3>
          <p className="auth__subtitle text">{subtitle}</p>
          <form className="form form__signup" id="form__auth" action="POST">
            {children}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthorizationForm;
