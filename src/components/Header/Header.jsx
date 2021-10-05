import React, { useState } from 'react';
import cx from 'classnames';
import s from './Header.module.sass';
import Logo from '../Icons/Logo';
import Navbar from '../Navbar';
import UserPanel from '../UserPanel/UserPanel';
import Close from '../Icons/Close';
import Menu from '../Icons/Menu';

const Header = () => {
  const [active, setActiveNav] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={cx({ [s.active]: active }, s.wrap)}>
        <div className={s.navbar_wrap}>
          <Navbar />
        </div>
        <div className={cx({ [s.active]: active }, s.user_panel_wrap)}>
          <UserPanel />
        </div>
      </div>
      <button type="button" className={s.menu_button} onClick={() => setActiveNav(!active)}>
        {active ? <Close /> : <Menu />}
      </button>
    </header>
  );
};

export default Header;
