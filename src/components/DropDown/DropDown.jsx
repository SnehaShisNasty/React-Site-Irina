import React, { useState } from 'react';
import styles from './DropDown.module.css';
import { NavLink } from 'react-router-dom';
const Dropdown = () => {
  return (
    <ul className={styles.dropdown}>
      <li className={styles.dropdownItem}>
        <NavLink className={styles.dropdownLink} to="/individual/service1">
          Service 1
        </NavLink>
      </li>
      <li className={styles.dropdownItem}>
        <NavLink className={styles.dropdownLink} to="/individual/service2">
          Service 2
        </NavLink>
      </li>
    </ul>
  );
};

export { Dropdown };
