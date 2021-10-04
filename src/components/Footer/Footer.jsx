import React from 'react';
import s from './Footer.module.sass';
import Logo from '../Icons/Logo';

const Footer = () => (
  <header className={s.footer}>
    <Logo />
    <button type="button" className={s.button}>
      Нужна помощь?
    </button>
  </header>
);

export default Footer;
