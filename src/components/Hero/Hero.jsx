import React, { useState } from 'react';
import styles from './Hero.module.css';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation()

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className={styles.overlay}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          {t('hero.title')}
        </h1>
        <button onClick={handleShow} className={styles.btn}>
          {t('hero.getConsulting')}
        </button>
        <Modal show={showModal} handleClose={handleClose}>
          <Form></Form>
        </Modal>
      </div>
    </div>
  );
};
export default Hero;
