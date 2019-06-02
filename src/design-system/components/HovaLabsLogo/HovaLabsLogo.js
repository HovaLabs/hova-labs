import React from 'react';
import PropTypes from 'prop-types';

export function HovaLabsLogo({ textColor, backgroundColor, size }) {
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 70 70"
      fill="#FF0000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="70" fill={backgroundColor} />
      <path
        d="M0 0V70H70V0H0ZM57.7676 60.7777L44.592 54.1346L44.691 41.3491L19.3995 41.4481L25.5535 44.4698L25.4545 60.7777L12.5701 54.1346V9.2165L25.6467 15.5685L25.5477 28.255H44.5862V9.2165L57.7676 15.6675V60.7777Z"
        fill={textColor}
      />
    </svg>
  );
}
HovaLabsLogo.defaultProps = {
  textColor: '#000000',
  backgroundColor: '#FFFFFF',
  size: 70
};
HovaLabsLogo.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
