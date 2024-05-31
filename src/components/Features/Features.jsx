import content from "./featuresContent"
import styles from "./features.module.css"

const Features = () => {
  return (
    <div>
      <h1>Why {content.companyName} ?</h1>
      <ul>
        <li>{content.reputation}</li>
        <li>{content.packages}</li>
        <li>{content.expertise}</li>
        <li>{content.services}</li>
        <li>{content.businessesType}</li>
        <li>{content.belief}</li>
        <li>{content.benefits}</li>
      </ul>
      <button>More info</button>
      <div>
        <p>image</p>
        <p>image</p>
        <p>image</p>
        <p>image</p>
      </div>
    </div>
  )
}

export default Features
