import React from 'react';
import Products from 'components/Products';

import styles from './AllProducts.module.scss'

const AllProducts = (props) => {
  return (
   <>
     <h2>All Our Products</h2>
      <Products />
   </>
  )
};

export default AllProducts;