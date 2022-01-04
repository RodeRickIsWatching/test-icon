import React from 'react';
import PropTypes from 'prop-types';

const IconArrowUp = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 15.46a.75.75 0 01-1.06 0l-6.541-6.541-6.54 6.54a.75.75 0 01-1.062-1.06L11.4 7.328a.75.75 0 011.06 0l7.071 7.07a.75.75 0 010 1.061z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowUp.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowUp;
