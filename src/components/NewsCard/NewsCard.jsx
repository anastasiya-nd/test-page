import React from 'react';
import PropTypes from 'prop-types';
import s from './NewsCard.module.sass';
import Like from '../Icons/Like';
import Comments from '../Icons/Comments'; //eslint-disable-line

const NewsCard = ({ name, description, likes, comments, tags, image }) => { //eslint-disable-line
  return (
    <div className={s.card_wrap}>
      <div className={s.img_wrap}>
        <img src={image} alt="card_img" />
      </div>
      {!!tags && (
        <div className={s.tags_wrap}>
          {tags.map((tag, index) => (
            <div key={index} className={s.tag}>{tag}</div> //eslint-disable-line
          ))}
        </div>
      )}
      <div className={s.card_content}>
        <h3 className={s.card_title}>{name}</h3>
        <p className={s.card_description}>{description}</p>
        <div className={s.card_statistics}>
          <div>
            <Like />
            <span>{likes}</span>
          </div>
          <div>
            <Comments />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
};

NewsCard.defaultProps = {
  tags: [],
};

export default NewsCard;
