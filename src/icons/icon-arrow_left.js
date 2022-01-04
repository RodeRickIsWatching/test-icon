import React from 'react';
import PropTypes from 'prop-types';

const IconArrowLeft = (props) => {
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
        d="M15.459 4.47a.75.75 0 010 1.06l-6.54 6.541 6.54 6.54a.75.75 0 01-1.06 1.061l-7.072-7.07a.75.75 0 010-1.061l7.071-7.071a.75.75 0 011.061 0z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowLeft.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowLeft;
