import { useState } from 'react';
import Notiflix from 'notiflix';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = phone => /^\d{10}$/.test(phone);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      Notiflix.Notify.warning('Please fill in all fields');
      return;
    }

    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);

    if (!isValidEmail) {
      Notiflix.Notify.failure('Invalid email address');
      return;
    }
    if (!isValidPhone) {
      Notiflix.Notify.failure('Invalid phone number');
      return;
    }
    onSubmit({ ...formData });
    Notiflix.Notify.success('Form submitted successfully!');
    reset();
  };

  const reset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.form} ${styles['form--signup']}`}>
        <p className={styles['form--heading']}>Welcome!</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
              rows={5}
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
