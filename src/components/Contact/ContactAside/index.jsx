import { Icon } from 'UI/Icon';

import styles from './styles.module.scss';

const ContactAside = () => {
  return (
    <aside className={styles.contactUs}>
      <div className={styles.callUs}>
        <div className={styles.titleBox}>
          <div className={styles.iconBoxRed}>
            <Icon className={styles.icon} name="phoneWhite" />
          </div>
          Call To Us
        </div>
        <p className={styles.text}>We are available 24/7, 7 days a week.</p>
        <p className={styles.text}>
          Phone: {''}
          <a className={styles.phoneLink} href="tel:+8801611112222">
            +8801611112222
          </a>
        </p>
      </div>

      <div className={styles.writeUs}>
        <div className={styles.titleBox}>
          <div className={styles.iconBoxBlack}>
            <Icon className={styles.icon} name="letterWhite" />
          </div>
          Write To US
        </div>
        <p className={styles.text}>
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className={styles.text}>
          Emails: {''}
          <a className={styles.emailLink} href="mailto:customer@gmail.com">
            customer@exclusive.com
          </a>
        </p>
        <p className={styles.text}>
          Emails: {''}
          <a className={styles.emailLink} href="mailto:support@gmail.com">
            support@exclusive.com
          </a>
        </p>
      </div>
    </aside>
  );
};

export default ContactAside;
