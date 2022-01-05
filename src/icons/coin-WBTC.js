import React from 'react';
import PropTypes from 'prop-types';

const CoinWbtc = (props) => {
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
      <g clipPath="url(#clip0_2_99)">
        <circle cx="12" cy="12" r="12" fill="#fff"></circle>
        <path
          d="M19.57 5.037l-.66.659a9.329 9.329 0 010 12.59l.66.66a10.271 10.271 0 000-13.925v.016z"
          fill="#5A5564"
        ></path>
        <path
          d="M5.711 5.094a9.329 9.329 0 0112.591 0l.66-.659a10.271 10.271 0 00-13.925 0l.674.659z"
          fill="#5A5564"
        ></path>
        <path
          d="M5.094 18.293a9.33 9.33 0 010-12.584l-.66-.659a10.271 10.271 0 000 13.924l.66-.68z"
          fill="#5A5564"
        ></path>
        <path
          d="M18.293 18.902a9.329 9.329 0 01-12.59 0l-.66.659a10.271 10.271 0 0013.925 0l-.675-.66z"
          fill="#5A5564"
        ></path>
        <path
          d="M16.16 9.801c-.131-1.375-1.318-1.836-2.818-1.977V5.931h-1.16v1.858h-.927V5.931h-1.15v1.906H7.751V9.08s.856-.016.843 0a.6.6 0 01.66.51v5.218a.407.407 0 01-.141.284.401.401 0 01-.3.1c.016.014-.843 0-.843 0l-.22 1.387h2.331v1.937h1.16v-1.909h.927v1.9h1.162v-1.915c1.96-.119 3.326-.602 3.497-2.436.138-1.476-.556-2.135-1.665-2.401.674-.332 1.092-.947.997-1.953zm-1.625 4.125c0 1.441-2.47 1.277-3.255 1.277v-2.557c.786.002 3.255-.224 3.255 1.28zm-.538-3.602c0 1.318-2.06 1.158-2.715 1.158V9.158c.654 0 2.715-.207 2.715 1.166z"
          fill="#F09242"
        ></path>
        <path
          d="M11.998 24a12 12 0 11.005-24.002A12 12 0 0111.998 24zm0-23.064a11.058 11.058 0 10.017 22.115A11.058 11.058 0 0011.998.936z"
          fill="#282138"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2_99">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CoinWbtc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinWbtc.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default CoinWbtc;
