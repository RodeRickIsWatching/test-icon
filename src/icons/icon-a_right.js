import React from 'react';
import PropTypes from 'prop-types';

const IconARight = (props) => {
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
        d="M16.17 13l-3.58 3.59L14 18l6-6-6-6-1.41 1.41L16.17 11H4v2h12.17z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconARight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconARight.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconARight;
