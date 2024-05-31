import { items } from './trustContent'
import styles from "./trustBlobs.module.css"

const TrustBlobs = () => {
  return (
    <div>
      <h1>Why can you trust us ?</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.id} {item.text}
          </li>
        ))}
      </ul>
      <button>Check why you can rely on us</button>
    </div>
  )
}

export default TrustBlobs
