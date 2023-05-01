import Breadcrumbs from 'UI/Breadcrumbs';

import ContactAside from './ContactAside';
import ContactForm from './ContactForm';

import './styles.css';

const Contact = () => {
  return (
    <div className="container contact-container">
      <Breadcrumbs
        items={[
          { name: 'Home', src: '/' },
          { name: 'Contact', src: '/contact' },
        ]}
      />

      <div className="contact__box">
        <ContactAside />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
