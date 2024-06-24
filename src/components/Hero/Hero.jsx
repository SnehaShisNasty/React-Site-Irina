import React, { useState } from 'react';
import styles from './Hero.module.css';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className={styles.overlay}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          AUDIT CONSULTING: Expert UK Accounting & Tax Services
        </h1>
        <button onClick={handleShow} className={styles.btn}>
          Get your first free consultation
        </button>
        <Modal show={showModal} handleClose={handleClose}>
          <Form></Form>
        </Modal>
      </div>
    </div>
  );
};
export default Hero;
