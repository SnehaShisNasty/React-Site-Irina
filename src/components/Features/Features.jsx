import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import content from "./featuresContent";
import images from "../../img/brand/images"
import styles from "./features.module.css";

const Features = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

   const contentKeys = [
    'reputation',
    'packages',
    'expertise',
    'services',
    'businessesType',
    'belief',
    'benefits'
  ];

  return (
    <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>Why {content.companyName} ?</h1>
      <ul>
        {contentKeys.map((key, index)=>(
        <li key={key} className={styles.item}>
            {index + 1}. {content[key]}
        </li>
        ))}
      </ul>
      <button className={styles.btn}>More info</button>
      <div>
        <ul className={styles.logoContainer}>
          {images.map((image, index) => (
            <li key={index}>
                <img src={image.src} alt={image.alt} className={styles.logoImg} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Features
