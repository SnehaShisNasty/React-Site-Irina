import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import { items } from './trustContent';
import styles from './trustBlobs.module.css';

const TrustBlobs = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h1 className={styles.title}>Why can you trust us ?</h1>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`${styles.listItem} ${
              index === items.length - 1 ? styles.lastItem : ''
            }`}
          >
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustBlobs;
