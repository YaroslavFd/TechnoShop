import styles from './styles.module.scss';

const Checkbox = ({ children, value = '✔︎', size = 24 }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span style={{ width: size, height: size }}>{value}</span>
      {children}
    </label>
  );
};

export default Checkbox;
