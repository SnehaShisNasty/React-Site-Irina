import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';
import { items } from '../../data/servies';
const NavMenu = () => {
  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');

  const renderServiceCard = item => (
    <li className={styles.dropdownItem} key={item.id}>
      <NavLink className={styles.dropdownLink} to={item.address}>
        {item.name}
      </NavLink>
    </li>
  );
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          Home Page
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/individual">
          Individual Services
        </NavLink>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          {corporateServices.map(renderServiceCard)}
        </ul>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/corporate">
          Corporate Services
        </NavLink>
        <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
          <ul className={`${styles.dropdown} ${styles.fadeIn}`}>
            {individualServices.map(renderServiceCard)}
          </ul>
        </ul>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/about-us">
          About Us
        </NavLink>
      </li>
    </ul>
  );
};

export { NavMenu };
