import React from 'react';
import PropTypes from 'prop-types';

const IconToastFail = (props) => {
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
        d="M8.464 8.464a.75.75 0 011.061 0L12 10.94l2.475-2.475a.75.75 0 011.06 1.061L13.062 12l2.475 2.475a.75.75 0 01-1.061 1.06L12 13.062l-2.475 2.475a.75.75 0 01-1.06-1.061L10.938 12 8.464 9.525a.75.75 0 010-1.06z"
        fill="#FF3B3B"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5z"
        fill="#FF3B3B"
      ></path>
    </svg>
  );
};

IconToastFail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconToastFail.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconToastFail;
