import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <span>/</span>
      <button onClick={() => changeLanguage('ua')}>UA</button>
    </div>
  )
}

export default LanguageSwitcher
