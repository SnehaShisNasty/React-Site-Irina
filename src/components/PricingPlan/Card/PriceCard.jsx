import sprite from "../../../img/symbol-defs.svg"
import styles from "./PriceCard.module.css"

const PriceCard = ({ title, price, features, ribbonColor, ribbonText }) => {
  return (
    <div className={styles.price_card}>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_price}>{price}$/mth</p>
      <p className={styles.card_bill}>Billed annualy</p>
      <ul className={styles.card_list}>
        {features.map((feature, index) => (
          <li
            key={index}
            className={styles.list_item}>
            <svg className={styles.iconSvg}>
              <use href={`${sprite}#checkbox`} className={styles.icon}/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={styles.sub_btn}>Subscribe</button>
      {ribbonText && (
        <div className={styles.ribbon} style={{ backgroundColor: ribbonColor }}>
          <span className={styles.ribbon_text}>{ribbonText}</span>
        </div>
      )}
    </div>
  )
}

export default PriceCard
