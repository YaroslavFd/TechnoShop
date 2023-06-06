import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'UI/Button';
import Input from 'UI/Input';

import schemaValidation from 'utils/schemaValidation';

import styles from './styles.module.scss';

const AccountForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.profile} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.profileTitle}>Edit Your Profile</h3>
      <div className={styles.userdata}>
        <label className={styles.userdataLabel} htmlFor="firstName">
          First Name
          <Input
            inputClass={'input__grey'}
            id="firstName"
            type={'text'}
            name="firstName"
            placeholder={'Md'}
            required
            validation={{ ...register('firstName') }}
          />
          {errors?.firstName && (
            <div className={styles.error}>
              {errors?.firstName.message || 'Error!'}
            </div>
          )}
        </label>
        <label className={styles.userdataLabel} htmlFor="lastName">
          Last Name
          <Input
            inputClass={'input__grey'}
            id="lastName"
            type={'text'}
            name="lastName"
            placeholder={'Rimel'}
            required
            validation={{ ...register('lastName') }}
          />
          {errors?.lastName && (
            <div className={styles.error}>
              {errors?.lastName.message || 'Error!'}
            </div>
          )}
        </label>
        <label className={styles.userdataLabel} htmlFor="email">
          Email
          <Input
            inputClass={'input__grey'}
            id="email"
            type={'email'}
            name="email"
            placeholder={'rimel1111@gmail.com'}
            required
            validation={{ ...register('email') }}
          />
          {errors?.email && (
            <div className={styles.error}>
              {errors?.email.message || 'Error!'}
            </div>
          )}
        </label>
        <label className={styles.userdataLabel} htmlFor="address">
          Address
          <Input
            inputClass={'input__grey'}
            id="address"
            type={'text'}
            name="text"
            placeholder={'Kingston, 5236, United State'}
            required
            validation={{ ...register('address') }}
          />
          {errors?.address && (
            <div className={styles.error}>
              {errors?.address.message || 'Error!'}
            </div>
          )}
        </label>
      </div>
      <div className={styles.password}>
        <h3 className={styles.passwordTitle}>Password Changes</h3>
        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="password"
          placeholder={'Current Password'}
          validation={{ ...register('password') }}
        />
        {errors?.password && (
          <div className={styles.error}>
            {errors?.password.message || 'Error!'}
          </div>
        )}
        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="newPassword"
          placeholder={'New Password'}
          validation={{ ...register('newPassword') }}
        />
        {errors?.newPassword && (
          <div className={styles.error}>
            {errors?.newPassword.message || 'Error!'}
          </div>
        )}

        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="confirmNewPassword"
          placeholder={'Confirm New Password'}
        />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.btnCancel} appearance="icon">
          Cancel
        </Button>
        <Button className={styles.btnSave} type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
