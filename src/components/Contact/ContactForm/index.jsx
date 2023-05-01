import { Button } from 'UI/Button';
import Input from 'UI/Input';

import styles from './styles.module.scss';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'email'}
            name="email"
            placeholder={'Your Name'}
            required
          />
        </div>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'email'}
            name="email"
            placeholder={'Your Email'}
            required
          />
        </div>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'tel'}
            name="phone"
            placeholder={'Your Phone'}
            required
          />
        </div>
      </div>

      <textarea
        className={styles.textarea}
        placeholder="Your Massage"
      ></textarea>

      <Button className={styles.btn}>Send Massage</Button>
    </form>
  );
};

export default ContactForm;
