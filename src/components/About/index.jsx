import Services from 'components/Services';
import Breadcrumbs from 'UI/Breadcrumbs';
import { Icon } from 'UI/Icon';

import styles from './styles.module.scss';

export const About = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', src: '/' },
          { name: 'About', src: '/about' },
        ]}
      />
      <div className={styles.story}>
        <div className={styles.storyBlock}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.storyText}>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className={styles.storyText}>
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics.
          </p>
        </div>
        <div className={styles.storyPhoto}>
          <img
            className={styles.storyImg}
            src="img/our-story-big.jpg"
            alt="our story"
          />
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successBlock}>
          <div className={styles.iconBox}>
            <div className={styles.iconBoxSmall}>
              <Icon className={styles.iconBoxImage} name="aboutHous" />
            </div>
          </div>
          <p className={styles.successCount}>10.5k </p>
          <p className={styles.successText}>Sallers active our site</p>
        </div>
        <div className={styles.successBlock}>
          <div className={styles.iconBox}>
            <div className={styles.iconBoxSmall}>
              <Icon className={styles.iconBoxImage} name="aboutDollar" />
            </div>
          </div>
          <p className={styles.successCount}>33k</p>
          <p className={styles.successText}>Mopnthly Produduct Sale</p>
        </div>

        <div className={styles.successBlock}>
          <div className={styles.iconBox}>
            <div className={styles.iconBoxSmall}>
              <Icon className={styles.iconBoxImage} name="aboutBundle" />
            </div>
          </div>
          <p className={styles.successCount}>45.5k</p>
          <p className={styles.successText}>Customer active in our site</p>
        </div>
        <div className={styles.successBlock}>
          <div className={styles.iconBox}>
            <div className={styles.iconBoxSmall}>
              <Icon className={styles.iconBoxImage} name="aboutBag" />
            </div>
          </div>
          <p className={styles.successCount}>25k</p>
          <p className={styles.successText}>Anual gross sale in our site</p>
        </div>
      </div>

      <div className={styles.team}>
        <div className={styles.teamBlock}>
          <img className={styles.teamImage} src="img/team-1.jpg" alt="team" />
          <h2 className={styles.teamName}>Tom Cruise</h2>
          <p className={styles.teamPost}>Founder & Chairman</p>
          <div className={styles.teamSocials}>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="twitterBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="instaramBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="linkedinBlack" />
            </a>
          </div>
        </div>

        <div className={styles.teamBlock}>
          <img className={styles.teamImage} src="img/team-2.jpg" alt="team" />
          <h2 className={styles.teamName}>Emma Watson</h2>
          <p className={styles.teamPost}>Managing Director</p>
          <div className={styles.teamSocials}>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="twitterBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="instaramBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="linkedinBlack" />
            </a>
          </div>
        </div>

        <div className={styles.teamBlock}>
          <img className={styles.teamImage} src="img/team-3.jpg" alt="team" />
          <h2 className={styles.teamName}>Will Smith</h2>
          <p className={styles.teamPost}>Product Designer</p>
          <div className={styles.teamSocials}>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="twitterBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="instaramBlack" />
            </a>
            <a className={styles.teamLink} href="/#">
              <Icon className={styles.teamIcon} name="linkedinBlack" />
            </a>
          </div>
        </div>

        <div className={styles.dots}>
          <span className={styles.dotsStyle}></span>
          <span className={styles.dotsStyle}></span>
          <span className={styles.dotsStyle + ' ' + styles.active}></span>
          <span className={styles.dotsStyle}></span>
          <span className={styles.dotsStyle}></span>
        </div>
      </div>
      <Services />
    </>
  );
};
