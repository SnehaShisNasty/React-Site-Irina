import { NavLink } from 'react-router-dom';
import info from '../../data/contactInfo';
import { useTranslation } from 'react-i18next';
import sprite from '../../img/symbol-defs.svg';
import styles from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation()

  const openMap = address => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, '_blank');
  };

  const additionalLinks = [
    { path: '/', label: t('footer.contactUs') },
    { path: '/', label: t('footer.aboutUs') }
  ];

  const servicesLinks = [
    { path: '/', label: t('footer.businessConsulting') },
    { path: '/', label: t('footer.companyFormation') },
    { path: '/', label: t('footer.accountingSupport') },
    { path: '/', label: t('footer.selfEmployment') },
    { path: '/', label: t('footer.taxReturn') }
  ];

  const contactInfo = [
    { type: 'location', value: info.location, action: () => openMap(info.location) },
    { type: 'tel', value: info.tel, action: () => `tel:${info.tel}` },
    { type: 'email', value: info.email, action: () => `mailto:${info.email}` }
  ];

  const socialLinks = t('footer.socialLinks', { returnObjects: true });


  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>{t('footer.additional')}</h1>
        <ul className={styles.list}>
          {additionalLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className={styles.link}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h1>{t('footer.services')}</h1>
        <ul className={styles.list}>
          {servicesLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className={styles.link}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h1>{t('footer.questions')}</h1>
        <ul className={styles.list}>
          {contactInfo.map((info, index) => (
            <li key={index}>
              {info.type === 'location' ? (
                <p className={styles.link} onClick={info.action}>
                  {info.value}
                </p>
              ) : (
                <a href={info.action()} className={styles.link}>
                  {info.value}
                </a>
              )}
            </li>
          ))}
        </ul>
        <ul className={styles.social}>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href="/" className={styles.linkSocial}>
                <svg className={styles.iconSvg}>
                  <use href={`${sprite}#${link.icon}`} className={styles.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
