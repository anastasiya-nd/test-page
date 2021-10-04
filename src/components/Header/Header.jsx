import React from 'react';
import s from './Header.module.sass';
import Logo from '../Icons/Logo';
import Navbar from '../Navbar';
import UserPanel from '../UserPanel/UserPanel';

const Header = () => (
  <header className={s.header}>
    <Logo />
    <div className={s.navbar_wrap}>
      <Navbar className={s.navbar} />
    </div>
    <UserPanel />
  </header>
);

export default Header;
