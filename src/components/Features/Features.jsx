import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { useTranslation } from 'react-i18next';
// import content from "./featuresContent";
import images from '../../img/brand/images';
import styles from './features.module.css';

const Features = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  const contentKeys = [
    'reputation',
    'packages',
    'expertise',
    'services',
    'businessesType',
    'belief',
    'benefits',
  ];

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>{t('features.title')}</h1>
      <ul>
        {contentKeys.map(key => (
          <li key={key} className={styles.item}>
            {t(`features.${key}`)}
          </li>
        ))}
      </ul>
      <button className={styles.btn}>{t('features.moreInfo')}</button>
      <div>
        <ul className={styles.logoContainer}>
          {images.map((image, index) => (
            <li key={index} className={styles.logo_item}>
              <img src={image.src} alt={image.alt} className={styles.logoImg} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
