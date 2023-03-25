import React from 'react';
import styles from './Avata.module.scss'

const UserAvata = ({user: {photoURL, displayName}}) => {
  return (
    <div className={styles.avata}>
      <div className={styles.thumb}><img src={photoURL} alt={displayName} /></div>
      <span className={styles.name}>{displayName}</span>
    </div>
  )
};

export default UserAvata;