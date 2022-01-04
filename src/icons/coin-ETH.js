import React from 'react';
import PropTypes from 'prop-types';

const CoinEth = (props) => {
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
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.512 12.068l3.577-6.065 3.577 6.065-3.577 1.757-3.577-1.757zm3.577 5.929l-3.577-5.418 3.577 1.972 3.577-1.972-3.577 5.418z"
        fill="#000"
      ></path>
    </svg>
  );
};

CoinEth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinEth.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default CoinEth;
