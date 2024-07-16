import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { useTranslation } from "react-i18next";
import { items } from '../../data/services';
import ServiceTemplate from 'components/Services/ServiceTemplate/ServiceTemplate';
import styles from './servicePage.module.css';

const ServicePage = () => {
  const { serviceAddress } = useParams();
  const service = items.find(item => item.address === serviceAddress);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceAddress]);

  if (!service) {
    return <div>Services not found</div>;
  }

  return (
    <section>
      <div className={styles.servicePage}>
        <ServiceTemplate service={service} />
      </div>
    </section>
  );
};

export default ServicePage;
