import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container footer__container">
        <div className="footer__block">
          <div className="footer__block-subscribe">
            <h2 className="footer__name">Exclusive</h2>
            <h3 className="footer__title">Subscribe</h3>
            <ul className="footer__list">
              <li className="footer__item">Get 10% off your first order</li>

              <li className="footer__item footer__inputs">
                <input
                  className="footer__input-email"
                  type="email"
                  placeholder="Enter your email"
                />
                <input className="footer__input-image" readOnly />
              </li>
            </ul>
          </div>

          <div className="footer__support">
            <h3 className="footer__title">Support</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <address className="footer__support-address">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </address>
              </li>
              <li className="footer__item">
                <a
                  className="footer__support-email footer__item-link"
                  href="mailto:exclusive@gmail.com"
                >
                  exclusive@gmail.com
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__support-phone footer__item-link"
                  href="tel:+88015888889999"
                >
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__account">
            <h3 className="footer__title">Account</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  My Account
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Login / Register
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Cart
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Wishlist
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__useful">
            <h3 className="footer__title">Quick Link</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Terms Of Use
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__apps">
            <h3 className="footer__title">Download App</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <p className="footer__apps-text">
                  Save $3 with App New User Only
                </p>
                <div className="footer__item-box">
                  <img
                    className="footer__img-qrcode"
                    src="/img/Qr-Code.jpg"
                    alt="QR-code"
                  />
                  <div className="footer__item-apps">
                    <a href="#">
                      <img src="/img/GooglePlay.jpg" alt="GooglePlay" />
                    </a>
                    <a href="#">
                      <img src="/img/AppStore.jpg" alt="AppStore" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="footer__item footer__icons">
                <a href="#">
                  <img
                    className="footer__icon-facebook"
                    src="/img/icons/facebook.svg"
                    alt="facebook"
                  />
                </a>
                <a href="#">
                  <img
                    className="footer__icon-twitter"
                    src="/img/icons/twitter.svg"
                    alt="twitter"
                  />
                </a>
                <a href="#">
                  <img
                    className="footer__icon-instagram"
                    src="/img/icons/instaram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <img
                    className="footer__icon-linkedin"
                    src="/img/icons/linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
