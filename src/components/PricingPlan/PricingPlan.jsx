import { useRef } from 'react';
import useVisibility from 'customeHooks/useVisivility';
import PriceCard from './Card/PriceCard';
import { useTranslation } from 'react-i18next';
import styles from './pricingPlan.module.css';

const PricingPlan = () => {
  const containerRef = useRef(null);
  const isVisible = useVisibility(containerRef);
  const { t } = useTranslation();

  const subPlans = [
    {
      title: t('pricingPlan.planStandard'),
      description: t('pricingPlan.goodForSoleTraders'),
      price: '150.00',
      turnover: t('pricingPlan.upTo'),
      multipleCurrencies: t('pricingPlan.multipleCurrenciesNotIncluded'),
      services: [
        t('pricingPlan.services.payroll'),
        t('pricingPlan.services.pension'),
        t('pricingPlan.services.vat'),
        t('pricingPlan.services.confirmationStatement'),
        t('pricingPlan.services.annualAccounts'),
        t('pricingPlan.services.corporationTaxReturn'),
        t('pricingPlan.services.selfAssessmentTaxReturnsForDirector'),
      ],
      ribbonColor: 'silver',
      ribbonText: t('pricingPlan.ribbonBestValue'),
    },
    {
      title: t('pricingPlan.planPremium'),
      description: t('pricingPlan.goodForGrowingSmallBusinesses'),
      price: '250.00',
      turnover: '£85k - £400k',
      multipleCurrencies: t('pricingPlan.multipleCurrenciesIncluded'),
      services: [
        t('pricingPlan.services.payroll'),
        t('pricingPlan.services.pension'),
        t('pricingPlan.services.vat'),
        t('pricingPlan.services.confirmationStatement'),
        t('pricingPlan.services.annualAccounts'),
        t('pricingPlan.services.corporationTaxReturn'),
        t('pricingPlan.services.selfAssessmentTaxReturnsForDirector'),
      ],
      ribbonColor: 'gold',
      ribbonText: t('pricingPlan.ribbonMostPopular'),
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.title_container}>
        <h1 className={styles.title}>{t('pricingPlan.title')}</h1>
        <span className={styles.title_span}>{t('pricingPlan.subtitle')}</span>
      </div>
      <div className={styles.pricing_plan}>
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
  );
};

export default PricingPlan;
