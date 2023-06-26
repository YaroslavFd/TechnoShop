import cn from 'classnames';

import './styles.css';

const Input = ({
  name,
  id,
  type,
  placeholder,
  required,
  validation,
  inputClass = 'input__field',
}) => {
  return (
    <div className="input__wrapper">
      <input
        className={cn(inputClass, { input__error: name.error })}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={name.onChange}
        onBlur={name.onBlur}
        value={name.value}
        id={id}
        {...validation}
      />
      {name.error}
    </div>
  );
};

export default Input;
