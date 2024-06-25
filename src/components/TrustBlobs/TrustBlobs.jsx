import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
// import { items } from './trustContent';
import { useTranslation } from 'react-i18next';
import styles from './trustBlobs.module.css';

const TrustBlobs = () => {
  const { t } = useTranslation()
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  const items = t('trustBlobs.items', { returnObjects: true });

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>{t('trustBlobs.title')}</h1>
      <ul className={styles.list}>
        {items.map((text, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${
              index === items.length - 1 ? styles.lastItem : ''
            }`}
          >
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustBlobs;
