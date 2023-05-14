import { Button } from 'UI/Button';
import Input from 'UI/Input';

import styles from './styles.module.scss';

const AccountForm = () => {
  return (
    <form className={styles.profile}>
      <h3 className={styles.profileTitle}>Edit Your Profile</h3>
      <div className={styles.userdata}>
        <label className={styles.userdataLabel} htmlFor="firstName">
          First Name
          <Input
            inputClass={'input__grey'}
            id="firstName"
            type={'text'}
            name="text"
            placeholder={'Md'}
            required
          />
        </label>
        <label className={styles.userdataLabel} htmlFor="lastName">
          Last Name
          <Input
            inputClass={'input__grey'}
            id="lastName"
            type={'text'}
            name="text"
            placeholder={'Rimel'}
            required
          />
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
          />
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
          />
        </label>
      </div>
      <div className={styles.password}>
        <h3 className={styles.passwordTitle}>Password Changes</h3>
        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="password"
          placeholder={'Current Password'}
          required
        />
        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="password"
          placeholder={'New Password'}
          required
        />

        <Input
          inputClass={'input__grey'}
          type={'password'}
          name="password"
          placeholder={'Confirm New Password'}
          required
        />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.btnCancel} appearance="icon">
          Cancel
        </Button>
        <Button className={styles.btnSave}>Save Changes</Button>
      </div>
    </form>
  );
};

export default AccountForm;
