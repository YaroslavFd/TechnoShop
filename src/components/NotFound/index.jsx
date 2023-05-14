import { useNavigate } from 'react-router-dom';

import Breadcrumbs from 'UI/Breadcrumbs';
import { Button } from 'UI/Button';

import styles from './styles.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', src: '/' },
          { name: '404 Error', src: '/404' },
        ]}
      />

      <div className={styles.box}>
        <h1 className={styles.title}>404 Not Found</h1>
        <p className={styles.text}>
          Your visited page not found. You may go home page.
        </p>
        <Button className={styles.btn} onClick={handleClick}>
          Back to home page
        </Button>
      </div>
    </>
  );
};

export default NotFound;
