import React, { useState } from 'react';
import styles from './DropDown.module.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Dropdown
      </button>{' '}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <a a href="#item1" className={styles.dropdownItem}>
            Item 1
          </a>
          <a href="#item2" className={styles.dropdownItem}>
            Item 2
          </a>
          <a href="#item3" className={styles.dropdownItem}>
            Item 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
