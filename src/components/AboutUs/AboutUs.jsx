import { useTranslation } from 'react-i18next';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  // const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.rightWrapper}>
          <h1 className={styles.title}>About us</h1>
          <div className={styles.centerWrapper}>
            <div className={styles.box}>
              <h2 className={styles.subtitle}>Qualifications</h2>
              <p className={styles.text}>
                Fully AAT qualified and studying towards ACCA. Also, I have an
                accountant's license and the right to officially represent the
                interests of clients before HMRC.
              </p>
            </div>
            <div className={styles.box}>
              <h2 className={styles.subtitle}>Experience</h2>
              <p className={styles.text}>
                I have over 12 years' of experience in accountancy and internal
                audit. I've worked with sole traders, partnerships and limited
                companies.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.leftWrapper}>
          <p className={styles.text}>
            AUDIT CONSULTING is owner managed accounting practice providing
            accounting and tax services for companies and self-employed.
          </p>
          <p className={styles.text}>
            We work with many sectors of economy, however our main industries
            where we have high expertise are construction, IT, medical,
            transport, and property.
          </p>
          <p className={styles.text}>
            Our specialists speak Ukrainian and are fluent in English. Also, our
            professionals bring a wealth of experience in various tax
            specializations, from personal to corporate taxes, providing
            comprehensive solutions. Our expertise ranges from managing
            Self-Assessment, Capital Gains, Contractor Tax, Corpotation Tax, to
            Landlord, Inheritance, and Property Tax. Whether you're a salaried
            employee, a self-employed entrepreneur, or a large business owner,
            our team is equipped to handle your unique tax situation. We are
            officially recognised agent by HMRC, that allow us to represent
            interests of our client directly with HMRC.
          </p>
          <p className={styles.text}>
            We are highly regulated by our professional body and other governing
            organisation that guaranty you high level of standard in areas like
            compliance with GDPR, confidentiality, legal requirements in dealing
            with tax and accounting issues.
          </p>
          <p className={styles.text}>
            We are highly regulated by our professional body and other governing
            organisation that guaranty you high level of standard in areas like
            compliance with GDPR, confidentiality, legal requirements in dealing
            with tax and accounting issues.
          </p>
          <p className={styles.text}>
            At AUDIT CONSULTING we pride ourselves on customer satisfaction and
            value for money. By contacting AUDIT CONSULTING, you can be sure of
            high-quality services! For your peace of mind, our initial
            consultation is absolutely free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
