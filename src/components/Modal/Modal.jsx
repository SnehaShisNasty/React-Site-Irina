import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div
      className={`${styles.modal} ${show ? styles.show : ''}`}
      onClick={handleClose}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.close} onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export { Modal };
