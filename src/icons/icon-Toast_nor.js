import React from 'react';
import PropTypes from 'prop-types';

const IconToastNor = (props) => {
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
        d="M12 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1z"
        fill="#299FF4"
      ></path>
      <path
        d="M12 18a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fill="#299FF4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5z"
        fill="#299FF4"
      ></path>
    </svg>
  );
};

IconToastNor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconToastNor.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconToastNor;
