import { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from '../../data/services';
import { useTranslation } from 'react-i18next';
import sprite from '../../img/symbol-defs-services.svg';
import styles from './services.module.css';

const Services = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const { type } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const services = items.filter(item => item.type === type);

  const renderServiceCard = (item) => (
    <div key={item.id} className={styles.card}>
      <svg className={styles.iconSvg}>
        <use xlinkHref={`${sprite}#${item.icon}`} className={styles.icon}/>
      </svg>
      <h3 className={styles.cardTitle}>{t(`services.${item.name}`)}</h3>
      <Link to={`/service/${item.address}`} className={styles.cardLink}>{t('services.learMore')}</Link>
    </div>
  );

 useEffect(() => {
    setIsVisible(false);
    const timeoutId = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeoutId);
  }, [type]);

  return (
    <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`} key={type}>
      <h1 className={styles.title}>{t('services.title')}</h1>
      <div className={styles.servicesFlex}>
        {services.map(renderServiceCard)}
      </div>
    </div>
  );
}

export default Services;
