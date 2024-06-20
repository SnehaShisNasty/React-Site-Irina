import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow="hidden"
    } else {
      document.body.style.overflow="auto"
    }
  },[show])
  return (
    <div
      className={`${styles.modal} ${show ? styles.show : ''}`}
      onClick={handleClose}
    >
      <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
        <span className={styles.close} onClick={handleClose}>
          &times;
        </span>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
