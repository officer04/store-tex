import { Link } from 'react-router-dom';

import vk from './../../images/vk.svg';
import telegram from './../../images/telega.svg';
import youtube from './../../images/youtube.svg';

import { ROUTES } from './../../utils/routes';

import styles from './../../style/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        Copy Star
      </Link>

      <nav className={styles.navRight}>
        <ul>
          <li>
            <img src={telegram} alt="telegram" />
          </li>
          <li>
            <img src={vk} alt="vk" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
