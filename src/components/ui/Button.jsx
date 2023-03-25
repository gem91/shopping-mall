import React from 'react';
import styles from './Button.module.scss'
const Button = ({text, onClick, disabled}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;