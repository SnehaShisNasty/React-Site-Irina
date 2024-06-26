import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { items } from '../../data/servies';
import { useTranslation } from 'react-i18next';
import sprite from '../../img/symbol-defs-services.svg';
import styles from './services.module.css';

const Services = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);
  const { t } = useTranslation();

  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  const renderServiceCard = item => (
    <div key={item.id} className={styles.card}>
      <svg className={styles.iconSvg}>
        <use xlinkHref={`${sprite}#${item.icon}`} className={styles.icon} />
      </svg>
      <h3 className={styles.cardTitle}>{t(`services.${item.name}`)}</h3>
      <a href={item.address} className={styles.cardLink}>
        {t('services.learnMore')}
      </a>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>{t('services.title')}</h1>
      <p className={styles.subTitle}>{t('header.navMenu.corporateServices')}</p>
      <div className={styles.servicesFlex}>
        {corporateServices.slice(0, 3).map(renderServiceCard)}
      </div>
      <div className={`${styles.servicesFlex} ${styles.secondRow}`}>
        {corporateServices.slice(3).map(renderServiceCard)}
      </div>
      <p className={styles.subTitle}>
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
