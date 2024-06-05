import React, { useState } from 'react';
import styles from './Hero.module.css';
import { Modal } from '../Modal/Modal';
const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className={styles.overlay}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Faros Capital: Expert UK Accounting & Tax Services
        </h1>
        <button onClick={handleShow} className={styles.btn}>
          Get your fist free consultation
        </button>
        <Modal show={showModal} handleClose={handleClose}>
          <h2>Modal Content</h2>
          <p>This is the content inside the modal.</p>
        </Modal>
      </div>
    </div>
  );
};
export default Hero;
