import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.sass';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul>
        <li>
          <NavLink to="/courses" className={s.important_link} activeClassName={s.active}>
            Курсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/tests" className={s.important_link} activeClassName={s.active}>
            Тестирования
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={s.important_link} activeClassName={s.active}>
            События
          </NavLink>
        </li>
        <li>
          <NavLink to="/knowledge-base" activeClassName={s.active}>
            База знаний
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={s.active}>
            Пользователи
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName={s.active}>
            Отчеты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
