import React from 'react';
import PropTypes from 'prop-types';

const IconArrowRight = (props) => {
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
        d="M8.541 19.53a.75.75 0 010-1.06l6.54-6.541-6.54-6.54a.75.75 0 111.06-1.061l7.072 7.07a.75.75 0 010 1.061L9.602 19.53a.75.75 0 01-1.061 0z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconArrowRight.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconArrowRight;
