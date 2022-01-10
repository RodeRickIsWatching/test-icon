import React from 'react';
import PropTypes from 'prop-types';

const IconArrowD = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M13.6 16.867a2 2 0 01-3.2 0l-5-6.667C4.411 8.882 5.352 7 7 7h10c1.648 0 2.589 1.882 1.6 3.2l-5 6.667z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowD.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowD.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowD;
