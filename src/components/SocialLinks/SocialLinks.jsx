import { useTranslation } from 'react-i18next';
import sprite from '../../img/symbol-defs.svg';
import styles from './socialLinks.module.css';

const SocialLinks = ({ customStyles = {} }) => {
  const { t } = useTranslation();
  const socialLinks = t('footer.socialLinks', { returnObjects: true });

   return (
    <ul className={`${styles.social} ${customStyles.social || ''}`}>
      {socialLinks.map((link, index) => (
        <li key={index} className={customStyles.item || ''}>
          <a href={link.url} className={`${styles.linkSocial} ${customStyles.linkSocial || ''}`}>
            <svg className={`${styles.iconSvg} ${customStyles.iconSvg || ''}`}>
              <use href={`${sprite}#${link.icon}`} className={`${styles.icon} ${customStyles.icon || ''}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
