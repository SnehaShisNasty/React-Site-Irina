import { useTranslation } from "react-i18next";
import sprite from './../../img/symbol-defs-flags.svg'
import styles from "./languageSwithcer.module.css"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={styles.iconWrapper}>
      <button onClick={() => changeLanguage('en')}>
        <svg className={styles.svgIcon}>
          <use xlinkHref={`${sprite}#flag-uk`} className={styles.flagIcon}/>
        </svg>
      </button>
      <button onClick={() => changeLanguage('ua')}>
        <svg className={styles.svgIcon}>
          <use xlinkHref={`${sprite}#flag-ua`} className={styles.flagIcon}/>
        </svg></button>
    </div>
  )
}

export default LanguageSwitcher
