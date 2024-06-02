import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './Search.module.css';

const INITIAL_STATE = {
  search: '',
};

const Search = ({ onSubmit, onBlur, onFocus }) => {
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
  const handleBlur = event => {
    if (onBlur) {
      console.log(event);
      onBlur(event);
    }
  };
  const handleFocus = event => {
    if (onBlur) {
      console.log(event);
      onFocus(event);
    }
  };
  const searchId = nanoid();

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className={styles.searchInput}
        value={state.search}
        onChange={handleChange}
        id={searchId}
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit" className={styles.searchButton}></button>
    </form>
  );
};

export { Search };
