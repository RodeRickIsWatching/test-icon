import React from 'react';
import PropTypes from 'prop-types';

const IconCopy = (props) => {
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
        d="M9 2.25A1.75 1.75 0 007.25 4v11c0 .966.784 1.75 1.75 1.75h11A1.75 1.75 0 0021.75 15V4A1.75 1.75 0 0020 2.25H9zM8.75 4A.25.25 0 019 3.75h11a.25.25 0 01.25.25v11a.25.25 0 01-.25.25H9a.25.25 0 01-.25-.25V4z"
        fill="#fff"
        fillOpacity=".6"
      ></path>
      <path
        d="M3.75 9A.25.25 0 014 8.75h1.5a.75.75 0 000-1.5H4A1.75 1.75 0 002.25 9v11c0 .966.784 1.75 1.75 1.75h11A1.75 1.75 0 0016.75 20v-1.5a.75.75 0 00-1.5 0V20a.25.25 0 01-.25.25H4a.25.25 0 01-.25-.25V9z"
        fill="#fff"
        fillOpacity=".6"
      ></path>
    </svg>
  );
};

IconCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconCopy.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconCopy;
