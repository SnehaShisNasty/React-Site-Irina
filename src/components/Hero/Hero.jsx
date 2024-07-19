import React, { useState } from 'react';
import styles from './Hero.module.css';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className={styles.overlay} id="homePage">
      <div className={styles.hero}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <button onClick={handleShow} className={styles.btn}>
          {t('hero.getConsulting')}
        </button>
        <Modal show={showModal} handleClose={handleClose}>
          <Form typeForm={'FreeConslt'} />
        </Modal>
      </div>
    </div>
  );
};
export default Hero;
