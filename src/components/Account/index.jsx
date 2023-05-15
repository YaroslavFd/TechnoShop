import Breadcrumbs from 'UI/Breadcrumbs';

import AccountForm from './AccountForm';
import AccountMenu from './AccountMenu';

import styles from './styles.module.scss';

const Account = () => {
  return (
    <>
      <div className={styles.headerBox}>
        <Breadcrumbs
          items={[
            { name: 'Home', src: '/' },
            { name: 'My Account', src: '/account' },
          ]}
        />
        <p>
          Welcome!<span className={styles.username}>test</span>
        </p>
      </div>

      <div className={styles.box}>
        <AccountMenu />
        <AccountForm />
      </div>
    </>
  );
};

export default Account;
