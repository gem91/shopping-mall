import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Product.module.scss'

const ProductCard = ({product, product: {id, title, category, description, image, options, price }}) => {
  const navigate = useNavigate();
  return (
    <li
      className={styles.list} 
      onClick={() => navigate(`/products/${id}`, { state: {product} })}
    >
      <span className={styles.thumb}><img src={image} alt={title} /></span>
      <div>
        <h3>{title}</h3>
        <p className={styles.price}>{price}원</p>
      </div>
      <p className={styles.category}>{category}</p>
    </li>
  )
};

export default ProductCard;