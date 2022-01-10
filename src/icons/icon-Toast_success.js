import React from 'react';
import PropTypes from 'prop-types';

const IconToastSuccess = (props) => {
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
        d="M17.48 9.409a.75.75 0 10-1.06-1.06l-5.834 5.833-2.298-2.298a.75.75 0 00-1.061 1.06l2.828 2.829a.75.75 0 001.061 0l6.364-6.364z"
        fill="#24AE64"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM2.75 12a9.25 9.25 0 1118.5 0 9.25 9.25 0 01-18.5 0z"
        fill="#24AE64"
      ></path>
    </svg>
  );
};

IconToastSuccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconToastSuccess.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconToastSuccess;
