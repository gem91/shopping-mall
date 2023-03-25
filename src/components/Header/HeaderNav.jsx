import React, { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from 'api/fisebase'
import styles from './HeaderNav.module.scss'

import { Link } from 'react-router-dom';
import { AiOutlineAppstoreAdd, AiTwotoneShop } from "react-icons/ai";
import UserAvata from 'components/UserAvata';
import Button from 'components/ui/Button';

const HeaderNav = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // callback 함수받는 onUserStateChange
    onUserStateChange((user) => {
      console.log(user);
      setUser(user)
    })
  }, [])

  const handleLogin = () => {
    login().then( result => {
      setUser(result)
      console.log('로그인 성공!');
    } )
  }
  const handleLogout = () => {
    logout().then( result => {
      setUser(result)
      console.log('로그아웃 됌!');
    } )
  }

  return (
    <header>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <h1><AiTwotoneShop />SHOPPINGMALL</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/carts'>Carts</Link></li>
            {
              user && user.isAdmin && 
              <li><Link to='/products/new'><AiOutlineAppstoreAdd />Add New</Link></li>
            }
           
          </ul>
        </nav>
        <div className={styles.utils}>
          { user && <UserAvata user={user} /> }
          { !user && <Button text={'LogIn'} onCLick={handleLogin} /> }
          { user && <Button text={'LogOut'} onClick={handleLogout} /> }
        </div>
      </div>
    </header>
  )
};

export default HeaderNav;