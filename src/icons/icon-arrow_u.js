import React from 'react';
import PropTypes from 'prop-types';

const IconArrowU = (props) => {
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
        d="M10.4 7.133a2 2 0 013.2 0l5 6.667c.989 1.318.048 3.2-1.6 3.2H7c-1.648 0-2.589-1.882-1.6-3.2l5-6.667z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowU.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowU.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowU;
