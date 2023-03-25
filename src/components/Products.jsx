import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/fisebase';
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const { isLoading, error, data: products } = useQuery(['products'], () => getProducts()); // useQuery([key], callback)
  console.log(products);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
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