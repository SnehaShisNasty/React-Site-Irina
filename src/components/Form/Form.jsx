import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { t } = useTranslation()

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
        <p className={styles['form--heading']}>{t('modal.title')}</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>{t('modal.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('modal.namePH')}
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>{t('modal.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('modal.emailPH')}
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>{t('modal.phone')}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder={t('modal.phonePH')}
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>{t('modal.message')}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('modal.messagePH')}
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
              rows={5}
            />
          </div>
          <div className={styles.divButton}>
            <button className={styles.button} type="submit">
              {t('modal.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };
