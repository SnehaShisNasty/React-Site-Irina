import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './Search.module.css';

const INITIAL_STATE = {
  search: '',
};

const Search = ({ onSubmit, onClick, onFocus }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ search: '' });
  };
  const handleClick = event => {
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
  };
  const searchId = nanoid();

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
      autoComplete="off"
      onClick={handleClick}
    >
      <input
        type="text"
        name="search"
        className={styles.searchInput}
        value={state.search}
        onChange={handleChange}
        id={searchId}
        placeholder="Search..."
        onFocus={handleFocus}
      />
      <button type="submit" className={styles.searchButton}></button>
    </form>
  );
};

export { Search };
