import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Filter.module.sass';

const Filter = ({ filters, active, onChange }) => {
  const handleFilterClick = (filter) => () => {
    onChange(filter);
  };

  return (
    <div className={s.button_wrap}>
      {filters.map((filter) => (
        <button
          type="button"
          className={cx({ [s.active]: active.type === filter.type }, s.button)}
          key={filter.type}
          onClick={handleFilterClick(filter)}
        >
          {filter.label}
          <span>{filter.count}</span>
        </button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.shape({ type: PropTypes.string, label: PropTypes.string }),
};

Filter.defaultProps = {
  active: {},
};

export default Filter;
