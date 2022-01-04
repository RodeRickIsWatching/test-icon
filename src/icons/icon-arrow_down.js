import React from 'react';
import PropTypes from 'prop-types';

const IconArrowDown = (props) => {
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
        d="M4.47 8.54a.75.75 0 011.06 0l6.541 6.542 6.54-6.541a.75.75 0 011.062 1.06l-7.071 7.071a.75.75 0 01-1.061 0L4.47 9.602a.75.75 0 010-1.061z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowDown.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowDown;
