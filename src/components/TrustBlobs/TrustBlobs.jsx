import { items } from './trustContent'
import styles from "./trustBlobs.module.css"

const TrustBlobs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Why can you trust us ?</h1>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            {item.text}
          </li>
        ))}
      </ul>
      <button className={styles.btn}>Check why you can rely on us</button>
    </div>
  )
}

export default TrustBlobs
