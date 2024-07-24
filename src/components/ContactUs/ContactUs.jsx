import contactInfo from "helpers/contactInfoArray"
import SocialLinks from "components/SocialLinks/SocialLinks"
import { Form } from "components/Form/Form"
import { useTranslation } from "react-i18next"
import styles from "./contactUs.module.css"

const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{t('contactUs.title')}</h1>
      </div>
      <h2 className={styles.subTitle}>{t('contactUs.subTitle')}</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoDiv}>
          <ul className={styles.list}>
            {contactInfo.map((info, index) => (
              <li key={index} className={styles.item}>
                {info.type === 'location' ? (
                  <span>
                    <p className={styles.labelInfo}>{t('contactUs.locationLabel') }</p>
                    <p className={styles.link} onClick={info.action}>
                    {info.value}
                    </p>
                  </span>
                ) : (
                  <span>
                    <p className={styles.labelInfo}>{t(`contactUs.${info.type}Label`)}</p>
                    <a href={info.action()} className={styles.link}>
                      {info.value}
                    </a>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.socialDiv}>
            <p className={styles.labelInfo}>{t(`contactUs.social`)}</p>
            <div className={styles.socialLinksDiv}>
              <SocialLinks customStyles={styles}/>
            </div>
          </div>

        </div>
        <div className={styles.formDiv}>
          <Form
            typeForm="contactUs"
            showLabel={false}
            customStyles={{
              container: styles.formContainer,
              form: styles.form,
              inputGroup: styles.inputGroup,
              label: styles.label,
              input: styles.input,
              textarea: styles.textarea,
              divButton: styles.divButton,
              button: styles.button
            }}
          />
        </div>
      </div>
    </div>
)
}

export default ContactUs
