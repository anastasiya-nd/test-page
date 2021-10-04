import React from 'react';
import EducationCard from '../../components/StudyCard/EducationCard';
import s from './Courses.module.sass';

const Courses = () => {
  const education = [
    {
      name: '24-часовой рабочий день',
      date: '20.04.2021',
      progress: 0,
      type: 'course',
      image:
        'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    },
    {
      name: 'Эксперт назвал способ навсегда покончить с нападками',
      date: '25.04.2021',
      progress: 24,
      type: 'course',
      image:
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1845&q=80',
    },
    {
      name: 'Агрегаторы станут нести ответственность за услуги',
      date: '27.04.2021',
      progress: 50,
      type: 'course',
      image:
        'https://images.unsplash.com/photo-1469719847081-4757697d117a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
    {
      name: 'Упаковка и маркировка товара',
      date: '05.05.2021',
      progress: 0,
      type: 'course',
      image:
        'https://images.unsplash.com/photo-1629834790224-7c0bd37f5d39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Теории Зигмунда Фрейда и Альфреда Адлера',
      date: '10.05.2021',
      progress: 0,
      type: 'course',
      image:
        'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80',
    },
    {
      name: 'Как развить в себе системные качества лидера',
      date: '15.05.2021',
      progress: 100,
      type: 'test',
      image:
        'https://images.unsplash.com/photo-1537237858032-3ad1b513cbcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
    {
      name: 'Это необходимо знать, перед уходом на удаленку',
      date: '25.05.2021',
      progress: null,
      type: 'event',
      image:
        'https://images.unsplash.com/photo-1578527202307-aabb95a4de12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80',
    },
    {
      name: 'Принципы OOП',
      date: '30.05.2021',
      progress: 0,
      type: 'test',
      image:
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80',
    },
  ];

  return (
    <section>
      <div className={s.education_wrap}>
        {education.map((card, index) => (
          <EducationCard
          key={index} //eslint-disable-line
            name={card.name}
            date={card.date}
            progress={card.progress}
            type={card.type}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
