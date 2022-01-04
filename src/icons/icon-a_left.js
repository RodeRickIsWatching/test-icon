import React from 'react';
import PropTypes from 'prop-types';

const IconALeft = (props) => {
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
        d="M7.83 11l3.58-3.59L10 6l-6 6 6 6 1.41-1.41L7.83 13H20v-2H7.83z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconALeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconALeft.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconALeft;
