import CartTotal from 'components/Cart/CartTotal';
import { useSelector } from 'react-redux';
import { Button } from 'UI/Button';
import { RadioBtn } from 'UI/RadioBtn';
import { formatter } from 'utils/currencyFormatter';

import styles from './styles.module.scss';

export const Order = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={styles.cart}>
      {products.length ? (
        products.map((product) => {
          return (
            <div className={styles.cartProducts} key={product.id}>
              <p>
                <img src={product.img} alt={product.title} />
                <span>{product.title}</span>
              </p>
              <p>{formatter.format(product.totalPrice)}</p>
            </div>
          );
        })
      ) : (
        <h2>Товаров нет</h2>
      )}
      <CartTotal
        parentClass={styles.orderClass}
        products={products}
        title=""
        isBtn={false}
      />
      <div className={styles.radioBtns}>
        <div className={styles.payBank}>
          <RadioBtn name="checkout__pay">Bank</RadioBtn>
          <div className={styles.cards}>
            <img
              className="checkout__pay-img"
              src="img/bank-bkash.svg"
              alt="bank bkash"
            />
            <img
              className="checkout__pay-img"
              src="img/bank-visa.svg"
              alt="bank visa"
            />
            <img
              className="checkout__pay-img"
              src="img/bank-mastercard.svg"
              alt="bank mastercard"
            />
            <img
              className="checkout__pay-img"
              src="img/bank-nagad.svg"
              alt="bank nagad"
            />
          </div>
        </div>
        <div className={styles.payCash}>
          <RadioBtn name="checkout__pay">Cash on delivery</RadioBtn>
        </div>
      </div>
      <Button className={styles.btn}>Place Order</Button>
    </div>
  );
};
