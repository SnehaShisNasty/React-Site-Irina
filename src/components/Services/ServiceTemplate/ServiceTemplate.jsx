import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useVisibility from "customeHooks/useVisivility";
import styles from './serviceTemplate.module.css';

const ServiceTemplate = ({ service }) => {
  const containerRef = useRef();
  const isVisible = useVisibility(containerRef);
  const { t } = useTranslation();

  return (
    <div key={service.id} ref={containerRef} className={`${styles.serviceTemplate} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>{t(`services.${service.name}.name`)}</h1>
      <div className={styles.description}>
        <h2 className={styles.forWhom}>{t('services.descriptionTitle')}</h2>
          <ul className={styles.descriptionList}>
            {Object.keys(service.description).map((key) => (
              <li key={key} styles={styles.descriptionItem}>{t(`services.${service.name}.description.${key}`)}</li>
            ))}
          </ul>
      </div>
       {service.howItWorks && (
        <div className={styles.howItWorks}>
          <h2 className={styles.howItWorksTitle}>{t('services.howItWorksTitle')}</h2>
            <ul className={styles.howItWorksList}>
              {Object.keys(service.howItWorks).map((key) => (
                <li key={key} styles={styles.howItWorksItem}>{t(`services.${service.name}.howItWorks.${key}`)}</li>
              ))}
              </ul>
        </div>
      )}
      {/* <img src={service.img} alt={t(`services.${service.name}.name`)} className={styles.image} /> */}
      <p className={styles.price}>{t('services.price')}: {service.price}</p>
      <svg className={styles.iconSvg}>
        <use xlinkHref={`#${service.icon}`} className={styles.icon} />
      </svg>
    </div>
  );
};

export default ServiceTemplate;
