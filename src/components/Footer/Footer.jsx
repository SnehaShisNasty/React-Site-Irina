import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import contactInfo from 'helpers/contactInfoArray';
import { items } from '../../data/services';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
// import sprite from '../../img/symbol-defs.svg';
import styles from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

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

  // const socialLinks = t('footer.socialLinks', { returnObjects: true });

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
        <div className={styles.socialDiv}>
          <SocialLinks/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
