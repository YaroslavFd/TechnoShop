import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import contactSchemaValidation from 'schemas/contactShemaValidation';
import { Button } from 'UI/Button';
import Input from 'UI/Input';

import styles from './styles.module.scss';

const ContactForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(contactSchemaValidation),
    mode: 'onBlur',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(onSubmit(e))}>
      <div className={styles.inputs}>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'text'}
            name="name"
            placeholder={'Your Name'}
            required
            validation={{ ...register('name') }}
          />
          {errors?.name && (
            <div className={styles.error}>
              {errors?.name.message || 'Error!'}
            </div>
          )}
        </div>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'email'}
            name="email"
            placeholder={'Your Email'}
            required
            validation={{ ...register('email') }}
          />
          {errors?.email && (
            <div className={styles.error}>
              {errors?.email.message || 'Error!'}
            </div>
          )}
        </div>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'tel'}
            name="tel"
            placeholder={'Your Phone'}
            required
            validation={{ ...register('tel') }}
          />
          {errors?.tel && (
            <div className={styles.error}>
              {errors?.tel.message || 'Error!'}
            </div>
          )}
        </div>
      </div>

      <textarea
        className={styles.textarea}
        placeholder="Your Message"
        name="message"
      ></textarea>
      <Button className={styles.btn} type="submit" disabled={!isValid}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
