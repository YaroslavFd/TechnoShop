import styles from './styles.module.scss';

export const Checkbox = ({
  children,
  value = '✔︎',
  type = 'checkbox',
  name,
  size = 24,
}) => {
  return (
    <label className={styles.checkbox}>
      <input type={type} name={name} />
      <span style={{ width: size, height: size }}>{value}</span>
      {children}
    </label>
  );
};
