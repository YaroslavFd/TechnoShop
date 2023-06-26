import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Checkbox } from 'UI/Checkbox';
import Input from 'UI/Input';

import schemaValidation from 'utils/schemaValidation';

import styles from './styles.module.scss';

export const Form = () => {
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
      <label htmlFor="firstName">
        First Name<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="firstName"
          type={'text'}
          name="firstName"
          required
          validation={{ ...register('firstName') }}
        />
        {errors?.firstName && (
          <div className={styles.error}>
            {errors?.firstName.message || 'Error!'}
          </div>
        )}
      </label>

      <label htmlFor="companyName">
        Company Name
        <Input
          inputClass={'input__grey'}
          id="companyName"
          type={'text'}
          name="companyName"
          validation={{ ...register('companyName') }}
        />
        {errors?.companyName && (
          <div className={styles.error}>
            {errors?.companyName.message || 'Error!'}
          </div>
        )}
      </label>

      <label htmlFor="address">
        Street Address<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="address"
          type={'text'}
          name="address"
          required
          validation={{ ...register('address') }}
        />
        {errors?.address && (
          <div className={styles.error}>
            {errors?.address.message || 'Error!'}
          </div>
        )}
      </label>

      <label htmlFor="apartment">
        Apartment, floor, etc. (optional)
        <Input
          inputClass={'input__grey'}
          id="apartment"
          type={'text'}
          name="apartment"
          validation={{ ...register('apartment') }}
        />
        {errors?.apartment && (
          <div className={styles.error}>
            {errors?.apartment.message || 'Error!'}
          </div>
        )}
      </label>

      <label htmlFor="city">
        Town/City<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="city"
          type={'text'}
          name="city"
          required
          validation={{ ...register('city') }}
        />
        {errors?.city && (
          <div className={styles.error}>{errors?.city.message || 'Error!'}</div>
        )}
      </label>

      <label htmlFor="tel">
        Phone Number<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="tel"
          type={'tel'}
          name="tel"
          required
          validation={{ ...register('tel') }}
        />
        {errors?.tel && (
          <div className={styles.error}>{errors?.tel.message || 'Error!'}</div>
        )}
      </label>

      <label htmlFor="email">
        Email Address<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="email"
          type={'email'}
          name="email"
          required
          validation={{ ...register('email') }}
        />
        {errors?.email && (
          <div className={styles.error}>
            {errors?.email.message || 'Error!'}
          </div>
        )}
      </label>

      <Checkbox appearance="checkMark">
        Save this information for faster check-out next time
      </Checkbox>
    </form>
  );
};
