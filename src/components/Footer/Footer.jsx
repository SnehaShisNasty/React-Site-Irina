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
            <a href="#" className={styles.link}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Privacy Policy and Cookies
            </a>
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
            <a href="#" className={styles.link}>
              Business Consulting
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Company Formation Service
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Full Accounting And Tax Support
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Self-employment registration (UTR)
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Self-Assessment Tax Return
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h1>Questions</h1>
        <ul className={styles.list}>
          <li>
            <a
              href="#"
              className={styles.link}
              onClick={() => openMap(info.location)}
            >
              {info.location}
            </a>
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
            <a href="#" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#instagram`} className={styles.icon} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#whatsapp`} className={styles.icon} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#youtube`} className={styles.icon} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className={styles.linkSocial}>
              <svg className={styles.iconSvg}>
                <use href={`${sprite}#twitter`} className={styles.icon} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
