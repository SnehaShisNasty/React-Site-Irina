import { useTranslation } from 'react-i18next';
import styles from './PriceCard.module.css';

const PriceCard = ({
  title,
  description,
  price,
  turnover,
  multipleCurrencies,
  services,
  ribbonColor,
  ribbonText,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.price_card}>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <p className={styles.card_price}>
        {price}£/{t('pricingPlan.priceCard.mth')}
      </p>
      <p className={styles.card_turnover}>
        {t('pricingPlan.priceCard.turnover')}
        {turnover}
      </p>
      <p className={styles.card_currencies}>
        {t('pricingPlan.priceCard.currencies')}
        {multipleCurrencies}
      </p>
      <h3 className={styles.services_title}>
        {t('pricingPlan.priceCard.services')}
      </h3>
      <ul className={styles.card_list}>
        {services.map((service, index) => (
          <li key={index} className={styles.list_item}>
            {/* <svg className={styles.iconSvg}>
              <use href={`${sprite}#checkbox`} className={styles.icon}/>
            </svg> */}
            {service}
          </li>
        ))}
      </ul>
      <button className={styles.sub_btn}>
        {t('pricingPlan.priceCard.subscribe')}
      </button>
      {ribbonText && (
        <div className={styles.ribbon} style={{ backgroundColor: ribbonColor }}>
          <span className={styles.ribbon_text}>{ribbonText}</span>
        </div>
      )}
    </div>
  );
};

export default PriceCard;
