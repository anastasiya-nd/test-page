import React from 'react';
import NewsCard from '../../components/NewsCard';
import EducationCard from '../../components/EducationCard/EducationCard';
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
  const news = [
    {
      name: 'Хакеры атаковали пользователей Facebook',
      description:
        'Эксперты Group-IB предупредили Facebook о масштабной хакерской атаке на пользователей соцсети в 84 странах.',
      likes: 24,
      comments: 2,
      tags: ['В мире IT', 'Facebook'],
      image:
        'https://images.unsplash.com/photo-1508013861974-9f6347163ebe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1752&q=80',
    },
    {
      name: 'Данные сотен российских компаний из Trello',
      description:
        'Эксперты по безопасности Infosecurity a Softline company нашли в интернете тысячи досок Trello с корпоративными данными...',
      likes: 32,
      comments: 10,
      tags: ['В мире IT', 'Trello'],
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    },
    {
      name: 'Топ-25 самых востребованных профессий',
      description:
        'Dice Insights снова обратился к данным компании Burning Glass, которая анализирует рынок труда США, чтобы узнать...',
      likes: 10,
      comments: 7,
      tags: ['В мире IT', 'Profession', 'Top'],
      image:
        'https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
    },
  ];

  return (
    <>
      <section>
        <h2>Назначенное обучение</h2>
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

      <section>
        <h2>Новости</h2>
        <div className={s.news_wrap}>
          {news.map((card, index) => (
            <NewsCard
          key={index} //eslint-disable-line
              name={card.name}
              description={card.description}
              likes={card.likes}
              comments={card.comments}
              tags={card.tags}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
