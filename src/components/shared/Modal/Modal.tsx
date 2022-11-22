import React from 'react';
import styles from './modal.module.css';

export default function Modal({ text, isOpen, setIsOpen }: any) {
  return (
    <>
      {isOpen && (

        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a href="#!" role="button" className={styles.close} onClick={() => setIsOpen(false)} aria-label="close this modal">
              <svg viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </a>
          </div>
          <p>{text}</p>
        </div>
      )
      }
    </>
  )
}
