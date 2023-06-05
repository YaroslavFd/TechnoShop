import { Checkbox } from 'UI/Checkbox';
import Input from 'UI/Input';

import styles from './styles.module.scss';

export const Form = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="firstName">
        First Name<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="firstName"
          type={'text'}
          name="FirstName"
          required
        />
      </label>

      <label htmlFor="companyName">
        Company Name
        <Input
          inputClass={'input__grey'}
          id="companyName"
          type={'text'}
          name="companyName"
        />
      </label>

      <label htmlFor="address">
        Street Address<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="address"
          type={'text'}
          name="streetAddress"
          required
        />
      </label>

      <label htmlFor="apartment">
        Apartment, floor, etc. (optional)
        <Input
          inputClass={'input__grey'}
          id="apartment"
          type={'text'}
          name="apartment"
        />
      </label>

      <label htmlFor="city">
        Town/City<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="city"
          type={'text'}
          name="city"
          required
        />
      </label>

      <label htmlFor="tel">
        Phone Number<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="tel"
          type={'tel'}
          name="tel"
          required
        />
      </label>

      <label htmlFor="email">
        Email Address<span>*</span>
        <Input
          inputClass={'input__grey'}
          id="email"
          type={'email'}
          name="email"
          required
        />
      </label>

      <Checkbox appearance="checkMark">
        Save this information for faster check-out next time
      </Checkbox>
    </form>
  );
};
