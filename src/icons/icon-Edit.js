import React from 'react';
import PropTypes from 'prop-types';

const IconEdit = (props) => {
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
        d="M15.53 6.195a.664.664 0 01.94.939L8.283 15.32l-1.252.314.313-1.253 8.186-8.186zM16 4.5c-.574 0-1.124.228-1.53.634l-8.334 8.333a.75.75 0 00-.197.349l-.667 2.666a.75.75 0 00.91.91l2.667-.667a.75.75 0 00.348-.197l8.333-8.333A2.164 2.164 0 0016 4.5zM6 19.334a.75.75 0 000 1.5h11a.75.75 0 000-1.5H6z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconEdit.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconEdit;
