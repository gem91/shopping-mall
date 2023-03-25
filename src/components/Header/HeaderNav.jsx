import React from 'react';
import styles from './HeaderNav.module.scss'

import { Link } from 'react-router-dom';
import { AiOutlineAppstoreAdd, AiTwotoneShop } from "react-icons/ai";
import { useAuthContext } from 'components/context/AuthContext';
import UserAvata from 'components/UserAvata';
import Button from 'components/ui/Button';

const HeaderNav = (props) => {
  const {user, login, logout} = useAuthContext(); 

  return (
    <header>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <h1><AiTwotoneShop />SHOPPINGMALL</h1>
        </Link>
       <div className={styles.gnb}>
        <nav>
          <ul>
            <li><Link to='/products'>Products</Link></li>
            {  user &&  <li><Link to='/carts'>Carts</Link></li>}
            {
              user && user.isAdmin && 
              <li><Link to='/products/new'><AiOutlineAppstoreAdd />Add</Link></li>
            }
          </ul>
        </nav>
        <div className={styles.utils}>
          { user && <UserAvata user={user} /> }
          { !user && <Button text={'LogIn'} onClick={login} /> }
          { user && <Button text={'LogOut'} onClick={logout} /> }
        </div>
       </div>
      </div>
    </header>
  )
};

export default HeaderNav;