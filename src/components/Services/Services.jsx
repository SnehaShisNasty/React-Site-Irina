
import { items } from '../../data/servies'
import styles from './services.module.css'


const Services = () => {

  const corporateServices = items.filter(item => item.type === 'corporate')
  const individualServices = items.filter(item => item.type === 'individual')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subTitle}>Corporate services:</p>
      <ul>
        {corporateServices.map(item => (
          <li key={item.id} className={styles.item}>
            <a href={item.address} className={styles.link}>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.subTitle}>Individual services:</p>
      <ul>
        {individualServices.map(item => (
          <li key={item.id} className={styles.item}>
            <a href={item.address} className={styles.link}>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
