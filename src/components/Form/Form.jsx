import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';
import styles from './Form.module.css';
import { sendForm } from 'api/telegram';

const Form = ({ onSubmit, typeForm, customStyles = {}, title, showLabel = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { t } = useTranslation();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = phone => /^\d{11}$/.test(phone);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
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
    sendForm({ ...formData }, typeForm);
    Notiflix.Notify.success('Form submitted successfully!');
    reset();
  };

  const reset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={`${styles.container} ${customStyles.container || ''}`}>
      <div className={`${styles.form} ${styles['form--signup']} ${customStyles.form || ''}`}>
        {title && <p className={`${styles['form--heading']} ${customStyles.title || ''}`}>{title}</p>}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={`${styles.inputGroup} ${customStyles.inputGroup || ''}`}>
            {showLabel && (
              <label htmlFor="name" className={`${styles.label} ${customStyles.label || ''}`}>
                {t('modal.name')}
              </label>
            )}
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('modal.namePH')}
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${customStyles.input || ''}`}
            />
          </div>
          <div className={`${styles.inputGroup} ${customStyles.inputGroup || ''}`}>
            {showLabel && (
              <label htmlFor="email" className={`${styles.label} ${customStyles.label || ''}`}>
                {t('modal.email')}
              </label>
            )}
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('modal.emailPH')}
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${customStyles.input || ''}`}
            />
          </div>
          <div className={`${styles.inputGroup} ${customStyles.inputGroup || ''}`}>
            {showLabel && (
              <label htmlFor="phone" className={`${styles.label} ${customStyles.label || ''}`}>
                {t('modal.phone')}
              </label>
            )}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder={t('modal.phonePH')}
              value={formData.phone}
              onChange={handleChange}
              className={`${styles.input} ${customStyles.input || ''}`}
            />
          </div>
          <div className={`${styles.inputGroup} ${customStyles.inputGroup || ''}`}>
            {showLabel && (
              <label htmlFor="message" className={`${styles.label} ${customStyles.label || ''}`}>
                {t('modal.message')}
              </label>
            )}
            <textarea
              id="message"
              name="message"
              placeholder={t('modal.messagePH')}
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} ${customStyles.textarea || ''}`}
              rows={5}
            />
          </div>
          <div className={`${styles.divButton} ${customStyles.divButton || ''}`}>
            <button className={`${styles.button} ${customStyles.button || ''}`} type="submit">
              {t('modal.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };
