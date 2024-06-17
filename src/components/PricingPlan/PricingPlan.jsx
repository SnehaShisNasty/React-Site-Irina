import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import PriceCard from './Card/PriceCard';
import styles from "./pricingPlan.module.css"

const PricingPlan = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  const subPlans = [
    {
      title: "PLAN STANDARD",
      description: "Good for sole traders and new businesses.",
      price: "150.00",
      turnover: "up to £85k",
      multipleCurrencies: "not included",
      services: [
        "Payroll",
        "Pension",
        "VAT",
        "Confirmation Statement",
        "Annual Accounts",
        "Corporation Tax Return",
        "Self-assessment Tax Returns for Director",
      ],
      ribbonColor: "silver",
      ribbonText: "Best Value"
    },
    {
      title: "PLAN PREMIUM",
      description: "Good for growing small businesses.",
      price: "250.00",
      turnover: "£85k - £400k",
      multipleCurrencies: "included",
      services: [
        "Payroll",
        "Pension",
        "VAT",
        "Confirmation Statement",
        "Annual Accounts",
        "Corporation Tax Return",
        "Self-assessment Tax Returns for Director",
      ],
      ribbonColor: "gold",
      ribbonText: "Most Popular"
    },
  ]
  return (
    <div ref={containerRef} className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Flexible pricing plans for you and your buissenes</h1>
        <span className={styles.title_span}>Pricing that scales with your buissenes immediatly</span>
      </div>
      <div  className={styles.pricing_plan}>
        {subPlans.map((plan, index) => (
        <PriceCard
          key={index}
          title={plan.title}
          description={plan.description}
          turnover={plan.turnover}
          multipleCurrencies={plan.multipleCurrencies}
          price={plan.price}
          services={plan.services}
          ribbonColor={plan.ribbonColor}
          ribbonText={plan.ribbonText}
        />
      ))}
    </div>
    </div>

  )

}

export default PricingPlan
