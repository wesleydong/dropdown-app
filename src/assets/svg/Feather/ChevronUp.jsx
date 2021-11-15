import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronUp(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.width} viewBox="0 0 24 24" fill="none" stroke={props.color || '#ffffff'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up" {...props}>
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

ChevronUp.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  fill: PropTypes.string,
};

ChevronUp.defaultProps = {
  color: '#fff',
  width: 20,
  fill: 'none'
};