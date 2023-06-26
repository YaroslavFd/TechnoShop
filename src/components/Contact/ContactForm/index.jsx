import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schemaValidation from 'schemas/schemaValidation';
import { Button } from 'UI/Button';
import Input from 'UI/Input';

import styles from './styles.module.scss';

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onBlur',
  });

  const onSubmit = () => {
    reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <div>
          <Input
            inputClass={'input__grey'}
            type={'email'}
            name="firstName"
            placeholder={'Your Name'}
            required
            validation={{ ...register('firstName') }}
          />
          {errors?.firstName && (
            <div className={styles.error}>
              {errors?.firstName.message || 'Error!'}
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
      <Button className={styles.btn}>Send Message</Button>
    </form>
  );
};

export default ContactForm;
