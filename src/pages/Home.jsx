import React from 'react';
import Products from 'components/Products';
import Banner from 'components/Banner';

import styles from './Home.module.scss'

const Home = (props) => {
  return (
  <>
    <Banner />
    <p className={styles.text}>test용 Admin ID : <em>91gem.test@gmail.com</em></p>
    <p className={styles.text}>test용 Admin pw : <em>dkssud123</em></p>
    <Products /> 
  </>
  )
};

export default Home;