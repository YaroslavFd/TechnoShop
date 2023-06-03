import styles from './styles.module.scss';

export const PreviewProduct = () => {
  return (
    <>
      <div className={styles.imagesSmall}>
        <div>
          <img
            src="/img/productDetails/imgSmall/havic-small-1.jpg"
            alt="Havic HV G-92 Gamepad"
          />
        </div>
        <div>
          <img
            src="/img/productDetails/imgSmall/havic-small-2.jpg"
            alt="Havic HV G-92 Gamepad"
          />
        </div>
        <div>
          <img
            src="/img/productDetails/imgSmall/havic-small-3.jpg"
            alt="Havic HV G-92 Gamepad"
          />
        </div>
        <div>
          <img
            src="/img/productDetails/imgSmall/havic-small-4.jpg"
            alt="Havic HV G-92 Gamepad"
          />
        </div>
      </div>
      <div className={styles.imageBig}>
        <img
          src="/img/productDetails/havic-gamepad.png"
          alt="Havic HV G-92 Gamepad"
        />
      </div>
    </>
  );
};
