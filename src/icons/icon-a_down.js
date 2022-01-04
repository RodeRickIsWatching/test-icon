import React from 'react';
import PropTypes from 'prop-types';

const IconADown = (props) => {
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
        d="M11 16.17l-3.59-3.58L6 14l6 6 6-6-1.41-1.41L13 16.17V4h-2v12.17z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconADown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconADown.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconADown;
