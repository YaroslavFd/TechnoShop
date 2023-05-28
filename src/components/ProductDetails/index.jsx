import { PRODUCTS } from 'data/products';
import { useParams } from 'react-router-dom';
import Breadcrumbs from 'UI/Breadcrumbs';

import { Details } from './Details';
import { PreviewProduct } from './PreviewProduct';

import styles from './styles.module.scss';

export const ProductDetails = () => {
  const { id } = useParams();
  const { title } = PRODUCTS.find((p) => Number(p.id) === Number(id));
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Account', src: '/account' },
          { name: 'Gaming', src: '/' },
          { name: `${title}`, src: `/product/${id}` },
        ]}
      />

      <div className={styles.block}>
        <PreviewProduct />
        <Details title={title} />
      </div>
    </>
  );
};
