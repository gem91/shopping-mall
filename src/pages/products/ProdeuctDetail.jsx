import Button from 'components/ui/Button';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './ProductDetail.module.scss'

const ProdeuctDetail = (props) => {
  const {
    state : {
      product : { title, category, description, image, options, price }
    }
  } = useLocation();
  const [selected, setSelected] = useState()
  const handleSelect = (e) => {
    setSelected(e.target.value)
  }
  const handleAddCart = (e) => {
    //장바구니 추가기능
  }
  return (
    <div className={styles.prdDetail}>
      <p className={styles.category}>{category}</p>
      <div className={styles.detail}>
        <span className={styles.thumb}>
          <img src={image} alt={title} />
        </span>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price}원</p>
          <select
            value={selected}
            onChange={handleSelect}
          >
            { options && options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          <Button text='Add Cart' onClick={handleAddCart} />
        </div>
      </div>
    </div>
  )
};

export default ProdeuctDetail;