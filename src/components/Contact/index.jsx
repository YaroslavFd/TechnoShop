import Breadcrumbs from 'UI/Breadcrumbs';

import ContactAside from './ContactAside';
import ContactForm from './ContactForm';

import styles from './styles.module.scss';

const Contact = () => {
  return (
    <div className="container contact-container">
      <Breadcrumbs
        items={[
          { name: 'Home', src: '/' },
          { name: 'Contact', src: '/contact' },
        ]}
      />

      <div className={styles.box}>
        <ContactAside />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
