import { useState, useEffect } from "react"
import content from "./featuresContent"
import styles from "./features.module.css"

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(`.${styles.container}`);
      const top = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight && top > -container.clientHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
     <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
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
      <div className={styles.logoContainer}>
        <p>image</p>
        <p>image</p>
        <p>image</p>
        <p>image</p>
      </div>
    </div>
  )
}

export default Features
