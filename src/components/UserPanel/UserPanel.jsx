import React from 'react';
import s from './UserPanel.module.sass';
import userPhoto from '../../assets/img/user_panel_photo.png';

const UserPanel = () => (
  <div className={s.user_panel}>
    <div className={s.user_img_wrap}>
      <img src={userPhoto} alt="user_panel" />
    </div>
    <div>
      <span className={s.user_name}>Виталий Лавов</span>
      <span className={s.user_position}>Сотрудник</span>
    </div>
  </div>
);

export default UserPanel;
