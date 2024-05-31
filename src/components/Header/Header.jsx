import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { Search } from './Search/Search';
import { items } from '../../data/servies';

const Header = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  console.log(filteredItems);

  const handleSearch = ({ search }) => {
    if (search === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className={styles.header}>
      <Logo />
      <NavMenu />
      <Search onSubmit={handleSearch} />
      {filteredItems === false ? (
        <></>
      ) : (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Header };
