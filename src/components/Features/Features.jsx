import { useRef, useState } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { useTranslation } from 'react-i18next';
import {scroller} from 'react-scroll';
// import content from "./featuresContent";
import images from '../../img/brand/images';
import styles from './features.module.css';

const Features = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);
  const [showMore, setShowMore] = useState(false)

  const contentKeys = [
    'reputation',
    'packages',
    'expertise',
    'services',
    'businessesType',
    'belief',
    'benefits',
  ];

  const handleToggleShowMore = () => {
    if (showMore) {
      scroller.scrollTo('features-container', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100
      });
    }
    setShowMore(prevShowMore => !prevShowMore);
  };

  return (
    <div
      id="features-container"
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>{t('features.title')}</h1>
      <ul className={`${styles.list} ${showMore ? styles.showMore : ''}`}>
        {contentKeys.map(key => (
          <li key={key} className={styles.item}>
            {t(`features.${key}`)}
          </li>
        ))}
      </ul>
      <button className={styles.btn} onClick={handleToggleShowMore}>
        {showMore ? t('features.showLess') : t('features.showMore')}
      </button>
      <h2 className={styles.accreditation}>{t('features.accreditationTitle')}</h2>
        <p className={styles.accreditationText}>{t('features.accreditationText')}</p>
      
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
