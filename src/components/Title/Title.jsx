import React from 'react';
import propTypes from 'prop-types';
import s from './Title.module.sass';

const Title = ({ title, marginBottom }) => {
  return (
    <h2 className={s.title} style={{ 'margin-bottom': marginBottom }}>
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: propTypes.string.isRequired,
  marginBottom: propTypes.string,
};

Title.defaultProps = {
  marginBottom: '32px',
};

export default Title;
