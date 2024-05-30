import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';
import Dropdown from '../DropDown/DropDown.jsx';

const NavMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/services">
          Services
        </NavLink>
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
