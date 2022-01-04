import React from 'react';
import PropTypes from 'prop-types';

const CoinToken1 = (props) => {
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
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-.132-5.76c.33.002.648-.123.888-.349v.015a1.221 1.221 0 00.378-.902 1.12 1.12 0 00-.364-.873 1.222 1.222 0 00-.902-.35 1.207 1.207 0 00-.887.35 1.12 1.12 0 00-.363.873 1.192 1.192 0 00.363.872 1.206 1.206 0 00.887.364zm1.906-5.702c.51-.418.995-.865 1.455-1.338v.015a3.317 3.317 0 00.712-2.08 3.07 3.07 0 00-1.033-2.459 3.854 3.854 0 00-2.734-.829 4 4 0 00-2.982 1.091 3.985 3.985 0 00-1.076 2.91H9.86a2.91 2.91 0 01.466-1.746 1.906 1.906 0 011.672-.742 1.978 1.978 0 011.455.51c.347.36.544.837.553 1.337-.014.46-.183.901-.48 1.251l-.291.32a8.846 8.846 0 00-1.92 2.153 3.404 3.404 0 00-.35 1.63v.29h1.819v-.29a2.298 2.298 0 01.276-1.136c.17-.343.414-.646.713-.887z"
        fill="#A2A8B2"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0 1c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#CED4DD"
      ></path>
    </svg>
  );
};

CoinToken1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoinToken1.defaultProps = {
  // color: 'currentColor',
  size: '24',
};

export default CoinToken1;
