import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import info from '../../data/contactInfo';
import { items } from '../../data/services';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import sprite from '../../img/symbol-defs.svg';
import styles from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const openMap = address => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  };

  const additionalLinks = [
    { path: '/', label: t('footer.homePage'), anchor: 'homePage' },
    { path: '/', label: t('footer.individualServices'), anchor: 'individual' },
    { path: '/', label: t('footer.corporateServices'), anchor: 'corporate' },
    { path: '/contact-us', label: t('footer.contactUs') },
    { path: '/about-us', label: t('footer.aboutUs') },
  ];

  const servicesNames = [
    'businessConsulting',
    'companyFormationService',
    'fullAccountingAndTaxSupport',
    'selfEmploymentRegistrationUTR',
    'selfAssessmentTaxReturn',
  ];

  const servicesLinks = servicesNames.map(name => {
    const service = items.find(item => item.name === name);
    return service ? { path: `service/${service.address}`, label: t(`services.${service.name}.name`) } : null;
  }).filter(link => link !== null);

  const contactInfo = [
    {
      type: 'location',
      value: info.location,
      action: () => openMap(info.location),
    },
    { type: 'tel', value: info.tel, action: () => `tel:${info.tel}` },
    { type: 'email', value: info.email, action: () => `mailto:${info.email}` },
  ];

  const socialLinks = t('footer.socialLinks', { returnObjects: true });

  const handleLinkClick = (path, anchor) => (event) => {
    event.preventDefault();
    if (window.location.pathname === '/') {
      scroller.scrollTo(anchor, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -0
      });
    } else {
      navigate(path, { state: { anchor } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.anchor) {
      scroller.scrollTo(location.state.anchor, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -150
      });
    }
  }, [location]);

  const renderLinks = (links) => (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li key={index}>
          {link.anchor ? (
            <a href={link.path} className={styles.link} onClick={handleLinkClick(link.path, link.anchor)}>
              {link.label}
            </a>
          ) : (
            <NavLink to={link.path} className={styles.link}>
              {link.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>{t('footer.additional')}</h1>
        {renderLinks(additionalLinks)}
      </div>
      <div className={styles.column}>
        <h1>{t('footer.services')}</h1>
        {renderLinks(servicesLinks)}
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
              <a href={link.url} className={styles.linkSocial}>
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
