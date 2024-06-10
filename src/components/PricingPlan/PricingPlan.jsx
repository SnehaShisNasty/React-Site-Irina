import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import PriceCard from "./Card/PriceCard"
import styles from "./pricingPlan.module.css"

const PricingPlan = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);

  const subPlans = [
    {
      title: "Basic",
      price: "50",
      features: ["Complete documentation", "Working materiasl in Figma", "100GB cloud storage", "500 team members"],
      ribbonColor: "blue",
      ribbonText: "Best Value"
    },
    {
      title: "Plus",
      price: "99",
      features: ["Complete documentation","Working materiasl in Figma","100GB cloud storage","500 team members"],
      ribbonColor: "silver",
      ribbonText: "Most Popular"
    },
    {
      title: "Gold",
      price: "299",
      features: ["Complete documentation","Working materiasl in Figma","100GB cloud storage","500 team members"],
      ribbonColor: "gold",
      ribbonText: "Top Choice"
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
          price={plan.price}
          features={plan.features}
          ribbonColor={plan.ribbonColor}
          ribbonText={plan.ribbonText}
        />
      ))}
    </div>
    </div>

  )

}

export default PricingPlan
