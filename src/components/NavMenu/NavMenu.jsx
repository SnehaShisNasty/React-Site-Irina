import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';
import { items } from '../../data/servies';
import { useTranslation } from 'react-i18next';

const NavMenu = () => {
  const { t } = useTranslation()

  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  const renderServiceCard = item => (
    <li className={styles.dropdownItem} key={item.id}>
      <NavLink className={styles.dropdownLink} to={item.address}>
        {t(`services.${item.name}`)}
      </NavLink>
    </li>
  );
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          {t('header.navMenu.homePage')}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/individual">
          {t('header.navMenu.individualServices')}
        </NavLink>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          {corporateServices.map(renderServiceCard)}
        </ul>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/corporate">
          {t('header.navMenu.corporateServices')}
        </NavLink>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
            {individualServices.map(renderServiceCard)}
          </ul>
        </ul>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/about-us">
          {t('header.navMenu.aboutUs')}
        </NavLink>
      </li>
    </ul>
  );
};

export { NavMenu };
