import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { Search } from './Search/Search';
import { items } from '../../data/services';
import { ChangeClass } from '../../helpers/ChangeClass';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredList = useRef(null);
  const link = useRef(null);
  const { t, i18n } = useTranslation();
  const content = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  const handleSearch = ({ search }) => {
    setFilter(search);
    if (search !== '') {
      const language = i18n.language;
      const filtered = items.filter(item => {
        const itemName = item.name;
        const translatedName = t(`services.${itemName}.name`).toLocaleLowerCase(
          language
        );
        const translatedNameFind = translatedName.includes(
          search.toLocaleLowerCase(language)
        );
        console.log(translatedNameFind);
        return translatedNameFind;
      });
      setFilteredItems(filtered);
      ChangeClass(filteredList, styles.active, true);
    } else {
      setFilteredItems([]);
      ChangeClass(filteredList, styles.active);
    }
  };

  const handleInputChange = ({ name, value }) => {
    if (name === 'search') {
      handleSearch({ search: value });
    }
  };

  useEffect(() => {
    const handleClick = event => {
      if (link.current === event.currentTarget) {
        ChangeClass(filteredList, styles.active);
      } else if (
        event.target.className === 'Search_searchInput__fMAqM' ||
        filter === false
      ) {
        ChangeClass(filteredList, styles.active, true);
      } else {
        ChangeClass(filteredList, styles.active);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [filter]);
  useEffect(() => {
    if (menuActive) {
      ChangeClass(content, styles.contentActive, true);
    }
  }, [menuActive]);
  const toggleMenu = () => setMenuActive(prevState => !prevState);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <Logo />

        <button className={styles.mobileButton} onClick={toggleMenu}></button>
        {menuActive ? (
          <div className={styles.overlayMenu}>
            <div className={styles.activeMenu}>
              <NavMenu toggleMenu={toggleMenu} />
              <div className={styles.content} ref={content}>
                <button onClick={handleShow} className={styles.btn}>
                  {t('header.freeConsult')}
                </button>
                <Modal show={showModal} handleClose={handleClose}>
                  <Form typeForm="FreeConslt" />
                </Modal>
                <div className={styles.searchBox}>
                  <Search onSubmit={handleSearch} />
                  <ul ref={filteredList} className={styles.filteredList}>
                    {filteredItems.map(item => (
                      <li key={item.id} className={styles.item}>
                        <NavLink to={item.address}>{item.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavMenu />
            <div className={styles.content}>
              <button onClick={handleShow} className={styles.btn}>
                {t('header.freeConsult')}
              </button>
              <Modal show={showModal} handleClose={handleClose}>
                <Form typeForm="FreeConslt" />
              </Modal>
              <div className={styles.searchBox}>
                <Search onSubmit={handleSearch} onChange={handleInputChange} />
                <ul ref={filteredList} className={styles.filteredList}>
                  {filteredItems.map(item => (
                    <li key={item.id} className={styles.item}>
                      <NavLink to={`service/${item.address}`} ref={link}>
                        {t(`services.${item.name}.name`)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <LanguageSwitcher />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { Header };

