import Breadcrumbs from 'UI/Breadcrumbs';

import { Form } from './Form';
import { Order } from './Order';

import styles from './styles.module.scss';

export const CheckOut = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'My Account', src: '/account' },
          { name: 'View Cart', src: '/cart' },
          { name: 'CheckOut', src: '/checkout' },
        ]}
      />

      <h2 className={styles.title}>Billing Details</h2>
      <div className={styles.box}>
        <Form />
        <Order />
      </div>
    </>
  );
};
