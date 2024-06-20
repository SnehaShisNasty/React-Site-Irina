import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { items } from '../../data/servies';
import sprite from '../../img/symbol-defs-services.svg'
import styles from './services.module.css';

const Services = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  const renderServiceCard = (item) => (
    <div key={item.id} className={styles.card}>
      <svg  className={styles.iconSvg}>
        <use xlinkHref={`${sprite}#${item.icon}`} className={styles.icon}/>
      </svg>
      <h3 className={styles.cardTitle}>{item.name}</h3>
      <a href={item.address} className={styles.cardLink}>Learn More</a>
    </div>
  );

  return (
    <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subTitle}>Corporate Services</p>
      <div className={styles.servicesFlex}>
        {corporateServices.slice(0, 3).map(renderServiceCard)}
      </div>
      <div className={`${styles.servicesFlex} ${styles.secondRow}`}>
        {corporateServices.slice(3).map(renderServiceCard)}
      </div>
      <p className={styles.subTitle}>Individual Services</p>
      <div className={styles.servicesFlex}>
        {individualServices.slice(0, 3).map(renderServiceCard)}
      </div>
      <div className={`${styles.servicesFlex} ${styles.secondRow}`}>
        {individualServices.slice(3).map(renderServiceCard)}
      </div>
    </div>
  );
}

export default Services;
