import React from 'react';
import styles from './button.module.css';

export default function Button({ value, children }: any) {
  return (
    <button type="submit" className={styles.button} value={value}>
      {children}
    </button>
  )
}
