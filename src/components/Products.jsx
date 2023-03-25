import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/fisebase';
import ProductCard from './ProductCard';

import styles from './Product.module.scss'

const Products = () => {
  const { isLoading, error, data: products } = useQuery(['products'], () => getProducts()); // useQuery([key], callback)
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={styles.products}>
        {
          products && products.map( prd => (
           <ProductCard key={prd.id} product={prd} />
          ))
        }
      </ul>
    </>
  )
};

export default Products;