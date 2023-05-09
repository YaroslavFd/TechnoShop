import styles from './styles.module.scss';

const BestSelling = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default BestSelling;
