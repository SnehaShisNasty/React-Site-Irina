import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useVisibility from "customeHooks/useVisivility";
import styles from './serviceTemplate.module.css'

const ServiceTemplate = ({ service }) => {
  const containerRef = useRef()
  const isVisible = useVisibility(containerRef);
  const { t } = useTranslation()

  return (
    <div key={service.id} ref={containerRef} className={`${styles.serviceTemplate} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>{t(`services.${service.name}`)}</h1>
      <div className={styles.description}>
        <h2 className={styles.forWhom}>{t('services.descriptionTitle')}</h2>
        {Object.values(service.description).map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className={styles.forWhom}>
        <h2>{t('services.forWhomTitle')}</h2>
        {Object.values(service.forWhom).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <img src={service.img} alt={t(`services.${service.name}`)} className={styles.image} />
      <p className={styles.price}>{t('services.price')}: {service.price}</p>
      <svg className={styles.iconSvg}>
        <use xlinkHref={`#${service.icon}`} className={styles.icon} />
      </svg>
    </div>
  )
}

export default ServiceTemplate
