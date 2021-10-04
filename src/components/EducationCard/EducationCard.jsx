import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Icons/Calendar';
import s from './EducationCard.module.sass';

const EducationCard = ({ name, date, progress, type, image }) => {
  const getCardTypeName = (typeName) => {
    switch (typeName) {
      case 'course':
        return 'Курс';
      case 'test':
        return 'Тест';
      case 'event':
        return 'Событие';
      default:
        return null;
    }
  };

  const getEducationProgress = (progressValue) => {
    switch (progressValue) {
      case 0:
        return 'не пройдено';
      case 100:
        return 'пройден';
      default:
        return `${progressValue}% пройдено`;
    }
  };

  return (
    <div className={s.card_wrap}>
      <div className={s.img_wrap}>
        <img src={image} alt="card_img" />
      </div>
      <div className={s.card_content}>
        <div>
          <div className={s.progress_bar_wrap}>
            <div className={s.progress_bar_description}>
              <span>{getCardTypeName(type)}</span>
              {typeof progress === 'number' && <span>{getEducationProgress(progress)}</span>}
            </div>
            {typeof progress === 'number' && (
              <div className={s.progress_backround}>
                <div className={s.progress_color} style={{ width: `${progress}%` }} />
              </div>
            )}
          </div>
          <h3 className={s.card_title}>{name}</h3>
        </div>

        <div className={s.date_wrap}>
          <Calendar />
          <span>Доступен до: {date}</span>
        </div>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  progress: PropTypes.number,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

EducationCard.defaultProps = {
  progress: null,
};

export default EducationCard;
