import React from 'react';
import propTypes from 'prop-types';
import s from './Title.module.sass';

const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};

export default Title;
