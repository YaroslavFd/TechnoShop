import cn from 'classnames';

import './styles.css';

const Input = ({ name, type, placeholder, required }) => {
  return (
    <div className="input__wrapper">
      <input
        className={cn('input__field', { input__error: name.error })}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={name.onChange}
        onBlur={name.onBlur}
        value={name.value}
      />
      {name.error}
    </div>
  );
};

export default Input;
