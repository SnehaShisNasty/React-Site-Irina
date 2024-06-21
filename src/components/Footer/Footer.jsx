import { NavLink } from 'react-router-dom';
import info from '../../data/contactInfo';
import sprite from '../../img/symbol-defs.svg';
import styles from './footer.module.css';

const Footer = () => {
  const openMap = address => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>Additional</h1>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.link}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              Privacy Policy and Cookies
            </NavLink>
          </li>
        </ul>
        <form className={styles.inputContainer}>
          <input
            className={styles.inputForm}
            type="email"
            placeholder="example@mail.com"
          />
          <button>Join us</button>
        </form>
      </div>
      <div className={styles.column}>
        <h1>Services</h1>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.link}>
              Business Consulting
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              Company Formation Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              Full Accounting And Tax Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              Self-employment registration (UTR)
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.link}>
              Self-Assessment Tax Return
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h1>Questions</h1>
        <ul className={styles.list}>
          <li>
            <p className={styles.link} onClick={() => openMap(info.location)}>
              {info.location}
            </p>
          </li>
          <li>
            <a href={`tel:${info.tel}`} className={styles.link}>
              {info.tel}
            </a>
          </li>
          <li>
            <a href={`mailto:${info.email}`} className={styles.link}>
              {info.email}
            </a>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a href="/" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#instagram`} className={styles.icon} />
              </svg>
            </a>
          </li>
          <li>
            <a href="/" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#whatsapp`} className={styles.icon} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
