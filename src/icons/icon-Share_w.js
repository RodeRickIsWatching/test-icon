import React from 'react';
import PropTypes from 'prop-types';

const IconShareW = (props) => {
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
        d="M14.25 3a.75.75 0 01.75-.75h6a.748.748 0 01.75.75v6a.75.75 0 01-1.5 0V4.81l-9.72 9.72a.75.75 0 11-1.06-1.06l9.72-9.72H15a.75.75 0 01-.75-.75zM5 6.75A1.25 1.25 0 003.75 8v11A1.25 1.25 0 005 20.25h11A1.25 1.25 0 0017.25 19v-6a.75.75 0 011.5 0v6A2.75 2.75 0 0116 21.75H5A2.75 2.75 0 012.25 19V8A2.75 2.75 0 015 5.25h6a.75.75 0 010 1.5H5z"
        fill="#fff"
        fillOpacity=".6"
      ></path>
    </svg>
  );
};

IconShareW.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconShareW.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default IconShareW;
