import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import styles from './nav-menu.module.css';
import { items } from '../../data/services';
import { useTranslation } from 'react-i18next';

const NavMenu = () => {
  const { t } = useTranslation();
  const location = useLocation()

useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });

    return () => scroll.destroy();
}, []);

  const handleHomeClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  const renderServiceCard = item => (
    <li className={styles.dropdownItem} key={item.id}>
      <NavLink className={styles.dropdownLink} to={`service/${item.address}`}>
        {t(`services.${item.name}.name`)}
      </NavLink>
    </li>
  );
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/" onClick={handleHomeClick}>
          {t('header.navMenu.homePage')}
        </NavLink>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#individual'>
          {t('header.navMenu.individualServices')}
        </a>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          {individualServices.map(renderServiceCard)}
        </ul>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#corporate'>
          {t('header.navMenu.corporateServices')}
        </a>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          {corporateServices.map(renderServiceCard)}
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
