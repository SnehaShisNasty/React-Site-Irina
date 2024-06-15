import React, { useState } from 'react';
import styles from './Form.module.css';
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...formData });
    reset();
  };

  const reset = () => {
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.form} ${styles['form--signup']}`}>
        <p className={styles['form--heading']}>AUDIT CONSULTING Welcome You!</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.divInput}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="tex"
              name="message"
              placeholder="Your Number"
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.divButton}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };
