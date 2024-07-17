import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './serviceTemplate.module.css';

const ServiceTemplate = ({ service }) => {
  const containerRef = useRef();
  const { t } = useTranslation();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [currentService, setCurrentService] = useState(service);

  useEffect(() => {
    setIsFadingOut(true);
    const timer = setTimeout(() => {
      setCurrentService(service);
      setIsFadingOut(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [service]);

return (
    <div
      key={currentService.id}
      ref={containerRef}
      className={`${styles.serviceTemplate} ${isFadingOut ? styles.fadeOut : styles.fadeIn}`}
    >
      <h1 className={styles.title}>{t(`services.${currentService.name}.name`)}</h1>
      <div className={styles.description}>
        <h2 className={styles.forWhom}>{t('services.descriptionTitle')}</h2>
        <ul className={styles.descriptionList}>
          {Object.keys(currentService.description).map((key) => (
            <li key={key} className={styles.descriptionItem}>{t(`services.${currentService.name}.description.${key}`)}</li>
          ))}
        </ul>
      </div>
      {currentService.howItWorks && (
        <div className={styles.howItWorks}>
          <h2 className={styles.howItWorksTitle}>{t('services.howItWorksTitle')}</h2>
          <ul className={styles.howItWorksList}>
            {Object.keys(currentService.howItWorks).map((key) => {
              const translatedSteps = t(`services.${currentService.name}.howItWorks.${key}`, { returnObjects: true });
              return (
                <li key={key} className={styles.howItWorksItem}>
                  {Array.isArray(translatedSteps) ? (
                    translatedSteps.map((step, index) => (
                      <p key={index}>{step}</p>
                    ))
                  ) : (
                    <span>{translatedSteps}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <p className={styles.price}>{t('services.price')}: {currentService.price}</p>
      {/* <svg className={styles.iconSvg}>
        <use xlinkHref={`#${currentService.icon}`} className={styles.icon} />
      </svg> */}
    </div>
  );
};

export default ServiceTemplate;
