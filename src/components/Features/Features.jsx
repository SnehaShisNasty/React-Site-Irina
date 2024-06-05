import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import content from "./featuresContent";
import styles from "./features.module.css";

const Features = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  return (
    <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>Why {content.companyName} ?</h1>
      <ul>
        <li className={styles.item}>{content.reputation}</li>
        <li className={styles.item}>{content.packages}</li>
        <li className={styles.item}>{content.expertise}</li>
        <li className={styles.item}>{content.services}</li>
        <li className={styles.item}>{content.businessesType}</li>
        <li className={styles.item}>{content.belief}</li>
        <li className={styles.item}>{content.benefits}</li>
      </ul>
      <button className={styles.btn}>More info</button>
      <div>
        <ul className={styles.logoContainer}>
          <li>
            <svg>
            <use></use>
            </svg>
          </li>
          <li>
            <svg>
            <use></use>
            </svg>
          </li>
          <li>
            <svg>
            <use></use>
            </svg>
          </li>
          <li>
            <svg>
            <use></use>
            </svg>
          </li>
          <li>
            <svg>
            <use></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Features
