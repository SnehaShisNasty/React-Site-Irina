import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';
import { items } from '../../data/servies';
const NavMenu = () => {
  const corporateServices = items.filter(item => item.type === 'corporate');
  const individualServices = items.filter(item => item.type === 'individual');
  console.log(corporateServices.map);
  const renderServiceCard = item => (
    <li className={styles.dropdownItem}>
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
        <ul className={styles.dropdown}>
          {corporateServices.map(renderServiceCard)}
        </ul>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/corporate">
          Corporate Services
        </NavLink>
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem}>
            <NavLink className={styles.dropdownLink} to="/corporate/service1">
              Service 1
            </NavLink>
          </li>
          <li className={styles.dropdownItem}>
            <NavLink className={styles.dropdownLink} to="/corporate/service2">
              Service 2
            </NavLink>
          </li>
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
