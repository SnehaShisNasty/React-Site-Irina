import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './Search.css';

const INITIAL_STATE = {
  search: '',
};

const Search = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
    onSubmit({ ...state });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ search: '' });
  };

  const searchId = nanoid();

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className="search-input"
        value={state.search}
        onChange={handleChange}
        id={searchId}
        placeholder="Search..."
      />
      <button type="submit" className="search-button"></button>
    </form>
  );
};

export { Search };
