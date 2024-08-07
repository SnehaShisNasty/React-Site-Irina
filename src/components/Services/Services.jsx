import { useRef, useEffect } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { items } from '../../data/services';
import { useTranslation } from 'react-i18next';
import sprite from '../../img/symbol-defs-services.svg';
import styles from './services.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);
  const { t } = useTranslation();
  const location = useLocation()

  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const renderServiceCard = item => (
    <div key={item.id} className={styles.card}>
      <svg className={styles.iconSvg}>
        <use xlinkHref={`${sprite}#${item.icon}`} className={styles.icon} />
      </svg>
      <h3 className={styles.cardTitle}>{t(`services.${item.name}.name`)}</h3>
      <NavLink to={`service/${item.address}`} className={styles.cardLink}>
        {t('services.learnMore')}
      </NavLink>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>{t('services.title')}</h1>
      <p className={styles.subTitle} id='corporate'>{t('header.navMenu.corporateServices')}</p>
      <div className={styles.servicesFlex}>
        {corporateServices.slice(0, 3).map(renderServiceCard)}
      </div>
      <div className={`${styles.servicesFlex} ${styles.secondRow}`}>
        {corporateServices.slice(3).map(renderServiceCard)}
      </div>
      <p className={styles.subTitle} id='individual'>
        {t('header.navMenu.individualServices')}
      </p>
      <div className={styles.servicesFlex}>
        {individualServices.slice(0, 3).map(renderServiceCard)}
      </div>
      <div className={`${styles.servicesFlex} ${styles.secondRow}`}>
        {individualServices.slice(3).map(renderServiceCard)}
      </div>
    </div>
  );
};
export default Services;
