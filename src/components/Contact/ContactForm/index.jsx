import { Button } from 'UI/Button';
import Input from 'UI/Input';

import './styles.css';

const ContactForm = () => {
  return (
    <form className="contact__form">
      <div className="contact__inputs">
        <label htmlFor="name" className="placeholder__box">
          <Input
            className="contact__input"
            inputClass={'input__grey'}
            type={'text'}
            name="name"
          />
          <div className="placeholder-text">
            Your Name <span>*</span>
          </div>
        </label>
        <label htmlFor="email" className="placeholder__box">
          <Input
            className="contact__input"
            inputClass={'input__grey'}
            type={'email'}
            name="email"
          />
          <div className="placeholder-text">
            Your Email <span>*</span>
          </div>
        </label>
        <label htmlFor="phone" className="placeholder__box">
          <Input
            className="contact__input"
            inputClass={'input__grey'}
            type={'tel'}
            name="phone"
          />
          <div className="placeholder-text">
            Your Phone <span>*</span>
          </div>
        </label>
      </div>

      <textarea
        className="contact__textarea"
        placeholder="Your Massage"
      ></textarea>

      <Button className={'contact__btn'}>Send Massage</Button>
    </form>
  );
};

export default ContactForm;
