import React from 'react';
import PropTypes from 'prop-types';

const IconFaucet = (props) => {
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
        d="M15 3.75a.75.75 0 000-1.5H9a.75.75 0 100 1.5h2.25V6H9.5a1 1 0 00-1 1v3.435A4.825 4.825 0 008 11H3a1 1 0 00-1 1v5a1 1 0 001 1h6a5 5 0 006 0v3a1 1 0 001 1h5a1 1 0 001-1v-6a4 4 0 00-4-4h-2a4.834 4.834 0 00-.5-.565V7a1 1 0 00-1-1h-1.75V3.75H15zm1 8.75a1.5 1.5 0 01-1.197-.597 3.309 3.309 0 00-.345-.39 1.5 1.5 0 01-.457-1.078V7.5h-4v2.935a1.5 1.5 0 01-.458 1.079c-.125.12-.24.25-.345.39A1.5 1.5 0 018 12.5H3.5v4H9c.325 0 .64.105.9.3a3.5 3.5 0 004.2 0 1.5 1.5 0 012.4 1.2v2.5h4V15a2.5 2.5 0 00-2.5-2.5h-2z"
        fill="#fff"
      ></path>
    </svg>
  );
};

IconFaucet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconFaucet.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconFaucet;
