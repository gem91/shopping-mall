import React from 'react';

const ProductCard = ({product: {id, title, category, description, image, options, price }}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{price}원</p>
      </div>
      <p>{category}</p>
    </li>
  )
};

export default ProductCard;