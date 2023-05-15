import Account from 'components/Account';
import { Section } from 'containers/Section';

const AccountPage = () => {
  return (
    <Section className="account" classNameContainer={'account-container'}>
      <Account />
    </Section>
  );
};

export default AccountPage;
