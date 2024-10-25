import React from 'react';
import PropTypes from 'prop-types';

const Tracker = ({ data, children}) => {
  const countActive = (data) => {
    if (Array.isArray(data)) {
      return data.filter(item => item.toLowerCase() === 'active').length;
    }
    return 0;
  };

  const activeCount = countActive(data);

  return (
    <div className='tracker'>
      {activeCount}/{data.length} {children}
  </div>
  );
};

Tracker.propTypes = {
  className: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  children: PropTypes.node
};

export default Tracker;
