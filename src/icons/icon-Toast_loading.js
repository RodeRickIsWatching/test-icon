import React from 'react';
import PropTypes from 'prop-types';

const IconToastLoading = (props) => {
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
        d="M12 2.75a9.25 9.25 0 000 18.5 9.254 9.254 0 008.827-6.475.75.75 0 111.43.45C20.889 19.585 16.816 22.75 12 22.75 6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25c1.174 0 2.306.189 3.366.538a.75.75 0 01-.47 1.424A9.24 9.24 0 0012 2.75z"
        fill="#06C270"
      ></path>
    </svg>
  );
};

IconToastLoading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconToastLoading.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconToastLoading;
