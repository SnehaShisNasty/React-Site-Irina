
import { items } from '../../data/servies'
//import styles from './services.module.css'


const Services = () => {

  const corporateServices = items.filter(item => item.type === 'corporate')
  const individualServices = items.filter(item => item.type === 'individual')

  return(
    <div>
      <h1>Services</h1>
      <p>Corporate services:</p>
      <ul>
        {corporateServices.map(item => (
          <li key={item.id}>
            <a href="">{item.name} &#62;</a>
          </li>
        ))}
      </ul>
      <p>Individual services:</p>
      <ul>
        {individualServices.map(item => (
          <li key={item.id}>
            <a href="">{item.name} &#62;</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
