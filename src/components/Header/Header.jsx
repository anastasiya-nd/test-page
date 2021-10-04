import React from 'react';
import Logo from '../Icons/Logo';
import Navbar from '../Navbar';
import UserPanel from '../UserPanel/UserPanel';

const Header = () => (
  <header>
    <Logo />
    <Navbar />
    <UserPanel />
  </header>
);

export default Header;
