import './styles.css';

const ContactAside = () => {
  return (
    <aside className="contact__contact-us">
      <div className="contact__call-us">
        <div className="contact__title-box">
          <div className="contact__icon-box_red">
            <img
              className="contact__icon"
              src="img/icons/phone-white.svg"
              alt="phone"
            />
          </div>
          Call To Us
        </div>
        <p className="contact__text">We are available 24/7, 7 days a week.</p>
        <p className="contact__text contact__phone">
          Phone: {''}
          <a className="contact__phone-link" href="tel:+8801611112222">
            +8801611112222
          </a>
        </p>
      </div>

      <div className="contact__write-us">
        <div className="contact__title-box">
          <div className="contact__icon-box_black">
            <img
              className="contact__icon"
              src="img/icons/letter-white.svg"
              alt="letter"
            />
          </div>
          Write To US
        </div>
        <p className="contact__text">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="contact__text contact__email">
          Emails: {''}
          <a className="contact__email-link" href="mailto:customer@gmail.com">
            customer@exclusive.com
          </a>
        </p>
        <p className="contact__text contact__email">
          Emails: {''}
          <a className="contact__email-link" href="mailto:support@gmail.com">
            support@exclusive.com
          </a>
        </p>
      </div>
    </aside>
  );
};

export default ContactAside;
