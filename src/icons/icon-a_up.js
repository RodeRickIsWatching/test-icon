import React from 'react';
import PropTypes from 'prop-types';

const IconAUp = (props) => {
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
        d="M13 7.83l3.59 3.58L18 10l-6-6-6 6 1.41 1.41L11 7.83V20h2V7.83z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconAUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconAUp.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconAUp;
