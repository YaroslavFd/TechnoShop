import styles from './styles.module.scss';

const AccountMenu = () => {
  return (
    <nav className={styles.menu}>
      <h3 className={styles.menuTitle}>Manage My Account</h3>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="/#">
            My Profile
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="/#">
            Address Book
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="/#">
            My Payment Options
          </a>
        </li>
      </ul>
      <h3 className={styles.menuTitle}>My Orders</h3>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="/#">
            My Returns
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="/#">
            My Cancellations
          </a>
        </li>
      </ul>
      <h3 className={styles.menuTitle}>
        <a className={styles.menuTitle} href="/#">
          My WishList
        </a>
      </h3>
    </nav>
  );
};

export default AccountMenu;
