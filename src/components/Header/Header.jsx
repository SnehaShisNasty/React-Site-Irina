import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { Search } from './Search/Search';
import { items } from '../../data/servies';
import { ChangeClass } from '../../helpers/ChangeClass';

const Header = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const filteredList = useRef(null);

  const handleSearch = ({ search }) => {
    if (search !== '') {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(filtered);
      ChangeClass(filteredList, styles.active, true);
    } else {
      setFilteredItems([]);
      ChangeClass(filteredList, styles.inActive, true);
    }
  };
  const handleBlur = event => {
    ChangeClass(filteredList, styles.active);
  };
  const handleFocus = event => {
    ChangeClass(filteredList, styles.active, true);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <Logo />
        <NavMenu />
        <div className={styles.searchBox}>
          <button className={styles.btn}>Free Consult</button>
          <Search
            onSubmit={handleSearch}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <ul ref={filteredList} className={`${styles.filteredList} `}>
            {filteredItems.map(item => (
              <li key={item.id} className={styles.item}>
                <NavLink to={item.address}> {item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export { Header };
