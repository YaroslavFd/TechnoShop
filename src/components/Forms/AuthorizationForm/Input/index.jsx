import './styles.css';

const Input = ({ name, type, placeholder, required }) => {
  return (
    <div className="input__wrapper">
      <input
        className={`input__field ${name.error && 'input__error'}`}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => name.onChange(e)}
        onBlur={(e) => name.onBlur(e)}
        value={name.value}
      />
      {name.error}
    </div>
  );
};

export default Input;
